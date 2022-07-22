import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../../components/UserCard";
import Layout from "../../components/Layout";

function UserCardDetail() {
  const [userCard, setUserCard] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios.get(`/api/user/${id}`).then((res) => {
      setUserCard(res.data);
    });
  }, []);

  return (
    <Layout>
      <div>
        <UserCard userId={userCard} />
      </div>
    </Layout>
  );
}

export default UserCardDetail;
