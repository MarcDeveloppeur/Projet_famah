import Head from "next/head";
import Image from "next/image";
import { Banniere } from "../Components/baniere";
import Footer from "../Components/Footer";
import { LinkCard } from "../Components/LinkCard";
import Navigateur from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";

export default function Collier() {
  return (
    <>
      <Head>
        <title>Nos colliers</title>
      </Head>
      <div className="container">
        <Navigateur />
        <Banniere/>
        <h1 className="pageTitle">Nos Colliers</h1>
        <div className="CardLinkContainer">
          <ProductCard
            productName="Collier 1"
            productPrice="300"
            imageUrl="/Images/bague1.jpg"
          />
          <ProductCard
            productName="Collier 2"
            productPrice="300"
            imageUrl="/Images/bague2.jpg"
          />
          <ProductCard
            productName="Collier 3"
            productPrice="300"
            imageUrl="/Images/bague3.jpg"
          />
          <ProductCard
            productName="Collier 4"
            productPrice="300"
            imageUrl="/Images/bague4.jpg"
          />
          <ProductCard
            productName="Collier 5"
            productPrice="300"
            imageUrl="/Images/bague5.jpg"
          />
          <ProductCard
            productName="Collier 5"
            productPrice="300"
            imageUrl="/Images/bague6.jpg"
          />
          <ProductCard
            productName="Collier 5"
            productPrice="300"
            imageUrl="/Images/bague7.jpg"
          />
          <ProductCard
            productName="Collier 5"
            productPrice="300"
            imageUrl="/Images/bague8.jpg"
          />
          <ProductCard
            productName="Collier 5"
            productPrice="300"
            imageUrl="/Images/bague9.jpg"
          />
          <ProductCard
            productName="Collier 5"
            productPrice="300"
            imageUrl="/Images/bague10.jpg"
          />
          <ProductCard
            productName="Collier 5"
            productPrice="300"
            imageUrl="/Images/bague11.jpg"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
