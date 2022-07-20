import axios from "axios";
import React, { useState } from "react";

function TweetBox() {
  const [pseudo, setPseudo] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/tweet", {
        pseudo,
        content,
      })
      .then(() => {
        setPseudo(""), setContent("");
      })
      .catch((err) => {
        console.error(err);
      }, []);
  };

  return (
    <div className="flex  space-x-2 p-5 bg-white rounded-3xl mt-2 mx-12 md:mx-32">
      <img
        className="h-14 w-14 mr-5 object-cover rounded-full mt-4"
        src="/avatar.jpg"
        alt="avatar"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" onSubmit={handleSubmit}>
          <div className="flex">
            <input
              className="h-24 w-1/4 text-xl text-black outline-none placeholder:text-xl"
              type="text"
              placeholder="Pseudo ?"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            ></input>
            <input
              className="h-24 w-full text-xl text-black outline-none placeholder:text-xl"
              type="text"
              placeholder="What's up today ?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></input>
          </div>

          <div>
            <button className="bg-[#001021] text-white font-bold px-5 py-2 rounded-full  ">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
