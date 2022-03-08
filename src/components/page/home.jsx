import React, { Component } from "react";
import EducationSection from "../educationSection";
import PersonalProjects from "../personalProjects";
import ProfileSection from "../profileSection";
import SkillsSection from "../skillsSection";
import WorkExperienceSection from "../workExperienceSection";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="snap-container">
        <ProfileSection />
        <EducationSection />
        <WorkExperienceSection />
        <SkillsSection />
        <PersonalProjects />
      </div>
    );
  }
}

export default Home;
