import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Shop from "./pages/Shop.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetelis from "./components/ProductDetelis.jsx";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/:postId" element={<ProductDetelis />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
