import React from "react";
import AppBanner from "../components/Home/AppBanner/AppBanner";
import Banner from "../components/Home/Banner/Banner";
import CategorySlider from "../components/Home/CategorySlider/CategorySlider";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import Feshion from "../components/Home/Feshion/Feshion";
import FlashSale from "../components/Home/FlashSale/FlashSale";
import Instagram from "../components/Home/Instagram/Instagram";
import NewArrivals from "../components/Home/NewArrivals/NewArrivals";
import RealPerson from "../components/Home/RealPerson/RealPerson";
import SellingProducts from "../components/Home/SellingProducts/SellingProducts";
import ShopBanner from "../components/Home/ShopBanneer/ShopBanner";
import Slider from "../components/Home/Slider/Slider";
import TopBrands from "../components/Home/TopBrands/TopBrands";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import YourInbox from "../Shared/YourInbox/YourInbox";

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <Banner />
      <FlashSale />
      <Slider />
      <CategorySlider />
      <FeaturedProducts />
      <ShopBanner />
      <TopBrands />
      <SellingProducts />
      <Feshion/>
      <NewArrivals />
      <AppBanner />
      <RealPerson />
      <Instagram />
      <YourInbox />
      <Footer />
    </div>
  );
}
