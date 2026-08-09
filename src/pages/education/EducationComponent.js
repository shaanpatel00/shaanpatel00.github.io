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

          <Fade bottom duration={2000} distance="40px">
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
                <span role="img" aria-label="documents">
                  📄
                </span>{" "}
                Specialized Resumes for Recruiters
              </h2>
              <p
                className="resume-spotlight-sub"
                style={{ color: theme.secondaryText }}
              >
                Tailored versions highlighting specific domain expertise in
                Silicon Verification, FPGA/Latency, and Hardware/Embedded
                Engineering:
              </p>
              <div className="resume-buttons-div">
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/resumes/Shaan_Patel_Resume_RTL_Verification.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                  style={{
                    backgroundColor: theme.headerColor,
                    color: theme.text,
                  }}
                >
                  <i
                    className="fas fa-file-pdf"
                    style={{ color: "#E34F26" }}
                  ></i>
                  RTL, SoC & Verification
                </a>
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/resumes/Shaan_Patel_Resume_FPGA_Latency.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                  style={{
                    backgroundColor: theme.headerColor,
                    color: theme.text,
                  }}
                >
                  <i
                    className="fas fa-file-pdf"
                    style={{ color: "#0071C5" }}
                  ></i>
                  FPGA, Verilog & Latency
                </a>
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/resumes/Shaan_Patel_Resume_PCB_Embedded.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                  style={{
                    backgroundColor: theme.headerColor,
                    color: theme.text,
                  }}
                >
                  <i
                    className="fas fa-file-pdf"
                    style={{ color: "#2EC866" }}
                  ></i>
                  PCB Layout & Firmware
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
