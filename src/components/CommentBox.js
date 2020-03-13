import React, {useContext, useState} from 'react';
import {theme, ThemeContext} from "../theme-context";
import {fromJS} from 'immutable';
import {initialState} from "../store/reducer";
import axios from 'axios';

const CommentBox = props => {
  const {state, dispatch} = props;
  const theme = useContext(ThemeContext);
  const [comment, setComment] = useState('');
  const handleChange = e => {
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8888/commentlist', {data: comment}, {
      headers: {
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        //  'Authorization': 'Basic ' + base64.encode(username + ":" +  password)),
        //     mode: 'cors',
        //     credentials: 'include',
      }
    }).then(data => {
      console.log(data);
      dispatch({
        type: 'submitComment',
        data: fromJS(data.data)
      });
    }).catch(err => console.log(err));
    setComment('');
    initialState.commentList = state.commentList;
  };

  return (
    <form className="p-0" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          {theme.comment}
        </label>
        <div className='row pl-3 pr-3'>
          <div className=' col-md-10 pr-1 mb-2'>
            <input
              type="text"
              className="form-control"
              placeholder="Please leave your comment"
              onChange={handleChange}
              value={comment}
              // ref={(textInput) => {this.textInput = textInput}}
            />
          </div>
          <button type="submit" className="btn btn-info col-md-2 mb-2 p-0 pt-1 pb-1 " style={{opacity: 0.9}}>
            {theme.submit}
          </button>
        </div>
        <p>
          {theme.noteFirstPart}{state.get('commentList').size}{state.get('commentList').size > 1 ? theme.noteSecondParts : theme.noteSecondPart}
        </p>
      </div>
    </form>
  )
};

export default CommentBox;