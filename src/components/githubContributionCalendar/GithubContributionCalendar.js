import React from "react";
import "./GithubContributionCalendar.css";
import contributionsData from "../../shared/opensource/contributions.json";

const LEVEL_COLORS = {
  0: "rgba(0, 0, 0, 0.05)",
  1: "#ebd5c8",
  2: "#c99b84",
  3: "#8f563d",
  4: "#432F23",
};

const GithubContributionCalendar = ({ theme }) => {
  const days = contributionsData?.contributions || [];
  const totalLastYear =
    contributionsData?.total?.lastYear ||
    days.reduce((a, b) => a + (b.count || 0), 0);

  // Group 365 days into 53 weeks (columns of 7 days)
  const weeks = [];
  let currentWeek = [];

  days.forEach((day, index) => {
    currentWeek.push(day);
    if (currentWeek.length === 7 || index === days.length - 1) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  return (
    <div className="github-calendar-main-container">
      <div className="github-calendar-header">
        <h2 className="github-calendar-title" style={{ color: theme.text }}>
          GitHub Commit & Contribution Heatmap
        </h2>
        <span
          className="github-calendar-total-badge"
          style={{ backgroundColor: theme.headerColor, color: theme.text }}
        >
          {totalLastYear} Contributions in the Last Year
        </span>
      </div>

      {/* SVG / Flex Matrix Grid */}
      <div className="github-calendar-grid-wrapper">
        <div className="github-calendar-grid">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="github-calendar-column">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className="github-calendar-day"
                  style={{
                    backgroundColor: LEVEL_COLORS[day.level] || LEVEL_COLORS[0],
                  }}
                  title={`${day.count} contribution${
                    day.count === 1 ? "" : "s"
                  } on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="github-calendar-footer">
          <span
            className="github-calendar-legend-text"
            style={{ color: theme.secondaryText }}
          >
            Less
          </span>
          <div className="github-calendar-legend-dots">
            {Object.values(LEVEL_COLORS).map((color, i) => (
              <span
                key={i}
                className="github-calendar-day-legend"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span
            className="github-calendar-legend-text"
            style={{ color: theme.secondaryText }}
          >
            More
          </span>
        </div>
      </div>
    </div>
  );
};

export default GithubContributionCalendar;
