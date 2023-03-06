import React from "react";


const SingleUserStory = ({ picture }) => {
  return (
    <div className="profile">
      <img src={picture} alt="" />
    </div>
  );
};

export default SingleUserStory;
