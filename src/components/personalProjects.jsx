import React, { Component } from "react";

class PersonalProjects extends Component {
  state = {};
  render() {
    return (
      <div className="projects-section-container snap-section">
        <h4>Personal Projects</h4>

        <div className="project">
          <p>
            <a
              href="http://yujia-online-storage.herokuapp.com/"
              target={"blank"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Mini Online Storage Frontend
            </a>
          </p>
        </div>

        <div className="project">
          <p>
            <a
              href="https://github.com/rockjia1996/yujia-online-storage-backend"
              target={"blank"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Mini Online Storage Backend
            </a>
          </p>
        </div>

        <div className="project">
          <p>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Personal Online Resume
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
