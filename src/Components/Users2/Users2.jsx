import React, { use } from 'react';

const Users2 = ({ userPromise }) => {
  const users = use(userPromise);

  console.log('users to suspense data load', users);
  return (
    <div>
      <h2>this is users2</h2>
    </div>
  );
};

export default Users2;
