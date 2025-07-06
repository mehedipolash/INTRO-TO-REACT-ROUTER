import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div
      style={{ border: '2px solid teal', borderRadius: '10px', margin: '15px' }}
    >
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show details</button>
      </Link>

      <button onClick={handleNavigate}>Details of: {id}</button>
    </div>
  );
};

export default Post;
