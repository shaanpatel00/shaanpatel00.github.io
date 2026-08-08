import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";

import { Fade } from "react-reveal";
import prData from "../../shared/opensource/pull_requests.json";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    const mergedPRs = prData.merged || 20;
    const totalPRs = prData.totalCount || 25;

    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />

        <Fade bottom duration={2000} distance="40px">
          <div
            className="os-summary-div"
            style={{
              backgroundColor: theme.highlight,
              border: `1px solid ${theme.secondaryText}22`,
            }}
          >
            <h1 className="os-summary-title" style={{ color: theme.text }}>
              Open Source Impact & Contributions
            </h1>
            <p
              className="os-summary-sub"
              style={{ color: theme.secondaryText }}
            >
              Automated statistics updated continuously via GitHub Actions CI/CD
              pipeline
            </p>

            <div className="os-stats-grid">
              <div
                className="os-stat-card"
                style={{ backgroundColor: theme.body }}
              >
                <div className="os-stat-number" style={{ color: "#2EC866" }}>
                  {mergedPRs}
                </div>
                <div className="os-stat-label" style={{ color: theme.text }}>
                  Pull Requests Merged
                </div>
              </div>

              <div
                className="os-stat-card"
                style={{ backgroundColor: theme.body }}
              >
                <div className="os-stat-number" style={{ color: "#0071C5" }}>
                  {totalPRs}
                </div>
                <div className="os-stat-label" style={{ color: theme.text }}>
                  Total PR Contributions
                </div>
              </div>

              <div
                className="os-stat-card"
                style={{ backgroundColor: theme.body }}
              >
                <div className="os-stat-number" style={{ color: "#E34F26" }}>
                  100%
                </div>
                <div className="os-stat-label" style={{ color: theme.text }}>
                  Automated GitHub Sync
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Organizations theme={this.props.theme} />
        <OpensourceCharts theme={this.props.theme} />
        <PullRequests theme={this.props.theme} />
        <Issues theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
