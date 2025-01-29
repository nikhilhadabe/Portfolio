
/*import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    
    <footer className="py-12">
        <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 ">
            <div className=" flex flex-col items-center justify-center ">
                <div className="flex space-x-4">
                    <ImFacebook2 size={24} />
                    <FaLinkedin size={24} />
                    <FaSquareGithub size={24} />
                    <FaInstagramSquare size={24} />
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8  flex flex-col items-center"></div>
                <p>
                    &copy; 2025. All Rights Reserved.
                </p>
            </div>

        </div>
    </footer>
   
  )
}

export default Footer
*/
import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <ImFacebook2 size={28} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/nikhilhadabe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 mb-4"></div>

        {/* Footer Text */}
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Nikhil Sanjay Hadbe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
