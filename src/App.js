import React from "react";
import Mainnavbar from "./components/Navbar";
import Header from "./components/Header";
import "./index.css";
import "./custom.scss";
import ContactForm from "./components/ContactForm";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Route path="/" component={Mainnavbar} />
        <Route exact path="/" component={Header} />
        <Route exact path="/contact" component={ContactForm} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
