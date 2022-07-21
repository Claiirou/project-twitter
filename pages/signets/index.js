import React from "react";
import Layout from "../../components/Layout";

const index = () => {
  return (
    <Layout pageTitle="Signets du Tweet Lunaire">
      <div className="flex flex-col items-center">
        <img
          className="flex my-20 mx-4 h-80 w-[850px]"
          src="/galaxy.png"
          alt="eclipse"
        />
        <div className="flex flex-col">
          <h2 className="text-center text-xl mb-4 md:text-3xl">
            Enregistrez des Tweets pour plus tard
          </h2>
          <p className="my-4 text-center">
            Ne laissez pas les bons Tweets senvoler ! Ajoutez-les aux signets
            pour les retrouver facilement à lavenir.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default index;
