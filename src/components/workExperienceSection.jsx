import React, { Component } from "react";

class WorkExperienceSection extends Component {
  state = {};
  render() {
    return (
      <div className="work-section-container snap-section">
        <div className="titles">
          <h4>Work Experience</h4>
          <p>Web Maintance Intern at NSTEM</p>
          <p>Web Developer Intern at NSTEM</p>
        </div>

        <div className="work-description">
          <h4>What I did</h4>
          <p>
            I am currently working as an intern in the Web and Technology
            departmennt at NSTEM. During the time that I work at NSTEM, I learnt
            various real-world technology like Wordpress. I also got to apply my
            HTML, CSS and JavaScript skills on the website redesign.
          </p>
          <h4>Work in Production</h4>
          <p>
            <a
              href="https://www.nstem.org/chapter-development-advisor/"
              style={{ textDecoration: "none" }}
            >
              Chapter Development Advsior Page
            </a>
          </p>
          <p>
            <a
              href="https://www.nstem.org/the-priority-of-school-prospects/"
              style={{ textDecoration: "none" }}
            >
              The Priority of School Prospects Page
            </a>
          </p>
          <p>
            <a
              href="https://www.nstem.org/chapter-development-advisor-specific-tasks-usa/"
              style={{ textDecoration: "none" }}
            >
              Specific Tasks (USA) Page
            </a>
          </p>
          <p>
            <a
              href="https://www.nstem.org/chapter-development-advisor-specific-tasks-international/"
              style={{ textDecoration: "none" }}
            >
              Specific Task (International) Page
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default WorkExperienceSection;
