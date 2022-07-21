import React from "react";

function UserCard() {
  const [userId, setUserId] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/user/${id}`).then((res) => {
      setUserId(res.data);
    });
  }, []);
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
