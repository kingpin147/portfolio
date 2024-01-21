import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";


interface NavbarProps {
  // Add props if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/" // Add link to the logo
        >
          <Image  src = {require("../../../public/assests/Kingpin Devops logo.jpg")} alt="Kingping Devops"  width={100} height={100} className="w-[50px]" />
          <span className="ml-3 text-xl">KINGPIN DEVOPS</span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link  className="mr-5 hover:text-blue-600 " href="/">
            Home
          </Link>

          <Link  className="mr-5 hover:text-blue-600" href="#">
            About
          </Link>

          <Link  className="mr-5 hover:text-blue-600" href="#">
            Projects
          </Link>

          <Link  className="mr-5 hover:text-blue-600" href="#">
            Contact us
          </Link>
        </nav>

        <a href="/assests/">
        <button className="flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 " flex-col>
          Download CV
          <FaCloudDownloadAlt className="text-xl ml-2 flex flex-col" />
        </button>
          </a>
      </div>
    </header>
  );
};

export default Navbar;
