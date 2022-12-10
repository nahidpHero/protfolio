import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
         <nav className="sticky top-0 flex flex-col items-center justify-center py-6 sm:flex-row md:justify-between md:items-center">
        <div>
          <Link
            to="/"
            className="text-xl font-semibold md:text-2xl text-accent hover:text-gray-300"
          >
           MD.NAHID HASSAN
          </Link>
        </div>

        <div className="flex items-center mt-2 -mx-2 sm:mt-0">
          <ul className="flex flex-wrap justify-center gap-3 px-1  md:gap-5">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
            
        </>
    );
};

export default Nav;