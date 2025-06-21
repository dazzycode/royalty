
// src/AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrainPage from "./pages/TrainPage";
import TradePage from "./pages/TradePage";
import ShopPage from "./pages/ShopPage";
import ExplorePage from "./pages/ExplorePage";
import ExploreDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import BlogPage from "./pages/BlogPage";
import About from "./pages/About";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
           <Route path="/training" element={<TrainPage/>} />
            <Route path="/trade" element={<TradePage/>} />
            <Route path="/shop" element={<ShopPage/>} />
          <Route path="/explore" element={<ExplorePage/>} />
          <Route path="/details" element={<ExploreDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/about" element={<About/>} />

    </Routes>
  );
};

export default AllRoutes;
