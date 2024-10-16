import React from "react";
import { NAV_LINKS } from "../constants";
import Link from "next/link";
import '../styles/globals.css'; // Ensure the path is correct
import GetQuoteButton from "./GetQuoteButton";

// Functional component with typed props
const NavBar: React.FC = () => {
  return (
    <nav className="fixed flex w-full justify-between items-center p-6 bg-charcoalBlack z-20">
        <h1 className="text-white text-2xl font-bold">Blue Echo Gym</h1>

        <ul className="flex list-none p-0">
            {NAV_LINKS.map((navItem) => (
            <li key={navItem.section} className="mx-4 relative">
                <Link href={navItem.path}>
                <span className="nav-item transition-all duration-200 focus:ring-blue-400 hover:font-bold text-ivoryWhite block">
                    {navItem.section}
                </span>
                {/* Invisible bold text for reserving space */}
                <span className="absolute font-bold opacity-0 pointer-events-none">
                    {navItem.section}
                </span>
                </Link>
            </li>
            ))}
        </ul>

        <GetQuoteButton />
    </nav>

  );
};

export default NavBar;
