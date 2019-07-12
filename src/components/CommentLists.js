import React from 'react';

const CommentLists = ({ comments }) => {
    return (
        <div className="comment-list-component">
            <label>Comment List</label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment, index)=>
                        <li key={index} className="list-group-item">{comment}</li>
                    )
                }
            </ul>
        </div>
    )
};

export default CommentLists;