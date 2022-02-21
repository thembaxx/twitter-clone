import React from "react";
import "./Trends.css";
import SettingsIcon from "./icons/SettingsIcon";
import Trend from "./Trend";

function Trends() {
  const fakeData = [
    {
      id: 1,
      source: "Only on Twitter · Trending",
      title: "Acacia",
      tweets: "8,237",
    },
    {
      id: 2,
      source: "Trending in South Africa",
      title: "Thuli",
      tweets: "3,135",
    },
    {
      id: 3,
      source: "Only on Twitter · Trending",
      title: "Zino",
      tweets: "6,008",
    },
    {
      id: 4,
      source: "Trending in South Africa",
      title: "Vyno",
      tweets: "7,929",
    },
    {
      id: 5,
      source: "Trending in South Africa",
      title: "Thuli",
      tweets: "",
    },
  ];

  return (
    <div className="trends">
      <div className="trends__header">
        <h1 className="trends__title">Trends for you</h1>
        <a href="/" className="trends__options">
          <SettingsIcon />
        </a>
      </div>

      {/* Trends List */}
      <ul className="trends__list">
        {fakeData.map((trend) => (
          <Trend
            key={trend.id}
            source={trend.source}
            title={trend.title}
            tweets={trend.tweets}
          />
        ))}
      </ul>

      <div className="trends__more">Show more</div>
    </div>
  );
}

export default Trends;
