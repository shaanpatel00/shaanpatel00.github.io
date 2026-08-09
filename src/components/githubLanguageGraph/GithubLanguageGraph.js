import React, { useState, useEffect } from "react";
import "./GithubLanguageGraph.css";
import prebuiltLanguages from "../../shared/opensource/experience_languages.json";

const GITHUB_LANG_COLORS = {
  "C++": "#f34b7d",
  SystemVerilog: "#dae1c2",
  Verilog: "#b2b7f8",
  Makefile: "#427819",
  C: "#555555",
  Assembly: "#6E4C13",
  Python: "#3572A5",
  Tcl: "#e4cc98",
  Shell: "#89e051",
  "Linker Script": "#a463f2",
  CMake: "#da291c",
  KiCad: "#314da0",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Other: "#c4c4c4",
};

const GithubLanguageGraph = ({ repoUrl, theme }) => {
  const [langData, setLangData] = useState(null);

  // Extract "owner/repo" from repoUrl
  const getRepoPath = (url) => {
    if (!url) return null;
    const match = url.match(/github\.com\/([^/]+\/[^/]+)/);
    return match ? match[1] : null;
  };

  const repoPath = getRepoPath(repoUrl);

  useEffect(() => {
    if (!repoPath) return;

    // Load prebuilt fallback data first
    if (prebuiltLanguages && prebuiltLanguages[repoPath]) {
      setLangData(prebuiltLanguages[repoPath]);
    }

    // Attempt live fetch from GitHub API for real-time accuracy
    fetch(`https://api.github.com/repos/${repoPath}/languages`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && Object.keys(data).length > 0) {
          setLangData(data);
        }
      })
      .catch((err) => {
        console.warn(
          "Could not fetch live GitHub language data, using cached fallback:",
          err
        );
      });
  }, [repoPath]);

  if (!repoPath || !langData || Object.keys(langData).length === 0) {
    return null;
  }

  // Calculate total bytes
  const totalBytes = Object.values(langData).reduce((a, b) => a + b, 0);
  if (totalBytes === 0) return null;

  // Process raw language entries into percentages
  const entries = Object.entries(langData)
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: (bytes / totalBytes) * 100,
      color: GITHUB_LANG_COLORS[name] || "#8b949e",
    }))
    .sort((a, b) => b.bytes - a.bytes);

  // If there are many entries, group ones < 1.5% into "Other"
  const mainEntries = [];
  let otherBytes = 0;

  entries.forEach((item) => {
    if (entries.length > 4 && item.percentage < 1.5) {
      otherBytes += item.bytes;
    } else {
      mainEntries.push(item);
    }
  });

  if (otherBytes > 0) {
    mainEntries.push({
      name: "Other",
      bytes: otherBytes,
      percentage: (otherBytes / totalBytes) * 100,
      color: GITHUB_LANG_COLORS["Other"],
    });
  }

  return (
    <div className="github-lang-graph-container">
      {/* Stacked Progress Bar */}
      <div className="github-lang-progress-bar">
        {mainEntries.map((item, i) => (
          <span
            key={i}
            className="github-lang-progress-segment"
            style={{
              width: `${item.percentage}%`,
              backgroundColor: item.color,
            }}
            title={`${item.name}: ${item.percentage.toFixed(1)}%`}
          />
        ))}
      </div>

      {/* Language Breakdown Legend */}
      <div className="github-lang-legend">
        {mainEntries.map((item, i) => (
          <div key={i} className="github-lang-legend-item">
            <span
              className="github-lang-dot"
              style={{ backgroundColor: item.color }}
            />
            <span
              className="github-lang-name"
              style={{ color: theme ? theme.text : "#24292e" }}
            >
              {item.name}
            </span>
            <span
              className="github-lang-percent"
              style={{ color: theme ? theme.secondaryText : "#57606a" }}
            >
              {item.percentage.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubLanguageGraph;
