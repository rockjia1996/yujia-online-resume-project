import React, { Component } from "react";

class SkillsSection extends Component {
  state = {};
  render() {
    return (
      <div className="skills-section-container">
        <div className="description">
          <p>
            During the time that I studied in the university. I learnt the
            basics of the Computer Science, such as data structure, alogirthm,
            operating system, and computer network. After I graduated, I
            obtained a good protion of programming skills from the teachable and
            Udemy. I also learnt from coworkers about backend skills like Git,
            Node.js, Wordpress, and MongoDB. Here are the skills that I learned
            from various online resources after I graduated.
          </p>
        </div>

        <div className="skills">
          <h3>Language</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>

          <h3>Frameworks</h3>
          <p>React.js</p>
          <p>Express.js</p>

          <h3>Backend and Database</h3>
          <p>Node.js</p>
          <p>Mongo DB</p>

          <h3>Source Control</h3>
          <p>Git</p>
        </div>
      </div>
    );
  }
}

export default SkillsSection;