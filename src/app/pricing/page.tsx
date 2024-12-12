import Navbar from "@/app/about/components/header";
import React from "react";
import SimplePricing from "./components/simple-pricing";
import PricingCard from "./components/pricing-card";
import FQuestions from "./components/faq";
import Trial from "./components/trial";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <SimplePricing />
      <PricingCard />
      <FQuestions />
      <Trial />
    </div>
  );
};

export default Pricing;
