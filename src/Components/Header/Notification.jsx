import React from "react";

// const NotificationDropDown = () => {
//   return (
//     <div class="dropdown-notification">
//       <li> 5 likes </li>
//       <li> 50 visits to the profile </li>
//       <li>2 new suggestions to follow</li>
//     </div>
//   );
// };

const NotificationDropDown = () => {
  return (
    <div className="dropdown-notification">
      <li> 5 likes </li>
      <li> 50 visits to the profile </li>
      <li>2 new suggestions to follow</li>
    </div>
  );
};

const showNotificationDropDown = () => {
  return NotificationDropDown();
};

<button type="button" onClick={showNotificationDropDown}></button>;

export default NotificationDropDown;
