let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let mysql = require('mysql');
let cors = require('cors');

app.use(cors());

let mydb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '636893',
  database: 'mydb'
});

mydb.connect(err => {
  if(err) throw err;
  console.log('Connected');
});

let getFromSql = 'SELECT * FROM comment_list';
let postSql = 'INSERT INTO comment_list (comment) VALUES';

// create application/x-www-form-urlencoded decode-parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
let jsonParser = bodyParser.json();

// mydb.query(getFromSql,(err, result) => {
//   if(err) throw err;
//   console.log(result);
//   // res.writeHead(200,{'Content-Type':'application/json'});
//   // app.get('/commentlist',(req,res) => {
//   //   res.setHeader("Access-Control-Allow-Origin", "*");
//   //     res.send(result);
//   //   })
//   });


app.get('/commentlist', (req,res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  mydb.query(getFromSql,(err, result) => {
    if(err) throw err;
    // res.writeHead(200,{'Content-Type':'application/json'});
    res.json(result);
    console.log(result);
  })
});

app.post('/commentlist', jsonParser, (req,res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials",true);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  console.log(req.body);
  if (!req.body) return res.sendStatus(400);
  mydb.query(postSql+` ("${req.body.data}")`,(err, result) => {
    if(err) throw err;
    console.log(result);
    mydb.query(getFromSql,(err, result) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      if(err) throw err;
      res.json(result);
      console.log(result);
    })
  })
});

app.listen(8888,function(){
  console.log('listening on *:8888');
});