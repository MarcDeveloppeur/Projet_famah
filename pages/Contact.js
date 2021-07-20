import Head from "next/head";
import Image from "next/image";
import { Banniere } from "../Components/baniere";
import Footer from "../Components/Footer";
import { LinkCard } from "../Components/LinkCard";
import Navigateur from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container">
        <Navigateur />
        <Banniere/>
        <h1 className="pageTitle">Contacter nous</h1>

        <Footer />
      </div>
    </>
  );
}


