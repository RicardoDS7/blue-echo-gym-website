import React from "react";
import ProductCard from "./Product";
import { CardioEquipment } from "../constants"; // Import the CardioEquipment array

// Define the props interface (optional)
interface ProductSectionProps {
    sectionId?: string;  // The section id to scroll to
  }

// Functional component with typed props
const CardioProductSection: React.FC<ProductSectionProps> = ({sectionId}) => {
    return (
        <section id={sectionId} className="flex flex-col gap-8 w-full justify-center items-center p-12">
          <h1 className="text-white text-5xl font-bold text-center uppercase"><span className="text-blue-500">Elite</span> Cardio Machines, <span className="text-blue-500">Unmatched</span> Quality</h1>
          <p className="text-xl lg:px-48 text-center text-ivoryWhite">Equip your gym with the best from top industry brands! Our selection, backed by leading ergonomic and biomechanical innovation, ensures your gym stays ahead with equipment that delivers reliability, safety, and cutting-edge digital features. </p>
            <div className="masonry-grid">
              {CardioEquipment.map((equipment,index) => (
                <ProductCard
                    key={index}
                    name={equipment.name}
                    image={equipment.image}
                    description={equipment.description}
                />
              ))}
            </div>
        </section>
      );
    };

export default CardioProductSection;

