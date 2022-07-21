import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

import { PencilIcon, TrashIcon, CheckIcon } from "@heroicons/react/outline";
import PopUp from "./PopUp";
import useSound from "use-sound";
import { useQueryClient } from "react-query";

function TweeterCard({ tweet }) {
  const id = tweet.id;

  const [play] = useSound("/delete.mp3");
  const [modify] = useSound("/stash.mp3");
  const [deleteContainer, setDeleteContainer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [tweetBanana, setTweetBanana] = useState("");
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    await axios
      .delete(`/api/tweet/${id}`)
      .then(() => play())
      .then(() => setDeleteContainer(!deleteContainer))
      .then(() => queryClient.invalidateQueries("home"))
      .catch((err) => console.error(err.response.status));
  };

  const handlePatch = async (e) => {
    e.preventDefault();
    await axios
      .patch(`/api/tweet/${id}`, {
        content: tweetBanana.content,
      })
      .then(() => modify())
      .then(() => setIsActive(false))
      .then(() => queryClient.invalidateQueries("home"))
      .catch(console.error);
  };

  useEffect(() => {
    setTweetBanana(tweet);
  }, [tweet]);

  return (
    <>
      {deleteContainer ? <PopUp handleDelete={handleDelete} /> : null}

      <div className="flex flex-col  space-x-2 p-5 rounded-3xl mt-2 mx-12 md:mx-32 md:flex-row">
        <img
          className="h-14 w-14 mr-5 flex items-center object-cover rounded-full mt-4 md:items-start"
          src={tweet.picture || "/avatar.jpg"}
          alt="picture"
        />

        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 items-center pl-2 space-x-5">
            <div>{tweet.pseudo}</div>
            <div className="opacity-50">
              {tweet.date || moment(tweet.post_date).format("MMM Do YY")}
            </div>
          </div>
          <div>
            {" "}
            {isActive ? (
              <input
                className="h-8 p-1.5 rounded-full w-full text-l text-black outline-none"
                type="text"
                value={tweetBanana.content || ""}
                onChange={(e) =>
                  setTweetBanana({ ...tweet, content: e.target.value })
                }
              />
            ) : (
              tweet.content
            )}
          </div>
          <div className="flex space-x-2 mt-2">
            <PencilIcon
              onClick={() => setIsActive(!isActive)}
              className="h-5 w-5 cursor-pointer"
            />
            {isActive ? (
              <CheckIcon
                onClick={handlePatch}
                className="h-5 w-5 cursor-pointer"
              />
            ) : (
              <TrashIcon
                onClick={() => setDeleteContainer(!deleteContainer)}
                className="h-5 w-5 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TweeterCard;

{
  /* <input
              className="h-24 w-full text-xl text-black outline-none placeholder:text-xl"
              type="text"
              placeholder="What's up today ?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></input> */
}
