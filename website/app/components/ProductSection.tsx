import React from "react";

// Define the props interface (optional)
interface ProductSectionProps {
    label?: string;
    sectionId?: string;  // The section id to scroll to
  }

// Functional component with typed props
const ProductSection: React.FC<ProductSectionProps> = ({label,sectionId}) => {
    return (
        <section id={sectionId} className="h-[85vh]">
          <h1>{label}</h1>
        </section>
      );
    };

export default ProductSection;
