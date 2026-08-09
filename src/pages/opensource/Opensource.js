import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
// import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import GithubContributionCalendar from "../../components/githubContributionCalendar/GithubContributionCalendar";
import GithubCommitFeed from "../../components/githubCommitFeed/GithubCommitFeed";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        {/* <Organizations theme={this.props.theme} /> */}
        <OpensourceCharts theme={this.props.theme} />
        <GithubContributionCalendar theme={this.props.theme} />
        <GithubCommitFeed theme={this.props.theme} />
        <PullRequests theme={this.props.theme} />
        <Issues theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
