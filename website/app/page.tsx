'use client';
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import CardioProductSection from "./components/CardioProductSection";
import GetQuoteForm from "./components/GetQuote";
import MobilityProductSection from "./components/MobilityProductionSection";
import StrengthProductSection from "./components/StrengthProductSection";

export default function Home() {

  return (
    <div>
      <NavBar />
      <HeroSection />
      <CardioProductSection 
        sectionId="cardio"/>
      <StrengthProductSection 
        sectionId="strength"/>
      <MobilityProductSection 
        sectionId="mobility"/>
      <GetQuoteForm />
      <Footer />
    </div>
  );
}

