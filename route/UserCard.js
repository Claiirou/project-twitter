import React from "react";

import { useParams } from "react-router-dom";

function UserCard() {
  const [userId, setuserId] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/user/${id}`).then((res) => {
      setUserId(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <div>{userId.pseudo}</div>
      </div>
    </>
  );
}

export default UserCard;
