import React from "react";
import "./UserFollow.css";

function UserFollow({ imgUrl, name, username }) {
  return (
    <div className="userFollow">
      <div className="userFollow__profile">
        <div className="userFollow__avatar">
          <img className="userFollow__image" src={imgUrl} alt="" />
        </div>
        <div className="userFollow__info">
          <a href="/" className="userFollow__name">
            {name}
          </a>
          <div className="userFollow_username">{username}</div>
        </div>
      </div>
      <a href="/" className="userFollow__btn">
        Follow
      </a>
    </div>
  );
}

export default UserFollow;
