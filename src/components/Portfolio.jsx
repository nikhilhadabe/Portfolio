import React from 'react'
import java from "../../public/java.png"
import python from "../../public/python.webp"
import mongoDB from "../../public/mongoDB.jpg"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
import node from "../../public/node.png"

function Portfolio() {
    const carditem=[
        {
            id:1,
            logo:mongoDB,
            name:"mongoDB"
        },
         {  
            id:2,
            logo:express,
            name:"Express"
        },
          {  id:3,
            logo:reactjs,
            name:"reactjs"
        },
        {
            id:4,
            logo:node,
            name:"NodeJs"
        },
        {
            id:5,
            logo:mongoDB,
            name:"mongoDB"
        },
        {
            id:6,
            logo:python,
            name:"Python"
        },
        {
            id:7,
            logo:java,
            name:"java"
        },
    ]
    
  return (
    <div  name="Portfolio" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10 ">
        <div>
            <h1  className="text-3xl font-bold mb-5">Portfolio</h1>
            <span className="underline font-semibold">Featured Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                {
                carditem.map(({id,logo,name})=>(
                    <div key={id} className="md:w-[300px] h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
                        <img src={logo} className="w-[120px] h-[120px] p-1  rounded-full border-[2px]" alt="" />
                        <div>
                            <div className="px-2 font-bold text-xl mb-2">{name}</div>
                            <p className="px-2 text-gray-700">Hi hello how are you</p>
                        </div>
                        <div className=" px-6 py-4 space-x-4 justify-around ">
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' >Video</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded' >Source code</button>
                        </div>
                    </div>

                ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Portfolio
