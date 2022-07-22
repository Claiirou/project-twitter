import Layout from "../../components/Layout";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { SearchIcon } from "@heroicons/react/outline";
import Users from "../../components/Users";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data: user = [] } = useQuery(
    [("user", { search: searchValue })],
    () => {
      return axios
        .get(`/api/user?search=${searchValue}`)
        .then((res) => res.data);
    }
  );
  return (
    <>
      <Layout pageTitle="Profil du Tweet Lunaire">
        <div className="mt-2 mx-12 md:mx-32">
          <div className=" mt-2 flex items center space-x-2 rounded full text-black bg-gray-100 p-3">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input
              className="flex-1 bg-transparent outline-none"
              type="text"
              placeholder="Recherche Pseudo Lunaire"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div>
            {user.map((userBanana) => (
              <Users key={userBanana.id} user={userBanana} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;

// <div className="flex flex-col items-center">
//         <img
//           className="flex my-32 h-80 w-80 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
//           src="/lune3.png"
//           alt="lune en chargement"
//         />
//         <div className="flex">
//           <p className="text-center text-xl">Page en construction ...</p>
//         </div>
//       </div>
