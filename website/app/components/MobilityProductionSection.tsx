import React from "react";
import ProductCard from "./Product";
import { MobilityEquipment } from "../constants"; // Import the CardioEquipment array

// Define the props interface (optional)
interface ProductSectionProps {
    sectionId?: string;  // The section id to scroll to
  }

// Functional component with typed props
const MobilityProductSection: React.FC<ProductSectionProps> = ({sectionId}) => {
    return (
        <div>
        <div className="reverse-triangle-clip bg-charcoalBlack w-full h-16 -mt-0.5"/>
        <section id={sectionId} className="relative flex flex-col gap-8 w-full justify-center items-center px-12 lg:px-48 py-8 bg-charcoalBlack">
          <h2 className="text-blue-500 text-2xl lg:text-5xl font-bold text-center uppercase"><span className="text-white">Move </span> Better, <span className="text-white">Recover</span> Faster.</h2>
          <p className="mt-2 text-xl lg:px-48 text-center text-ivoryWhite">Our selection of plyometric boxes, medicine balls, and foam rollers is designed to optimize flexibility, boost functional strength, and accelerate recovery—helping you move with confidence and perform at your best.</p>
            <div className="masonry-grid mt-8">
              {MobilityEquipment.map((equipment,index) => (
                <ProductCard
                    key={index}
                    name={equipment.name}
                    image={equipment.image}
                    description={equipment.description}
                    category="mobility"
                />
              ))}
            </div>
        </section>
        
        </div>
      );
    };

export default MobilityProductSection;

