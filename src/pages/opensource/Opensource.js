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

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

class Opensource extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        {/* <Organizations theme={this.props.theme} /> */}
        <ErrorBoundary>
          <OpensourceCharts theme={this.props.theme} />
        </ErrorBoundary>
        <ErrorBoundary>
          <GithubContributionCalendar theme={this.props.theme} />
        </ErrorBoundary>
        <ErrorBoundary>
          <GithubCommitFeed theme={this.props.theme} />
        </ErrorBoundary>
        <ErrorBoundary>
          <PullRequests theme={this.props.theme} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Issues theme={this.props.theme} />
        </ErrorBoundary>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
