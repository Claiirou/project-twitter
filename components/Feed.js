import axios from "axios";
import React, { useEffect, useState } from "react";

function Feed() {
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    axios.get("/api/tweet").then((res) => setTweet(res.data));
  });

  return (
    <div className="mt-2 mx-12 md:mx-32">
      <div>
        <h2>FEED</h2>
      </div>
    </div>
  );
}

export default Feed;
