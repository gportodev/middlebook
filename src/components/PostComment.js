import React from 'react';

function PostComment({ comment }) {
  return (
    <div className="post-comments">
      <img className="avatar" src={comment.author.avatar} />
      <div className= "comment">
        <p>
           <span>{comment.author.name}</span>
           {comment.content}
        </p>
      </div>
    </div>
  );
}

export default PostComment;
