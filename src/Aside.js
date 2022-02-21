import React from "react";
import "./Aside.css";
import AsideCard from "./AsideCard";
import SearchIcon from "./icons/SearchIcon";
import Trend from "./Trend";
import UserFollow from "./UserFollow";
import MoreHorIcon from "./icons/MoreHorIcon";

function Aside() {
  function getTrends() {
    return fakeTrends.map((trend) => (
      <Trend
        key={trend.id}
        source={trend.source}
        title={trend.title}
        tweets={trend.tweets}
      />
    ));
  }

  function getUsers() {
    return fakeUsers.map((user) => (
      <UserFollow
        key={user.id}
        name={user.name}
        username={user.username}
        imgUrl={user.imgUrl}
      />
    ));
  }

  return (
    <div className="aside">
      <div className="aside__search">
        <form className="aside__form">
          <label htmlFor="" className="aside__label">
            <div className="aside__searchButton">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search Twitter"
              className="aside__input"
            />
          </label>
        </form>
      </div>
      <div className="asideCards">
        <AsideCard title="Trends for you" showSettings items={getTrends()} />
        <AsideCard
          title="Who to follow"
          showSettings={false}
          items={getUsers()}
        />
      </div>
      <footer className="aside__footer">
        <a href="/" className="aside__link">
          Terms of Service
        </a>
        <a href="/" className="aside__link">
          Privacy Policy
        </a>
        <a href="/" className="aside__link">
          Cookie Policy
        </a>
        <a href="/" className="aside__link">
          Accessibility
        </a>
        <a href="/" className="aside__link">
          Ads info
        </a>
        <a href="/" className="aside__link">
          More <MoreHorIcon />
        </a>
        <div className="aside__link aside__copyright">
          &copy; 2022 Twitter, Inc.
        </div>
      </footer>
    </div>
  );
}

export default Aside;

const fakeTrends = [
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

const fakeUsers = [
  {
    id: 10,
    name: "Kent C. Dodds",
    username: "@kentcdodds",
    imgUrl: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
  },
  {
    id: 11,
    name: "Adam Wathan",
    username: "@adamwathan",
    imgUrl: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
  },
];
