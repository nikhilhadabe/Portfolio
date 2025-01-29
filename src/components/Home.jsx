import React from 'react'
import pic from "../../public/nikhil.png"
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20 ">
       <div className="flex flex-col md:flex-row">
         <div className="md:w-1/2  mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome in  My Feed</span>
           <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1> Hello, I'm a </h1>
           {/* <span className="text-red-700 font-bold">Developer</span> */}
            <ReactTyped
            className="text-red-700 font-bold"
          strings={["Developer", "Data Analyst", "Coder", "Expert"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            "To leverage my skills in [specific area/field, e.g., software development, data analysis, or
             machine learning] and contribute to innovative projects that drive organizational growth
              while enhancing my expertise in cutting-edge technologies."
            </p>
            <br />
            {/** social mdeia icons */}
            <div className="flex flex-col  items-center md:flex-row justify-between space-y-6 md:space-y-0 ">
            <div className=" space-y-2 ">
                <h1 className="font-bold ">Available on</h1>
               <ul className="flex space-x-5">
                <li>
                   <a href="https://www.facebook.com/" target="_blank">
                    <ImFacebook2  className="text-2xl cursor-pointer" />
                    </a>
                </li>
                <li>
                   <a href="https://www.linkedin.com/" target="_blank">
                    <FaLinkedin  className="text-2xl cursor-pointer" />
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/" target="_blank">
                    <FaSquareGithub  className="text-2xl cursor-pointer"  />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">  
                    <FaInstagramSquare  className="text-2xl cursor-pointer" />
                    </a>
                </li>
               </ul>

            </div>

            <div className='space-y-2'>

            <h1 className="font-bold">Currently working on</h1>
               <div className="flex space-x-5">
               <FaPython  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"  />
               <TbFileTypeSql  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"  />
               <FaReact  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"    />
               <DiJavascript  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"    />

               </div>
            </div>

           </div>
         </div>

         <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
           <img src={pic} className="rounded-full md:w-[450px]  md:h-[450px]" alt="" />
         
         </div>
       </div>  
    </div>
    <hr />
    </>
 
  )
}

export default Home
