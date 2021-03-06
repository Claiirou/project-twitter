import axios from "axios";
import React, { useState } from "react";
import useSound from "use-sound";
import { useQueryClient } from "react-query";
import { Widget } from "@uploadcare/react-widget";

function TweetBox() {
  const [pseudo, setPseudo] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");
  const [play] = useSound("/okay.mp3");
  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/tweet", {
        pseudo,
        content,
        picture,
      })
      .then(() => {
        setPseudo(""), setContent(""), setPicture("");
        play();
      })
      .then(() => queryClient.invalidateQueries("home"))
      .catch((err) => {
        console.error(err);
      }, []);
  };

  const buttonName = () => ({
    buttons: {
      choose: {
        files: {
          one: "+",
        },
      },
    },
  });

  return (
    <div className="flex  space-x-2 p-5 bg-white rounded-3xl mt-2 mx-12 md:mx-32">
      <div className="flex flex-col">
        <img
          className="h-14 w-14 mr-5 object-cover rounded-full mt-4"
          src={picture ? picture : "/avatar.jpg"}
          alt="avatar"
        />
        <label
          className="text-black flex mt-2 ml-2 cursor-pointer"
          htmlFor="picture"
        >
          <Widget
            className={picture ? "uploadcare--widget__text:hidden" : ""}
            publicKey={process.env.NEXT_PUBLIC_UPLOADCARE_KEY}
            localeTranslations={buttonName()}
            onChange={(file) => {
              setPicture(file.cdnUrl);
            }}
          />
        </label>
      </div>

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
