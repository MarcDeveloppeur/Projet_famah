import Head from "next/head";
import Image from "next/image";
import Footer from "../Components/Footer";
import { LinkCard } from "../Components/LinkCard";
import Navigateur from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <div className="container">
        <Navigateur />
        <div className="Baniere">
          <div className="TextContainer">
            <h1 className="title">Bijoutier Famah</h1>
            <h2 className="underTitle">
              Bijoutier professionnel à Antsirabe, Madagascar. <br />
              <br />
              Commande, Creation et transformation en or et argent
            </h2>
          </div>
        </div>
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
