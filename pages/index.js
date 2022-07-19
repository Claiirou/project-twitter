import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bienvenue sur le Twitter Lunaire</title>
        <meta name="description" content="Twitter Bis" />
        <link rel="icon" href="/lune2.png" />
      </Head>
      <Sidebar />
    </div>
  );
}
