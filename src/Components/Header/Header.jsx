import React, { useState } from "react";
import NotificationDropDown from "./Notification";

export default function Header() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  //this function is toggling the state of isNotificationVisible every time the function is
  //called by changing the value from true to false, or from false to true.
  //use only boolean
  const notificationHide = () => {
    setIsNotificationVisible((prevState) => !prevState);
  };

  return (
    <div className="home-header-container">
      <div className="home-header-left-elements">
        <div className="instagram-logo-icon">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="border"></div>
        <div className="instagram-logo-picture">
          <img
            className="home-instagram-logo"
            src="instagram_logo.svg.png"
            alt="instagram-logo"
          />
        </div>
      </div>

      <div className="home-header-center-element">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p> Search </p>
        </div>
      </div>

      <div className="home-header-right-element">
        <div className="profile-notification-and-information">
          <div className="compass-icon icon-header">
            <i className="fa-regular fa-compass"></i>
          </div>
          {/* <div
            className="notification-box icon-header"
            type="button"
            onClick={NotificationDropDown}
          >
            <i className="fa-regular fa-heart"></i>
          </div> */}

          <div className="notification-box icon-header">
            <div onClick={notificationHide}>
              <i className="fa fa-regular fa-heart"></i>
            </div>
            {isNotificationVisible === true ? (
              <div className="dropdown-notification">
                <li> 5 likes </li>
                <li> 50 visits to the profile </li>
                <li>2 new suggestions to follow</li>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="user-information icon-header">
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
