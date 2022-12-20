import React from 'react';
import img from '../../src/assets/nahid hassan.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


AOS.init();
const About = () => {
    return (
       <div className='mb-24 mt-14 border-radius'  data-aos="flip-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="2000">
        <h1 className='text-5xl text-center mb-16'>About Myself</h1>
         <div className="flex flex-col  w-full lg:flex-row text-center">
        <div className="grid flex-grow lg:w-1/2 my-auto lg:pl-24 lg:pr-24 lg:text-xl">I'm Nahid Hassan. I am 24 years old. I'm studies Physics at National University. I am completing a web development course at Programming Hero. I have a good knowledge of Javascript, ES6, React JS, HTML, CSS, Bootstrap, tailwind css for the Development of Front-end UI. I have also known Node JS, Express JS, MongoDB , Firebase for Backend Development. Now I am studying web development daily. I am a deeply dedicated learner and interested in new technology.</div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className="grid flex-grow text-center lg:w-3/2 ">
        <figure><img className='w-72' src={img} alt="Shoes" /></figure>
        </div>
      </div>
       </div>
    );
};

export default About;