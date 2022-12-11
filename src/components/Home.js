import React from 'react';
import Nav from './Nav';
import background from '../assets/background.jpg'
import Footers from './Footers';
import './Home.css'
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
    return (
        <>
        <div className="absolute ">
          <img className="fixed h-full" src={background} alt="" />
        </div>
        <header className="relative h-full px-10 text-white bg-slate-900 bg-opacity-70 pattern">
          <div className="px-6 mx-auto md:container ">
           <Nav></Nav>
           <Hero></Hero>
           <Projects></Projects>
           {/* <Skills></Skills> */}
           <Contact></Contact>
           <Footers></Footers> 
          </div>
        </header>
      </>
    );
};

export default Home;