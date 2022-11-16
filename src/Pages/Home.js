import React from "react";
import Banner from "../components/Home/Banner/Banner";
import CategorySlider from "../components/Home/CategorySlider/CategorySlider";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import FlashSale from "../components/Home/FlashSale/FlashSale";
import Slider from "../components/Home/Slider/Slider";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <Banner />
      <FlashSale />
      <Slider />
      {/* <CategorySlider/> */}
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
