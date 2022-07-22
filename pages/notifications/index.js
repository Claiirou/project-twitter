import React from "react";
import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout pageTitle="Notifications du Tweet Lunaire">
      <div className="flex flex-col items-center">
        <img
          className="flex my-32 h-80 w-80 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
          src="/lune3.png"
          alt="lune en chargement"
        />
        <div className="flex">
          <p className="text-center text-xl">Page en construction ...</p>
        </div>
      </div>
    </Layout>
  );
};

export default index;
