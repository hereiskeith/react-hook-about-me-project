import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentLists from './components/CommentLists';

const tags = ['basketball fan', 'JavaScript']

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: ['This is the first comment'],
      value: '',
    };
    this.addComment = this.addComment.bind(this);
    this.afterAddComment = this.afterAddComment.bind(this);
    this.addValue = this.addValue.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addComment(comment) {
    this.setState({
        comments: [...this.state.comments, comment]
      }
    )
  }

  addValue(value) {
    this.setState({
        value: value,
      }
    )
  }

  afterAddComment() {
    this.setState({
        value: '',
      }
    )
  }

  handleDelete(index) {
    const {comments} = this.state;
    comments.splice(index, 1);
    this.setState({
      comments: comments
    })
  }

  render() {
    const {comments} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <DigitalClock/>
        <NameCard name='Keith' number={3439883668} isHuman tags={tags}/>
        <LikesButton/>
        <CommentLists
          comments={comments}
          onHandleDelete={this.handleDelete}
        />
        <CommentBox
          value={this.state.value}
          numOfComments={comments.length}
          onAddComment={this.addComment}
          onAfterAddComment={this.afterAddComment}
          onTypedTextChange={this.addValue}
        />
      </div>
    );
  }
}

export default App;
