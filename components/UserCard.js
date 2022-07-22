import React from "react";

function UserCard({ userId }) {
  return (
    <>
      <div>
        <div>
          <img src={userId.picture} alt="profil picture" />
        </div>
        <div>{userId.pseudo}</div>
        <div>{userId.email}</div>
        <div>{userId.time}</div>
        <div>{userId.hobbies}</div>
        <div>{userId.abonnements}</div>
        <div>{userId.abonnes}</div>
      </div>
    </>
  );
}

export default UserCard;
