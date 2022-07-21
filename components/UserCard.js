import React from "react";

function UserCard({ user }) {
  const handleClick = () => {};

  return (
    <>
      <div className="flex space-x-2 p-5 rounded-3xl mt-2 mx-12 md:mx-32 ">
        <img
          className="h-14 w-14 mr-5 flex items-center object-cover rounded-full mt-4 md:items-start"
          src={user.picture || "/avatar.jpg"}
          alt="picture"
          onClick={handleClick}
        />

        <div className="flex flex-1 ">
          <div className="flex flex-1 items-center pl-2 space-x-5">
            <div className="text-xl">{user.pseudo}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
