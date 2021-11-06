import React, { Component } from "react";
// import ProjectDetailsModal from "./ProjectDetailsModal";
import microinfo from "../images/microinfocom.png";
import fixcar from "../images/fixcarcom.png";
import mynewjob from "../images/mynewjobcom.png";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    // let detailsModalShow = (data) => {
    //  this.setState({ detailsModalShow: true, deps: data });
    // };

    // let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var visitSite = this.props.resumeBasicInfo.section_name.visit_site;
      var viewSite = this.props.resumeBasicInfo.section_name.view_code;
      var photos = [microinfo, fixcar, mynewjob];
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
          >
            <span className="portfolio-item d-block">
              <div className="foto" >
                <div> 
                  <a href={projects.site_url}>
                    <img
                      src={photos[projects.images]}
                      alt="projectImages"
                      height="230"
                      style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                    />
                  </a>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                  <span className="projects-description-container">
                    <p className="projects-description" >{projects.description}</p>
                  </span>
                  <p className="projects-description">{projects.status}</p>
                  <span className={"project-links"}>
                    <a className="project-date" href={projects.site_url}>{visitSite}</a>
                    <a className="project-date" href={projects.github_url}>{viewSite}</a>
                  </span>
                  {projects.technologies.map(function (tools) {
                    return (
                      <span className="iconify tools-icon" data-icon={tools.class} ></span>
                    )})
                  }
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto d-flex justify-content-center">{projects}</div>
          </div>
          {/*  <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
          */}
        </div>
      </section>
    );
  }
}

export default Projects;
