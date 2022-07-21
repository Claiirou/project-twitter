import React from "react";

const Hashtag = ({ hashtag }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 items-center pl-2 space-x-5">
        <div>{hashtag.hashtag}</div>
        <div>{hashtag.number}</div>
      </div>
    </div>
  );
};

export default Hashtag;
