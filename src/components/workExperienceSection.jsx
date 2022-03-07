import React, { Component } from "react";

class WorkExperienceSection extends Component {
  state = {};
  render() {
    return (
      <div className="work-section-container">
        <div className="titles">
          <h4>Titles</h4>
          <p>Web Maintance Intern at NSTEM Honor Society</p>
          <p>Web Developer Intern at NSTEM Honor Society</p>
        </div>

        <div className="description">
          <h4>What I did</h4>
          <p>
            I am currently working as an intern in the Web and Technology
            departmennt at NSTEM. During the time that I work at NSTEM, I learnt
            various real-world technology like Wordpress, Git. I also got to
            apply my HTML, CSS and JavaScript skills on the website redesign.
          </p>
        </div>
      </div>
    );
  }
}

export default WorkExperienceSection;
