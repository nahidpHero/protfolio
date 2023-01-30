import React from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import greeho from "../assets/greeho.png";
import getRide from "../assets/getRide.png";
import tourPlan from "../assets/tourPlan.png";


AOS.init();

const Projects = () =>  {
    const projects = [
      {
        title: "City Tours",
        url: "https://city-tours-f961f.web.app/home",
        description:
       "This is a full-stack customer review giving platform about tourist service.",
        technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
        image: `${greeho}`,
        time: "20 Oct 2022 - Present",
      },
      {
        title: "E-learning",
        url: "https://e-learning-da6d5.web.app/",
        description: "This is a full-stack service learning website anyone can purses this course",
        technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
        image: `${getRide}`,
        time: "23 Nov 2022 - Present",
      },
      {
        title: "Kenakata.com",
        url: "https://kenakata-26a59.web.app/",
        description:
          "This is a full-stack customer review giving platform and some product purses",
        technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
        image: `${tourPlan}`,
        time: "20 Oct 2022 - Present",
      },
    ];
    // console.log(projects);
    return (
      <div id="projects" className="py-16 mx-auto w-62 lg:py-20 "
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <h1 className="my-10 text-5xl text-center">My Projects</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              href={project.url}
              key={project.name}
              className="overflow-hidden text-white transition duration-100 rounded shadow-sm hover:-translate-y-2"
            >
              <div className="overflow-y-auto">
                <img
                  src={project.image}
                  className="object-cover w-full h-52 "
                  alt=""
                />
              </div>
              <div className="p-5 border bg-slate-200 opacity-70 h-62">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-600">— {project.time}</span>
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {project.title}
                </a>
                <p className="mb-2 text-gray-700">{project.description}</p>
                <p className="mb-2 text-gray-700">
                  <span className="font-bold">Technologies: </span>
                  {project.technologies}.
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

export default Projects;