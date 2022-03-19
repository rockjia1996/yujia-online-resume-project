import React, { Component } from "react";
import ProjectCard from "./projectCard";
import ResumePic from "../resources/resumePic.jpg";
import StoragePic from "../resources/storagePic.jpg";

class PersonalProjects extends Component {
  state = {};

  handlePageChange(url) {
    window.open(url, "_blank");
  }

  render() {
    return (
      <div className="projects-section-container snap-section project-background">
        <div className="projects">
          <ProjectCard
            cardImage={StoragePic}
            cardDescription={{
              title: "Mini Online Storage",
              content:
                "A full-stack project. At the frontend, React.js is used as its UI framework. At the backend, server is a Node.js application that uses Express.js as its web framework and Mongo DB as its database.",
            }}
            cardFooter={[
              "https://github.com/rockjia1996/yujia-online-storage-frontend",
              "https://yujia-online-storage.herokuapp.com/",
              "",
            ]}
          />

          <ProjectCard
            cardImage={ResumePic}
            cardDescription={{
              title: "Personal Online Resume",
              content:
                "A full-stack project. At the frontend, React.js is used as its UI framework. At the backend, server is a Node.js application that uses Express.js as its web framework and Mongo DB as its database.",
            }}
            cardFooter={[
              "https://github.com/rockjia1996/yujia-online-resume-project",
              "https://yujia-online-resume.herokuapp.com/",
              "",
            ]}
          />
        </div>

        <div className="project-description">
          <h4 style={{ margin: 0, color: "white" }}>Personal Projects</h4>
          <p style={{ textAlign: "left", color: "white" }}>
            There are two projects that I was working on when I was offwork. By
            using these two projects, I was able to apply the new techniques
            that I learnt from my job and udemy courses. Feel free to check it
            out!. If you are interested in the source code, you can find the
            source on my Github repo.
          </p>
        </div>
      </div>
    );
  }
}

export default PersonalProjects;
