import React from "react";
import Image from "next/image";
import GetQuoteButton from "./GetQuoteButton";

interface ProductCardProps {
    name: string;
    image: string;
    description: string;
    category?:string
  }

// Functional component with typed props
const ProductCard: React.FC<ProductCardProps> = ({ name, image, description,category }) => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    // Determine if padding should be applied based on category
    const imagePaddingClass = category === 'mobility' ? 'p-8' : ''; // Adjust 'specific-category' to your desired category

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <Image src={`${basePath}${image}`} alt={name} className={`w-full object-cover ${imagePaddingClass}`} width={400} height={400} unoptimized={true}/>

      {/* Product Info */}
      {category === "strength" &&
        <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <GetQuoteButton />
      </div>
      }
      {category !== "strength" &&
        <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <GetQuoteButton />
    </div>
      }
    </div>
  );
};

export default ProductCard;
