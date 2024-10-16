import React from "react";

interface ProductCardProps {
    name: string;
    image: string;
    description: string;
  }

// Functional component with typed props
const ProductCard: React.FC<ProductCardProps> = ({ name, image, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <img src={image} alt={name} className="w-full object-cover" />

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
