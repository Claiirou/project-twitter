import axios from "axios";
import React, { useEffect, useState } from "react";
import TweeterCard from "./TweeterCard";

function Feed() {
  const [tweet, setTweet] = useState([]);

  useEffect(() => {
    axios.get("/api/tweet").then((res) => setTweet(res.data));
  }, []);

  return (
    <div className="mt-2 mx-12 md:mx-32">
      <div>
        {tweet.map((tweetBanana) => (
          <TweeterCard key={tweetBanana.id} tweet={tweetBanana} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
