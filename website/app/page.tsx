'use client';
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import CardioProductSection from "./components/CardioProductSection";
import GetQuoteForm from "./components/GetQuote";

export default function Home() {

  return (
    <div>
      <NavBar />
      <HeroSection />
      <CardioProductSection 
        sectionId="cardio"/>
      <CardioProductSection 
        sectionId="strength"/>
      <CardioProductSection 
        sectionId="mobility"/>
      <GetQuoteForm />
      <Footer />
    </div>
  );
}

