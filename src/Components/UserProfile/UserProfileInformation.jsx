import React from "react";
import "./UserProfileInformation.css";

export default function MyProfile() {
  return (
    <div className="wrapper-my-profile-page">
      <div className="wrapper-left-header-">
        <div className=""></div>
      </div>

      <div className="container-main-profile">
        <div className="container-my-profile-main">
          <div className="wrapper-picture-and-my-profile-information">
            <div className="my-profile-text-and-picture-information">
              <div className="wrapper-my-profile-picture">
                <div className="my-profile-picture">
                  <img src="my-profile-picture.jpg" alt="profilePicture" />
                </div>
              </div>
              <div className="my-profile-text-information">
                <div className="wrapper-name-btn-settings">
                  <div className="my-name">
                    <p>trifonova.nataliya.23</p>
                  </div>
                  <div>
                    {" "}
                    <button className="edit-profile-btn">
                      {" "}
                      <p>Edit Profile</p>{" "}
                    </button>
                  </div>
                  <div className="icon-setting-profile">
                    {" "}
                    <i className="fa-solid fa-gear"></i>{" "}
                  </div>
                </div>

                <div className="wrapper-posts-followers-following">
                  <div className="posts">
                    <p>6 posts</p>
                  </div>
                  <div className="followers">
                    <p>999 followers</p>
                  </div>
                  <div className="following">
                    <p>1,258 following</p>
                  </div>
                </div>

                <div className="wrapper-information-for-me">
                  <div className="name-icon">
                    <i class="fas fa-female"></i>
                    <p>Nataliya Trifonova</p>
                  </div>

                  <div className="laptop-icon">
                    {" "}
                    <i class="fas fa-laptop-code"></i>Front-end Developer
                  </div>
                  <div>
                    {" "}
                    <i className="fa-solid fa-location-dot"></i>
                    Sofia,Bulgaria
                  </div>
                  <div className="travel-info">
                    <i className="fas fa-fire"></i>
                    <p>An adventurer, loves travel, sports and adrenaline :)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------ */}
          <div className="wrapper-my-profile-favorite-stories">
            <div className="favorite-single-story">
              <img src="add-story-img.png" alt="add-story" />
              <p>Add Story</p>
            </div>
            <div className="favorite-single-story">
              <img src="travel-pic.jpg" alt="" />
              <p>Travel</p>
            </div>

            <div className="favorite-single-story">
              <img src="sport-pic.jpg" alt="" />
              <p>Sport</p>
            </div>

            <div className="favorite-single-story">
              <img src="carting-pic.jpg" alt="" />
              <p> Carting</p>
            </div>

            <div className="favorite-single-story">
              <img src="dog-pic.jpg" alt="" />
              <p>Dog</p>
            </div>

            <div className="favorite-single-story">
              <img src="mountain-pic.jpg" alt="" />
              <p>Mountain</p>
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
          <div className="wrapper-my-profile-post-pictures">
            <div className="container-posts-saved-tagged">
              <div className="posts">
                <i className="far fa-image"></i>
                <p>POSTS</p>
              </div>
              <div className="saved">
                <i class="fa-solid fa-bookmark"></i>
                <p>SAVED</p>
              </div>
              <div className="tagged">
                <i className="fa-solid fa-user-tag"></i>
                <p>TAGGED</p>
              </div>
            </div>

            <div className="wrapper-my-pictures">
              <div className="post-containers">
                <img src="img-post-my-profile1.jpg" alt="postPicture" />
                <img src="img-post-my-profile2.jpg" alt="postPicture" />
                <img src="img-post-my-profile3.jpg" alt="postPicture" />
                <img src="img-post-my-profile4.jpg" alt="postPicture" />
                <img src="img-post-my-profile5.jpg" alt="postPicture" />
                <img src="img-post-my-profile6.jpg" alt="postPicture" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
