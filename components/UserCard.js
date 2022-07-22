import React from "react";
import { CalendarIcon } from "@heroicons/react/outline";

function UserCard({ userId }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <img
            src={userId.picture}
            alt="profil picture"
            className="h-32 w-32 mr-5 object-cover rounded-full mb-4 mt-24"
          />
        </div>
        <div className="text-4xl my-2">{userId.pseudo}</div>
        <div className="my-2">{userId.email}</div>
        <div className="flex my-2">
          <CalendarIcon className="h-5 w-5 mr-2" /> {userId.time}
        </div>
        <div className="my-2">{userId.hobbies}</div>
        <div className="flex my-2">
          {" "}
          <div className="mx-3 ">{userId.abonnements} abonnements</div>
          <div>{userId.abonnes} abonnés</div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
