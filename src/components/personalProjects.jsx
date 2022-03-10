import React, { Component } from "react";
import Card from "./card";
class PersonalProjects extends Component {
  state = {};
  render() {
    return (
      <div className="projects-section-container snap-section project-background">
        <div>
          <h4 style={{ margin: 0 }}>Personal Projects</h4>
          <div className="projects">
            <Card
              title={"Mini Online Storage"}
              content={`Mini Online Storage Project is a full-stack project. At the 
            frontend, React.js is used as its UI framework. At the backend, 
            server is a Node.js application that uses Express.js as its web 
            framework and Mongo DB as its database.`}
              footer={""}
            />

            <Card
              title={"Personal Online Resume"}
              content={`Personal Online Resume Project is a frontend only project. The
              project does not have a complex backend like Mini Online Storage.
              React.js is chose as its main framework. For the styling, the
              project mainly uses vanilia CSS.`}
              footer={""}
            />
          </div>
        </div>

        <div className="source-code-panel">
          <p style={{ textAlign: "left", color: "white" }}>
            There are two projects that I was working on when I was offwork. By
            using these two projects, I was able to apply the new techniques
            that I learnt from my job and udemy courses. Feel free to check it
            out!. If you are interested in the source code, you can find the
            source on my Github repo.
          </p>
          <div className="source-code-button color-success">
            <a
              href="https://github.com/rockjia1996/yujia-online-storage-frontend"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              Mini Online Storage (frontend)
            </a>
          </div>
          <div className="source-code-button color-success">
            <a
              href="https://github.com/rockjia1996/yujia-online-storage-backend"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              Mini Online Storage (backend)
            </a>
          </div>
          <div className="source-code-button color-success">
            <a
              href="https://github.com/rockjia1996/yujia-online-resume-project"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              Personal Online Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
