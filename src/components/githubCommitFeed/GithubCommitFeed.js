import React from "react";
import "./GithubCommitFeed.css";
import recentCommitsData from "../../shared/opensource/recent_commits.json";

const GithubCommitFeed = ({ theme }) => {
  const commits = Array.isArray(recentCommitsData) ? recentCommitsData : [];

  if (commits.length === 0) {
    return null;
  }

  const formatDate = (isoString) => {
    if (!isoString) return "";
    const d = new Date(isoString);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="github-commit-feed-main">
      <div className="github-commit-feed-header">
        <h2 className="github-commit-feed-title" style={{ color: theme.text }}>
          Recent Commit Activity Feed
        </h2>
        <p
          className="github-commit-feed-subtitle"
          style={{ color: theme.secondaryText }}
        >
          Live updates directly from active engineering repositories
        </p>
      </div>

      <div className="github-commit-feed-list">
        {commits.slice(0, 8).map((commit, index) => (
          <div
            key={index}
            className="github-commit-card"
            style={{
              backgroundColor: theme.body,
              borderLeftColor: theme.dark || theme.text,
            }}
          >
            <div className="github-commit-card-top">
              <span
                className="github-commit-repo-badge"
                style={{
                  backgroundColor: theme.headerColor,
                  color: theme.text,
                }}
              >
                <i
                  className="fas fa-code-branch"
                  style={{ marginRight: "6px" }}
                ></i>
                {commit.repo}
              </span>
              <span
                className="github-commit-date"
                style={{ color: theme.secondaryText }}
              >
                {formatDate(commit.date)}
              </span>
            </div>

            <p className="github-commit-message" style={{ color: theme.text }}>
              {commit.message}
            </p>

            <div className="github-commit-card-bottom">
              <a
                href={commit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-commit-sha-link"
                style={{ color: theme.dark || theme.text }}
              >
                <i className="fab fa-github" style={{ marginRight: "4px" }}></i>
                {commit.sha}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubCommitFeed;
