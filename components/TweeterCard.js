import React from "react";

function TweeterCard({ tweet }) {
  return (
    <div className="flex space-x-2 p-5 rounded-3xl mt-2 mx-12 md:mx-32">
      <img
        className="h-14 w-14 mr-5 object-cover rounded-full mt-4"
        src={tweet.user.picture}
        alt="picture"
      />

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 items-center pl-2">
          <div>{tweet.user.pseudo}</div>
          <div>{tweet.date}</div>
        </div>
        <div>{tweet.content}</div>
      </div>
    </div>
  );
}

export default TweeterCard;
