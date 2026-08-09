import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";
import GithubLanguageGraph from "../githubLanguageGraph/GithubLanguageGraph";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    const dateColor = theme.dark || theme.text;

    // Process multiline description into bullet points
    const descriptionBullets =
      typeof experience["description"] === "string"
        ? experience["description"].split("\n").filter((b) => b.trim() !== "")
        : Array.isArray(experience["description"])
        ? experience["description"]
        : [experience["description"]];

    const hasLink = Boolean(experience["company_url"]);
    const isGithub =
      hasLink && experience["company_url"].includes("github.com");

    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 30 : 50, position: "relative" }}
      >
        {/* Left Side Timeline Date & Location */}
        <div className="experience-timeline-date-div">
          <p
            className="experience-card-duration"
            style={{ color: dateColor, fontWeight: "600" }}
          >
            {experience["duration"]}
          </p>
          <p
            className="experience-card-location"
            style={{ color: theme.secondaryText }}
          >
            {experience["location"]}
          </p>
        </div>

        {/* Stepper Dot & Continuous Vertical Line Branch */}
        <div className="experience-card-stepper">
          <div
            style={{
              width: 16,
              height: 16,
              backgroundColor: dateColor,
              borderRadius: "50%",
              zIndex: 10,
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                width: 2,
                backgroundColor: dateColor,
                position: "absolute",
                top: 16,
                height: "calc(100% + 50px)",
                zIndex: 1,
              }}
            />
          )}
        </div>

        {/* Card Body */}
        <Fade right duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div>
            <div
              className="experience-card"
              style={{ background: `${theme.body}`, width: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "14px" }}
                >
                  {experience["logo_path"] && (
                    <img
                      className="experience-card-logo"
                      src={require(`../../assests/images/${experience["logo_path"]}`)}
                      alt={experience["company"] || "Logo"}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        objectFit: "contain",
                        backgroundColor: "#ffffff",
                        padding: "2px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    />
                  )}
                  <div>
                    <h3
                      className="experience-card-title"
                      style={{ color: theme.text, margin: 0, fontSize: "20px" }}
                    >
                      {experience["title"]}
                    </h3>
                    <p
                      className="experience-card-company"
                      style={{ color: theme.text, margin: "2px 0 0 0" }}
                    >
                      {hasLink ? (
                        <a
                          href={experience["company_url"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-company-link"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            color: theme.text,
                            fontWeight: "500",
                            textDecoration: "none",
                          }}
                        >
                          <i
                            className={
                              isGithub ? "fab fa-github" : "fas fa-link"
                            }
                            style={{ fontSize: "15px", color: theme.text }}
                          ></i>
                          {experience["company"]}
                        </a>
                      ) : (
                        experience["company"]
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bullet Descriptions */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 15,
                }}
              >
                {descriptionBullets.map((bullet, i) => (
                  <p
                    key={i}
                    className="experience-card-description"
                    style={{
                      color: theme.text,
                      margin: "4px 0",
                      lineHeight: "1.5",
                    }}
                  >
                    {bullet}
                  </p>
                ))}
              </div>

              {/* Replicated GitHub Code Graph Component */}
              {isGithub && (
                <GithubLanguageGraph
                  repoUrl={experience["company_url"]}
                  theme={theme}
                />
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
