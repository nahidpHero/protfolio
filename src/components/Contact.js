import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";


AOS.init();
const Contact = () => {
     const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_j4i17rf', 'template_emk37zn', form.current, 'PKvCuvjLU6GGO6WNZ')
        .then((result) => {
            toast('Your message sent')
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      
        event.target.reset();
      };
      
    return (
    <div id="contact" data-aos="zoom-in">
      <h1 className="my-5 text-5xl text-center">Send Email</h1>
      <form
       ref={form}
        className="flex flex-col p-5 mx-auto mb-10 border rounded-md shadow-2xl lg:w-1/2 border-spacing-1 border-cyan-400"
        onSubmit={handleSubmit}
        
      >
        <input
          type="text"
          className="w-full px-5 my-5 text-black border-none shadow-md input bg-none"
          name="user_name"
          placeholder="Full Name"
        />
        <input
          className="w-full px-5 my-5 text-black input"
          type="email"
          name="user_email"
          placeholder="Your Email"
        />
        <input
          type="text"
          className="w-full px-5 my-5 text-black border-none shadow-md input bg-none"
          name="user_subject"
          placeholder="Subject"
        />
        <textarea
          className="w-full h-32 p-5 my-5 text-black input"
          name="message"
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