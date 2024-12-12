import React from "react";
import HomePage from "./components/home";
import Navbar from "../about/components/header";
import Visit from "./components/visit";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Visit />
    </div>
  );
};

export default ContactUs;
