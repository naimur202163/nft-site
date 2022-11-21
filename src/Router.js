import React from "react";
import { Route, Routes } from "react-router-dom";
import FeaturedProductsDetails from "./components/Home/FeaturedProductsDetails/FeaturedProductsDetails";
import FlashSaleDetails from "./components/Home/FlashSaleDetails/FlashSaleDetails";
import NotFound from "./components/NotFound/NotFound";
import Faqs from "./Pages/Faqs";
import Faq from "./Pages/Faqs";
import Home from "./Pages/Home";
import ContactUs from "./Shared/ContactUs/ContactUs";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale/:id" element={<FlashSaleDetails />} />
        <Route path="/featured/:id" element={<FeaturedProductsDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
