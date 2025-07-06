import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h1>PostDetails</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default PostDetails;
