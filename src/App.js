import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
