import React from 'react';

import PostComment from './PostComment';

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}


function Post({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">
        {content}
      </p>
      {comments.map(comment => (
        <PostComment
          comment={comment}   
        />
      ))}
    </div>
  );
}


export default Post;