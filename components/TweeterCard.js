import React from "react";

function TweeterCard({ tweet }) {
  return (
    <div>
      <div>{tweet.user.picture}</div>
      <div>
        <div>{tweet.user.pseudo}</div>
        <div>{tweet.date}</div>
        <div>{tweet.content}</div>
      </div>
    </div>
  );
}

export default TweeterCard;
