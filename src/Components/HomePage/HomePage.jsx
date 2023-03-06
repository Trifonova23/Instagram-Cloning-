import React, { useState, useEffect } from "react";
import UserPost from "../UserPost/UserPost";
import "./HomePage.css";
import Header from "../Header/Header";
import UserStoriesBox from "../UserStoriesBox/UserStoriesBox";
// import SingleUserStory from "../UserStoriesBox/SingleUserStory";
import { USER_POST_MOCK_DATE } from "../../Common/Constants";

function HomePage() {
  const [postsDate, setPostDate] = useState([]);

  useEffect(() => {
    fetch(
      "https://instagram-test-app-3f2a4-default-rtdb.europe-west1.firebasedatabase.app/userPosts/-NM9YnBaKVrv6dZXHYTF.json"
    )
      .then((resPostsData) => resPostsData.json())
      .then((data) => setPostDate(data));
  }, []);

  return (
    <div className="wrapper-home-container">
      <div className="main-home-container">
        <Header />

        <div className="user-wrapper">
          <div className="user-main-container">
            <UserStoriesBox />

            {/* <SingleUserStory /> */}

            <div className="post-date-information">
              {postsDate.map((postsInformationDate) => (
                <UserPost
                  key={postsInformationDate.postPictureUrl}
                  userPicture={postsInformationDate.userPictureUrl}
                  userName={postsInformationDate.name}
                  userLocation={postsInformationDate.userLocation}
                  postTime={postsInformationDate.postTime}
                  postPicture={postsInformationDate.postPictureUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
