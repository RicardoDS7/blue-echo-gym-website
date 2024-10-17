import React, { useState } from "react";
import { NAV_LINKS } from "../constants";
import Link from "next/link";
import '../styles/globals.css'; // Ensure the path is correct
import GetQuoteButton from "./GetQuoteButton";

// Functional component with typed props
const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 md:static flex items-center justify-evenly w-full p-6 bg-charcoalBlack z-30">
      {/* Logo */}
      <h1 className="text-white text-2xl font-bold">BLUE ECHO <span className="text-blue-500">FITNESS</span></h1>

      {/* Hamburger Menu Icon (only visible on mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex list-none p-0 space-x-8">
        {NAV_LINKS.map((navItem) => (
          <li key={navItem.section} className="relative">
            <Link href={navItem.path}>
              <span className="nav-item transition-all min-w-24 duration-200 focus:ring-blue-400 hover:font-bold text-ivoryWhite block">
                {navItem.section}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Get Quote Button (visible on desktop) */}
      <div className="hidden lg:block">
        <GetQuoteButton />
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 w-full bg-charcoalBlack p-6 space-y-4 z-30`}
      >
        {NAV_LINKS.map((navItem) => (
          <li key={navItem.section} className="relative">
            <Link href={navItem.path}>
              <span className="nav-item transition-all duration-200 focus:ring-blue-400 hover:font-bold text-ivoryWhite block">
                {navItem.section}
              </span>
            </Link>
          </li>
        ))}
        <li>
          <GetQuoteButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
