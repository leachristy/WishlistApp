import { useState } from "react";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { CreateWishlist } from "./pages/CreateWishlist";
import { Explore } from "./pages/Explore";
import { WishlistDetails } from "./pages/WishlistDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/createwishlist" element={<CreateWishlist />} />
        <Route path="/wishlistdetails" element={<WishlistDetails />} />
      </Routes>
    </div>
  );
}

export default App;
