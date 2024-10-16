'use client';
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ProductSection from "./components/ProductSection";
import GetQuoteForm from "./components/GetQuote";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <ProductSection 
        label="Cardio"
        sectionId="cardio"/>
      <ProductSection 
        label="Strength"
        sectionId="strength"/>
      <ProductSection 
        label="Mobility"
        sectionId="mobility"/>
      <GetQuoteForm />
      <Footer />
    </div>
  );
}
