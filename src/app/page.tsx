import Image from "next/image";
import ShopCards from "./component/shop-cards";
import HeroSection from "./component/hero-section";
import BestSeller from "./component/best-seller";
import Summer from "./component/summer";
import FluidSec from "./component/fluid-sec";
import FeaturedPosts from "./component/featured-posts";
import Header from "./header/header";

export default function Home() {
  return (
   <>
   <Header/>
   <HeroSection/>
 <ShopCards/>
 <BestSeller/>
 <Summer/>
 <FluidSec/>
 <FeaturedPosts/>
   </>
  );
}
