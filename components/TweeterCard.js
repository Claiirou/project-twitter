import React from "react";

function TweeterCard({ pseudo, content, picture }) {
  return (
    <div>
      <div>{picture}</div>
      <div>
        <div>{pseudo}</div>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default TweeterCard;
