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
        <section id={sectionId} className="relative flex flex-col gap-8 w-full justify-center items-center p-12 bg-charcoalBlack">
          <h2 className="text-white text-3xl lg:text-5xl font-bold text-center uppercase"><span className="text-blue-500">Elite</span> Cardio Machines, <span className="text-blue-500">Unmatched</span> Quality</h2>
          <p className="mt-2 text-xl lg:px-48 text-center text-ivoryWhite">Equip your gym with the best from top industry brands! Our selection, backed by leading ergonomic and biomechanical innovation, ensures your gym stays ahead with equipment that delivers reliability, safety, and cutting-edge digital features. </p>
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

