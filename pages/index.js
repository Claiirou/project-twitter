import Layout from "../components/Layout";
import style from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Bienvenue sur le Twitter Lunaire">
      <div className="mt-20%">
        <h1 className={style.title}>Twitter Lunaire</h1>
      </div>
    </Layout>
  );
}
