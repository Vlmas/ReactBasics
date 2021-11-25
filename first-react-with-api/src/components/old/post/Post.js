import React from "react";
import './Post.css';

const Post = (props) => {
  const { postId, id, title, body } = props.post;

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default Post;