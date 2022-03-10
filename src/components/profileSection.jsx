import React, { Component } from "react";
import MyPicture from "../resources/profile-pic.jpeg";

class ProfileSection extends Component {
  state = {};
  render() {
    return (
      <div className="profile-section-container snap-section profile-background">
        <div className="picture">
          <img src={MyPicture} alt="" width={300} />
          <p>
            <small>Me at Some Pumpkin Farm, NJ</small>
          </p>
        </div>

        <div className="profile-description">
          <h4 style={{ margin: 0 }}>About Me</h4>
          <p>
            Energetic and self-motivated college graduate with web development
            industry experience. Currently seeking a full-time opportunity that
            allows me to learn and apply programming and technical skills in the
            field of web development and information technology.
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileSection;
