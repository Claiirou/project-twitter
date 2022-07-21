import React from "react";

const Hashtag = ({ hashtag }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="border-y-2 w-4/5 flex flex-1 flex-col pl-2 space-x-5 py-4 mx-auto md:w-2/5">
        <div className="text-xl">{hashtag.hashtag}</div>
        <div className="">{hashtag.number}</div>
      </div>
    </div>
  );
};

export default Hashtag;

// ml-24 md:ml-[480px]
