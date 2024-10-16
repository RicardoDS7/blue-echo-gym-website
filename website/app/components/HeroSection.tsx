import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/path-to-your-image.jpg" // Replace with the path to your image
        alt="Hero background"
        layout="fill" // This makes the image fill the parent div
        objectFit="cover" // Ensures the image covers the entire div without stretching
        quality={100} // Adjust the quality of the image
        className="z-0"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Blue Echo Gym
        </h1>
        <p className="text-lg text-white mb-8">
          Join us for the best workout experience!
        </p>
        <a
          href="#get-started"
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-600 transition-all duration-300"
        >
          Get Started
        </a>
      </div>
      
      {/* Optional: Add a dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-1" />
    </div>
  );
};

export default HeroSection;
