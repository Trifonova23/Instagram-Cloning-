import React, { useState, useEffect } from "react";
import SingleUserStory from "./SingleUserStory";

const UserStoriesBox = () => {
  const [storyData, setStoryDate] = useState([]);

  //   useEffect(() => {
  //     fetch('www.google.com')
  //     .then(response => {
  //         setStoryDate(response)
  //     })
  //     .catch(error => {
  //         console.log('error',error)
  //     });
  //   }, []);

  useEffect(() => {
    fetch(
      "https://instagram-test-app-3f2a4-default-rtdb.europe-west1.firebasedatabase.app/userStories/-NM9XyV43-m0UiH4uOzM.json"
    )
      .then((resStoryData) => resStoryData.json())
      .then((data) => setStoryDate(data));
  }, []);

  return (
    <div className="user-stories-box">
      {storyData.map((singleStoryInfo) => (
        <SingleUserStory
          key={singleStoryInfo.url}
          picture={singleStoryInfo.url}
        />
      ))}
    </div>
  );
};

export default UserStoriesBox;
