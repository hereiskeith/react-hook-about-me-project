import React, {useContext, useReducer, useEffect, useState} from 'react';
import {theme, ThemeContext} from "../theme-context";
import axios from "axios";
import {fromJS} from 'immutable'

const CommentLists = props => {
  const theme = useContext(ThemeContext);
  const {state, dispatch} = props;
  useEffect(() => {
    axios.get('http://localhost:8888/commentlist', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(data => {
      console.log(data);
      return dispatch({
        type: 'loadCommentList',
        data: fromJS(data.data)
      })
    }).catch(err => console.log(err))
  }, []);

  return (
    <div className="comment-list-component">
      <label>{theme.commentList}</label>
      <div style={{height: 280, overflowX: 'hidden', overflowY: 'auto'}} className=''>
        {
          state.get('commentList').map((comment, index) => {
            return (
              <p key={index} className="list-group-item mb-1" style={{opacity: 0.6}}>
                {comment.get('comment')}
              </p>
            )
          })
        }
      </div>
    </div>
  )
};

export default CommentLists;