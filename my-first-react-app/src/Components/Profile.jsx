import React from "react";

const Profile = (props) => {
  const { name, age } = props;
  return (
    <div>
      Hello, {name}, your age old is : {age}
    </div>
  );
};

export default Profile;
