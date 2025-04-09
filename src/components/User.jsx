import React from "react";

const User = (props) => {
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {props.name}</p>
      <p>Email:{props.email}</p>
    </div>
  );
};

export default User;
