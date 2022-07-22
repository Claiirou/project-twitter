import React from "react";

function UserCard({ userId }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <img
            src={userId.picture}
            alt="profil picture"
            className="h-32 w-32 mr-5 object-cover rounded-full mt-4"
          />
        </div>
        <div className="text-4xl">{userId.pseudo}</div>
        <div>{userId.email}</div>
        <div>{userId.time}</div>
        <div>{userId.hobbies}</div>
        <div>{userId.abonnements} abonnements</div>
        <div>{userId.abonnes} abonnés</div>
      </div>
    </>
  );
}

export default UserCard;
