import React, { useState, useEffect } from "react";
import UserCard from "../../components/UserCard";

function UserCardDetail() {
  const [userCard, setUserCard] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/user/${id}`).then((res) => {
      setUserCard(res.data);
    });
  }, []);

  return (
    <div>
      {userCard.map((userBanana) => (
        <UserCard key={userBanana.id} userCard={userBanana} />
      ))}
    </div>
  );
}

export default UserCardDetail;
