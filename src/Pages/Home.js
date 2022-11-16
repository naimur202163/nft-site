import React from "react";
import Banner from "../components/Home/Banner/Banner";
import FlashSale from "../components/Home/FlashSale/FlashSale";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <FlashSale />
      <Footer />
    </div>
  );
}
