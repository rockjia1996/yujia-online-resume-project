import React, { Component } from "react";
import EducationPic from "../resources/edu-timeline.png";
import Timeline from "./timeline";

class EducationSection extends Component {
  state = {};
  render() {
    return (
      <div className="education-section-container snap-section education-background">
        <div className="education-description">
          <h4>Education Background</h4>
          <p>
            I spent most of my teenage life in the midwest. I went to Crossroad
            College Prep for three years in St.Louis, MO. Later I studied at
            Saint Louis Univerity for five years as a computer science major
            student.
          </p>
        </div>

        {/*
        <div className="picture">
          <img src={EducationPic} alt="" width={300} />
        </div>
    */}
        <div className="timeline-section">
          <Timeline
            content={[
              {
                title: "2016 \nEnrolled in Saint Louis University",
                content:
                  "After a few intro level Computer Science courses, I transfered my major to Computer Science",
              },
              {
                title: "2021 Graduated from college",
                content:
                  "Successfully graduated from Saint Louis University with Bachalor of Science in Honor",
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default EducationSection;
