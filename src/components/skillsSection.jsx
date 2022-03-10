import React, { Component } from "react";

class SkillsSection extends Component {
  state = {};
  render() {
    return (
      <div className="skills-section-container snap-section skill-background">
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
          <div className="skills-container">
            <h4>Languages</h4>
            <div className="skill-button color-info">HTML</div>
            <div className="skill-button color-info">CSS</div>
            <div className="skill-button color-info">JavaScript</div>
          </div>

          <div className="skills-container">
            <h4>Frameworks</h4>
            <div className="skill-button color-success">React.js</div>
            <div className="skill-button color-success">Express.js</div>
          </div>

          <div className="skills-container">
            <h4>Backend</h4>
            <div className="skill-button color-danger">Node.js</div>
            <div className="skill-button color-danger">Mongo DB</div>
          </div>

          <div className="skills-container">
            <h4>Source Control</h4>
            <div className="skill-button color-primary">Git</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsSection;
