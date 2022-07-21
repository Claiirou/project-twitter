import React from "react";

const Hashtag = ({ hashtag }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1  flex-col pl-2 space-x-5 py-4 ml-24 md:ml-[480px]">
        <div className="text-xl">{hashtag.hashtag}</div>
        <div className="">{hashtag.number}</div>
      </div>
    </div>
  );
};

export default Hashtag;
