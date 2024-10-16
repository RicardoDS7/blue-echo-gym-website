'use client';
import NavBar from "./components/NavBar";
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import CardioProductSection from "./components/CardioProductSection";
import GetQuoteForm from "./components/GetQuote";

export default function Home() {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div>
      <NavBar />
      <HeroSection />
      <CardioProductSection 
        label="Elite Cardio Machines, Unmatched Quality"
        sectionId="cardio"/>
      <GetQuoteForm />
      <Footer />
    </div>
  );
}

