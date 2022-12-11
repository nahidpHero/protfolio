import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import emailjs from '@emailjs/browser';

import { toast } from "react-hot-toast";


AOS.init();
const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
        .sendForm(
          "service_j36j37e",
          "template_k8k1nue",
           event.target,
          "0D_-puATn7oW6obdq"
        )
        .then(
          (result) => {
            toast.success(result.text);
          },
          (error) => {
            toast.error(error.text);
          }
        );
        

        event.target.reset();
      };
      
    return (
    <div id="contact" data-aos="zoom-in">
      <h1 className="my-5 text-5xl text-center">Send Email</h1>
      <form
        className="flex flex-col p-5 mx-auto mb-10 border rounded-md shadow-2xl lg:w-1/2 border-spacing-1 border-cyan-400"
        onSubmit={handleSubmit}
        
      >
        <input
          type="text"
          className="w-full px-5 my-5 text-black border-none shadow-md input bg-none"
          name="name"
          placeholder="Full Name"
        />
        <input
          className="w-full px-5 my-5 text-black input"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          type="text"
          className="w-full px-5 my-5 text-black border-none shadow-md input bg-none"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="w-full h-32 p-5 my-5 text-black input"
          name="text"
          placeholder="Write your email..."
        />

        <input
          className="w-20 px-5 mx-auto my-5 btn btn-accent"
          type="submit"
        />
      </form>
    </div>
    );
};

export default Contact;