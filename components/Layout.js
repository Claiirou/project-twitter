import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/lune2.png" />
      </Head>
      <Navbar />
      <div>
        <main className="w-[100vw]">{children}</main>
      </div>
    </>
  );
}
