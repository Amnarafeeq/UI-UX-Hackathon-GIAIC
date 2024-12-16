import React from "react";
import Header from "../shop/pro-header/header";
import ProductHeader from "./components/product-header";
import Phone from "./components/phone";
import Container from "./components/container";
import BestSellerProducts from "./components/best-seller-products";
import PCompanies from "./components/companies";

const Product = () => {
  return (
    <div>
      <Header />
      <ProductHeader />
      <Phone />
      <Container />
      <BestSellerProducts />
      <PCompanies />
    </div>
  );
};

export default Product;
