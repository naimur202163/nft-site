import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";


export default function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Footer />
    </div>
  );
}
