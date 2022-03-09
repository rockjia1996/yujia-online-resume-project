import React, { Component } from "react";

class SkillsSection extends Component {
  state = {};
  render() {
    return (
      <div className="skills-section-container snap-section">
        <div className="skill-description">
          <h4>Skills</h4>
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
          <div>
            <h4>Languages</h4>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>

          <div>
            <h4>Frameworks</h4>
            <p>React.js</p>
            <p>Express.js</p>
          </div>

          <div>
            <h4>Backend and Database</h4>
            <p>Node.js</p>
            <p>Mongo DB</p>
          </div>

          <div>
            <h4>Source Control</h4>
            <p>Git</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsSection;
