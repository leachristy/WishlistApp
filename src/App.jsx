import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import Home from './pages/Home'
import CreateWishlist from './pages/CreateWishlist'
import EditWishlist from './pages/EditWishlist'
import WishlistDetails from './pages/WishlistDetails'

function App() {
  return (
    <div>
      <Header />
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createwishlist" element={<CreateWishlist />} />
        <Route path="/editwishlist" element={<EditWishlist />} />
        <Route path="/wishlistdetails" element={<WishlistDetails />} />
      </Routes>
    </div>
  );
}

export default App

