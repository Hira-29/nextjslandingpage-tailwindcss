import Image from "next/image";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero"
import Footer from "./Components/Footer/Footer"
import BurgerSection from "./Components/Burger-section/Burgersection";
import SandwichSection from "./Components/Sandwich-section/Sandwichsection";



export default function Home() {
  return (
    <div>
     <Header/>
     <Hero/>
     
     <BurgerSection />
     <SandwichSection />
     <Footer/>
    </div>
  );
}
