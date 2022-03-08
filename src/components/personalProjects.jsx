import React, { Component } from "react";

class PersonalProjects extends Component {
  state = {};
  render() {
    return (
      <div className="projects-section-container snap-section">
        <div className="project">
          <p>Mini Online Storage Frontend</p>
        </div>

        <div className="project">
          <p>Mini Online Storage Backend</p>
        </div>

        <div className="project">
          <p>Personal Online Resume</p>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
