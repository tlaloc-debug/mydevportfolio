import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var frontEnd = this.props.resumeBasicInfo.section_name.front_end;
      var backEnd = this.props.resumeBasicInfo.section_name.back_end;
      var server = this.props.resumeBasicInfo.section_name.server;
      var eCommerce = this.props.resumeBasicInfo.section_name.ecommerce;
      var skillsFront = this.props.sharedSkills.icons.filter(element => element.type === "front").map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
              <span className="iconify skills-icon" data-icon={skills.class} data-inline="false" ></span>
                
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var skillsBack = this.props.sharedSkills.icons.filter(element => element.type === "back").map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
              <span className="iconify skills-icon" data-icon={skills.class} data-inline="false" ></span>
                
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var skillsServer = this.props.sharedSkills.icons.filter(element => element.type === "server").map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
              <span className="iconify skills-icon" data-icon={skills.class} data-inline="false" ></span>
                
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var skillsEcommerce = this.props.sharedSkills.icons.filter(element => element.type === "ecommerce").map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
              <span className="iconify skills-icon" data-icon={skills.class} data-inline="false" ></span>
                
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <h1 className="section-subtitle">
              <span className="text-white">{frontEnd}</span>
            </h1>
            <ul className="list-inline mx-auto skill-icon">{skillsFront}</ul>
            <h1 className="section-subtitle">
              <span className="text-white">{backEnd}</span>
            </h1>
            <ul className="list-inline mx-auto skill-icon">{skillsBack}</ul>
            <h1 className="section-subtitle">
              <span className="text-white">{server}</span>
            </h1>
            <ul className="list-inline mx-auto skill-icon">{skillsServer}</ul>
            <h1 className="section-subtitle">
              <span className="text-white">{eCommerce}</span>
            </h1>
            <ul className="list-inline mx-auto skill-icon">{skillsEcommerce}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
