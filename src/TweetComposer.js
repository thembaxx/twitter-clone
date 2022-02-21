import React from "react";
import "./TweetComposer.css";
import GlobeIcon from "./icons/GlobeIcon";

function TweetComposer() {
  return (
    <div className="tweetComposer">
      <button className="tweetComposer__avatar">
        <img src="" alt="" />
      </button>
      <form className="tweetComposer__form">
        <div className="tweetComposer__inputWrapper">
          <div
            contentEditable
            spellCheck={false}
            className="tweetComposer__input"
          />
          <span className="tweetComposer__privacy">
            <GlobeIcon /> Everyone can reply
          </span>
          <div className="tweetComposer__line"></div>
          <div className="tweetComposer__options">
            <div className="tweetComposer__attachments"></div>
            <div className="tweetComposer__actions">
              <div className="tweetComposer__count"></div>
              <button className="tweetComposer__addTweet"></button>
              <button className="tweetComposer__sendT">Tweet</button>weet
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetComposer;
