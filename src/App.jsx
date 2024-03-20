import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Shop from "./pages/Shop.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetelis from "./components/ProductDetelis.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/:postId" element={<ProductDetelis />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
