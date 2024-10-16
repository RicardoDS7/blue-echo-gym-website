import React from "react";
import Image from "next/image";

interface ProductCardProps {
    name: string;
    image: string;
    description: string;
  }

// Functional component with typed props
const ProductCard: React.FC<ProductCardProps> = ({ name, image, description }) => {

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <Image src={`${basePath}${image}`} alt={name} className="w-full object-cover" width={400} height={400} unoptimized={true}/>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
