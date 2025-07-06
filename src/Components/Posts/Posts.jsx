import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>these are posts :{posts.length}</h2>

      <div>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
