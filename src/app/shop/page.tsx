import React from 'react'
import Header from './pro-header/header'
import ShopHeader from './components/shop-header'
import ShopCards from './components/shop-cards'
import Filter from './components/filter'
import ProductCard from './components/productcard'
import Clients from './components/clients'

const Shop = () => {
  return (
    <div>
        <Header/>
        <ShopHeader/>
        <ShopCards/>
        <Filter/>
        <ProductCard/>
        <Clients/>
    </div>
  )
}

export default Shop