import Feed from "../components/Feed";
import Layout from "../components/Layout";
import style from "../styles/home.module.css";
import { RefreshIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <Layout pageTitle="Bienvenue sur le Twitter Lunaire">
      <div>
        <div className=" mt-20%">
          <h1 className={style.title}>Twitter Lunaire</h1>
          <div className="flex justify-center">
            <RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-white transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
          </div>
        </div>
        <Feed />
      </div>
    </Layout>
  );
}
