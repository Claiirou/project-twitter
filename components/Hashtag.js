import React from "react";

const Hashtag = ({ hashtag }) => {
  return (
    <div className="flex flex-1 flex-col group ">
      <div className="border-y-2 w-4/5 flex flex-1 flex-col pl-2 space-x-5 py-4 mx-auto group-hover:bg-[#5D6A7E]  md:w-2/5">
        <div className="text-xl">{hashtag.hashtag}</div>
        <div className="">{hashtag.number}</div>
      </div>
    </div>
  );
};

export default Hashtag;
