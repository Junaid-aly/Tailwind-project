
import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import Signup from './Signup';
import {Link} from "react-router-dom"


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      
      <div className="flex  flex-wrap justify-between ">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
              <FaHome />
           
              </a>

              <ul className={`hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 ${menuOpen ? 'block' : 'hidden'}`}>
                <li><a className="hover:text-gray-200" href="#">Home</a></li>
                <li><a className="hover:text-gray-200" href="#">Category</a></li>
                <li><a className="hover:text-gray-200" href="#">Collections</a></li>
                <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
              </ul>
              <Link to="/signup">
              <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-6 py-2 text-center  ">
              Signup
              </button>
              </Link>
            </div>

            <a className="xl:hidden flex mr-6 items-center" href="#" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>

            <a className="navbar-burger self-center mr-12 xl:hidden" href="#" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>
            
          </nav>
        </section>
      </div>


     
    </div>
  );
};

export default Navbar;
