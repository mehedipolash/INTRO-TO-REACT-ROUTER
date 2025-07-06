import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
  const users = useLoaderData();

  console.log(users);
  return (
    <div>
      <h2>This is users page</h2>
      {users.map(user => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default Users;
