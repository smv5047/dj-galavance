import React from "react";
import "./App.css";
import Mainnavbar from "./components/Navbar";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";

//Add routes
function App() {
  return (
    <div className="App">
      <Mainnavbar />
      <Header />
      {/* <ContactForm /> */}
    </div>
  );
}

export default App;
