import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import TweeterCard from "../../components/TweeterCard";
import { SearchIcon } from "@heroicons/react/outline";
import Layout from "../../components/Layout";
import Hashtag from "../../components/Hashtag";
import useSound from "use-sound";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const [hashtag, setHashtag] = useState([]);
  const { data: tweet = [] } = useQuery(
    ["home", { search: searchValue }],
    () => {
      return axios
        .get(`/api/tweet?search=${searchValue}`)
        .then((res) => res.data);
    }
  );

  useEffect(() => {
    axios.get("/api/hashtag").then((res) => setHashtag(res.data));
  }, []);

  const [play] = useSound("/starwars.mp3");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    play();
  };

  return (
    <Layout pageTitle="Exploration sur le Tweet Lunaire">
      {searchValue ? (
        <div className="mt-2 mx-12 md:mx-32">
          <div className=" mt-2 flex items center space-x-2 rounded full bg-gray-100 p-3">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input
              className="flex-1 bg-transparent outline-none text-black"
              type="text"
              placeholder="Recherche Twitter Lunaire"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div>
            {tweet.map((tweetBanana) => (
              <TweeterCard key={tweetBanana.id} tweet={tweetBanana} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 mx-12 md:mx-32">
          <div className=" mt-2 flex items center space-x-2 rounded full bg-gray-100 p-3">
            <SearchIcon className="h-5 w-5 text-gray-400" />
            <input
              className="flex-1 bg-transparent outline-none"
              type="text"
              placeholder="Recherche Twitter Lunaire"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col">
        <h2 className="text-3xl my-8 text-center">Tendances pour Vous !</h2>
        <div className="">
          {hashtag.map((banana) => (
            <Hashtag key={banana.id} hashtag={banana} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
