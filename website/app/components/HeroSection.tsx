import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="bg-charcoalBlack">
    <div 
        className="relative w-full flex flex-col items-center justify-center bg-cover bg-center brands-polygon-clip"
        style={{ backgroundImage: `url('${basePath}/images/GymHero.png')` }} // Add the path to your image here
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* Hero Content */}
        <div className="relative w-full flex flex-col justify-center text-center z-10 px-12 lg:px-48 py-8 mt-8">
            <h1 className="text-white text-3xl md:text-6xl lg:text-8xl font-bold text-center uppercase">UPGRADE YOUR GYM. <br />
            <span className="text-blue-500">UPGRADE YOUR BODY.</span></h1>
            <p className="text-xl lg:text-2xl text-white mt-4 lg:mt-16">
            Unlock Your Potential with Cutting-Edge Gym Equipment – Where Innovation Meets Performance.
            </p>
        </div>

        {/* Brands Section */}
        <div className="flex flex-col items-center justify-between w-full z-10 px-4 mb-24">

            <ul className="flex justify-center gap-x-8 gap-y-0">
            <li className="w-1/3 md:w-56 z-10">
                <Image
                src={`${basePath}/images/life-fitness.png`}
                alt="life-fitness brand"
                width={300}
                height={50}
                className="w-full h-auto"
                />
            </li>
            <li className="w-1/3 md:w-56 z-10">
                <Image
                src={`${basePath}/images/technogym.png`}
                alt="technogym brand"
                width={300}
                height={50}
                className="w-full h-auto"
                />
            </li>
            <li className="w-1/3 md:w-56 z-10">
                <Image
                src={`${basePath}/images/hammer-strength.png`}
                alt="hammer-strength brand"
                width={300}
                height={50}
                className="w-full h-auto"
                />
            </li>
            </ul>
        </div>
    </div>
    </div>
  );
};

export default HeroSection;
