import React from "react";
import Link from "next/link";

// Define the props interface (optional)
interface GetQuoteButtonProps {
  label?: string;
  sectionId?: string;  // The section id to scroll to
}

const GetQuoteButton: React.FC<GetQuoteButtonProps> = ({ label = "Get a Quote", sectionId = "#quote-section" }) => {
  return (
    <Link href={sectionId}
        className="
          bg-blue-500 
          text-white 
          font-bold 
          py-2 
          px-6 
          rounded 
          hover:bg-blue-600 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-400 
          focus:ring-opacity-75
          transition-colors 
          duration-300
          inline-block
        "
      >
        {label}
    </Link>
  );
};

export default GetQuoteButton;
