import React, { Component } from "react";
import MyPicture from "../resources/profile-pic.jpeg";

class ProfileSection extends Component {
  state = {};
  render() {
    return (
      <div className="profile-section-container">
        <div className="picture">
          <img src={MyPicture} alt="" style={{ width: "100%" }} />
        </div>
        <div className="description">
          <h4>About Me</h4>
          <p>
            Energetic and self-motivated college graduate with web development
            industry experience. Currently seeking a full-time opportunity that
            will learn and apply the programming and technical skills in the
            field of web development and information technology.
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileSection;
