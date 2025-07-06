import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData();

  const params = useParams();
  console.log(params);

  const { userId } = useParams;

  console.log(userId);

  const { website, name } = user;
  // console.log(user);
  return (
    <div>
      <h3>userDeatils hear</h3>
      <h5>{name}</h5>
      <p>website: {website}</p>
    </div>
  );
};

export default UserDetails;
