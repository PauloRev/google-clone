import Head from "next/head";
import Header from './_header';
import Footer from './_footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Google Clone</title>
      </Head>
      <Header />
      <div>
        <h1>Next JS</h1>
      </div>
      <Footer />
    </>
  )
}