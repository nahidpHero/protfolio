import React from 'react';
import './Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


AOS.init();

const Skills = () => {
    return (
     <div className='lg:border-2 lg:p-14 mb-28' data-aos="zoom-in"
     data-aos-duration="2000">
      <div >
       <h1 className='text-5xl text-center'>My Skills</h1>
      </div>
       <div className='lg:ml-60'>
       <div className='skills-container'> 
       <div className='skills'></div>
       <h2 className='text-xl'>HTML</h2>
       <div className='progress-ber'>
        <div className='HTML'><span>86%</span></div>
       </div>
       <div className='skills'></div>
       <h2 className='text-xl'>CSS</h2>
       <div className='progress-ber'>
        <div className='CSS'><span>75%</span></div>
       </div>
       <div className='skills'></div>
       <h2 className='text-xl'>Bootstrap</h2>
       <div className='progress-ber'>
        <div className='Bootstrap'><span>90%</span></div>
       </div>
       <div className='skills'></div>
       <h2 className='text-xl'>Tailwind CSS</h2>
       <div className='progress-ber'>
        <div className='Tailwind'><span>85%</span></div>
       </div>
       <div className='skills'></div>
       <h2 className='text-xl'>JavaScript</h2>
       <div className='progress-ber'>
        <div className='JavaScript'><span>70%</span></div>
       </div>
       <div className='skills'></div>
       <h2 className='text-xl'>React js</h2>
       <div className='progress-ber'>
        <div className='React'><span>65%</span></div>
       </div>
       <div className='skills'></div>
       <h2 className='text-xl'>Node Js</h2>
       <div className='progress-ber'>
        <div className='Nodejs'><span>60%</span></div>
       </div>
       <div className='skills'></div>
       <h2 className='text-xl'>MongoDB</h2>
       <div className='progress-ber'>
        <div className='Nodejs'><span>60%</span></div>
       </div>
      </div> 
       </div>
     </div>
    );
};

export default Skills;