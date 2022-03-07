import React, { Component } from "react";
import EducationPic from "../resources/edu-timeline.png";

class EducationSection extends Component {
  state = {};
  render() {
    return (
      <div className="education-section-container">
        <div className="picture">
          <img src={EducationPic} alt="" width={300} />
        </div>

        <div className="description">
          <h4>Education Background</h4>
          <p>
            I spent most of my teenage life in the midwest. I went to Crossroad
            College Prep for three years in St.Louis, MO. Later I studied at
            Saint Louis Univerity for five years as a computer science major
            student.
          </p>
        </div>
      </div>
    );
  }
}

export default EducationSection;
