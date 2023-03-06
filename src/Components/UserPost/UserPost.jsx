import React from "react";

const UserPost = ({
  userPicture,
  userName,
  userLocation,
  postTime,
  postPicture,
}) => {
  return (
    <div className="user-post-box">
      <div className="user-profile-information">
        <div className="wrapper-profile-elements-left">
          <div className="user-profile-picture">
            {/* <img src="user-picture.jpg" alt="" /> */}
            <img src={userPicture} alt="" />
          </div>

          <div className="wrapper-profile-name-and-location">
            <div className="user-profile-name">
              <p> {userName} </p>
            </div>
            <div className="user-profile-location">
              <p> {userLocation} </p>
            </div>
          </div>
        </div>

        <div className="wrapper-profile-element-right">
          <div className="hour-of-the-post">
            <p> {postTime} </p>
          </div>
        </div>
      </div>

      <div className="user-post-picture">
        {/* <img src="image-post.jpg" alt="img-post" /> */}
        <img src={postPicture} alt="img-post" />
      </div>
    </div>
  );
};

export default UserPost;
