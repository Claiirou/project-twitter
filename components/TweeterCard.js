import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import { useRouter } from "next/router";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import PopUp from "./PopUp";
import useSound from "use-sound";

function TweeterCard({ tweet }) {
  const id = tweet.id;
  const router = useRouter();
  const [play] = useSound("/delete.mp3");
  const [deleteContainer, setDeleteContainer] = useState(false);

  const handleDelete = async () => {
    await axios
      .delete(`/api/tweet/${id}`)
      .then(() => play())
      .then(() => setDeleteContainer(!deleteContainer))
      .then(() => router.push("/"))
      .catch((err) => console.error(err.response.status));
  };
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
          <div>{tweet.content}</div>
          <div className="flex space-x-2 mt-2">
            <PencilIcon className="h-5 w-5 cursor-pointer" />
            <TrashIcon
              onClick={() => setDeleteContainer(!deleteContainer)}
              className="h-5 w-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TweeterCard;
