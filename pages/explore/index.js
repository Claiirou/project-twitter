import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
// import TweeterCard from "./TweeterCard";
import { SearchIcon } from "@heroicons/react/outline";
import Layout from "../../components/Layout";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data: tweet = [] } = useQuery(
    ["home", { search: searchValue }],
    () => {
      return axios
        .get(`/api/tweet?search=${searchValue}`)
        .then((res) => res.data);
    }
  );
  return (
    <Layout>
      <div className="mt-2 mx-12 md:mx-32">
        {/* <div>
        {tweet.map((tweetBanana) => (
          <TweeterCard key={tweetBanana.id} tweet={tweetBanana} />
        ))}
      </div> */}
        <div className=" mt-2 flex items center space-x-2 rounded full bg-gray-100 p-3">
          <SearchIcon className="h-5 w-5 text-gray-400" />
          <input
            className="flex-1 bg-transparent outline-none"
            type="text"
            placeholder="Recherche Twitter Lunaire"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
