import { useEffect } from 'react'
import Navbar from "./components/Navbar/index";
import Image from "next/image";
import Head from 'next/head'

const Home = () => {
  const animateUnderbar = () => {
    let underbar = document.querySelector('.animated')
    console.log(underbar)
    let animate = true;
  }
  useEffect(() => {
    animateUnderbar()
  }, [])
  return (
    <div className="home">
      <Head>
        <title>Complette</title>
        <link rel="shortcut icon" href="/img/logo.png" />
      </Head>
      <Navbar />
      <div className="soon">
        <Image
          src="/img/logo.png"
          width={400}
          height={400}
          alt="Complette Web"
        />
        <div className="go-complette">
          <h1 className="complette-soon-title">Em breve<span className="animated">_</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
