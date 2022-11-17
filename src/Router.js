import React from "react";
import { Route, Routes } from "react-router-dom";
import FeaturedProductsDetails from "./components/Home/FeaturedProductsDetails/FeaturedProductsDetails";
import FlashSaleDetails from "./components/Home/FlashSaleDetails/FlashSaleDetails";
import NotFound from "./components/NotFound/NotFound";
import Home from "./Pages/Home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale/:id" element={<FlashSaleDetails />} />
        <Route path="/featured/:id" element={<FeaturedProductsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
