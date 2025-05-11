import React from 'react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
return (
    <div id="contact" className="h-screen flex flex-col justify-center items-center bg-[#0a192f] text-white">
      <h2 className="text-4xl font-bold underline mb-8">Contact Me</h2>

      <div className="flex space-x-6">
        {/* Gmail Icon */}
        <a
          href="mailto:your.email@example.com"
          className="text-white hover:text-red-400 transition-transform duration-300 transform hover:scale-110"
          title="Send Email"
        >
          <FaEnvelope size={40} />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/kirankumart2001/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-transform duration-300 transform hover:scale-110"
          title="Visit LinkedIn"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  );
}

export default Contact