import React from "react";
import Post from "../post/Post";
import './PostsList.css';

class PostsList extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((rawData) => rawData.json())
      .then((data) => {
        console.log(data);
        this.setState({ posts: data });
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
          return (
            <Post key={post.id} post={post} />
          );
        })}
      </div>
    );
  }
}

export default PostsList;