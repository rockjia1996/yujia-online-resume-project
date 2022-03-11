import React, { Component } from "react";

class WorkExperienceSection extends Component {
  state = {};
  render() {
    return (
      <div className="work-section-container snap-section work-background">
        <div>
          <div className="titles">
            <h4>Work Experience</h4>
            <div className="production-button color-success">
              Web Maintance Intern at NSTEM
            </div>
            <div className="production-button color-success">
              Web Developer Intern at NSTEM
            </div>
          </div>
          <div>
            <h4>Works in Production</h4>

            <div className="production-button color-primary">
              <a
                href="https://www.nstem.org/career-at-nstem/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Career at Career at NSTEM™
              </a>
            </div>

            <div className="production-button color-primary">
              <a
                href="https://www.nstem.org/chapter-development-advisor/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Chapter Development Advsior Page
              </a>
            </div>
            <div className="production-button color-primary">
              <a
                href="https://www.nstem.org/the-priority-of-school-prospects/"
                style={{ textDecoration: "none", color: "white" }}
              >
                The Priority of School Prospects Page
              </a>
            </div>
            <div className="production-button color-primary">
              <a
                href="https://www.nstem.org/chapter-development-advisor-specific-tasks-usa/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Specific Tasks (USA) Page
              </a>
            </div>
            <div className="production-button color-primary">
              <a
                href="https://www.nstem.org/chapter-development-advisor-specific-tasks-international/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Specific Task (International) Page
              </a>
            </div>
          </div>
        </div>

        <div className="work-description">
          <h4>What I did</h4>
          <p>
            I am currently working as an intern in the Web and Technology
            departmennt at NSTEM. During the time that I work at NSTEM, I learnt
            various real-world technology like Wordpress. I also got to apply my
            HTML, CSS and JavaScript skills on the website redesign.
          </p>
        </div>
      </div>
    );
  }
}

export default WorkExperienceSection;
