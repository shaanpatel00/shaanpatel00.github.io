import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />

          <Fade bottom duration={2000} distance="30px">
            <div
              className="resume-spotlight-div"
              style={{
                backgroundColor: theme.highlight,
                border: `1px solid ${theme.secondaryText}22`,
              }}
            >
              <h2
                className="resume-spotlight-title"
                style={{ color: theme.text }}
              >
                <span role="img" aria-label="Resume Document">
                  📄
                </span>{" "}
                Specialized Resumes for Recruiters
              </h2>
              <p
                className="resume-spotlight-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Download targeted resume versions aligned with specific domain
                roles:
              </p>
              <div className="resume-buttons-container">
                <a
                  className="resume-btn"
                  style={{ backgroundColor: theme.text, color: theme.body }}
                  href={
                    process.env.PUBLIC_URL +
                    "/resumes/Shaan_Patel_RTL_SoC_Verification_Resume.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-microchip"></i> RTL / SoC / UVM
                  Verification
                </a>
                <a
                  className="resume-btn"
                  style={{ backgroundColor: theme.text, color: theme.body }}
                  href={
                    process.env.PUBLIC_URL +
                    "/resumes/Shaan_Patel_FPGA_Latency_Networking_Resume.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-network-wired"></i> FPGA / Latency /
                  Networking
                </a>
                <a
                  className="resume-btn"
                  style={{ backgroundColor: theme.text, color: theme.body }}
                  href={
                    process.env.PUBLIC_URL +
                    "/resumes/Shaan_Patel_PCB_Embedded_Firmware_Resume.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-microchip"></i> PCB / Firmware / Embedded
                </a>
              </div>
            </div>
          </Fade>

          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
