import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import oracle from "../../public/oracle.png"
import python from "../../public/python.webp"
import reactjs from "../../public/reactjs.png"
import node from "../../public/node.png"
import java from "../../public/java.png"
import mongoDB from "../../public/mongoDB.jpg"

function Experience() {
    const carditem=[
        {
            id:1,
            logo:html,
            name:"Html"
        },
         {  
            id:2,
            logo:css,
            name:"Css"
        },
          {  id:3,
            logo:oracle,
            name:"oracle"
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
        {
            id:8,
            logo:reactjs,
            name:"reactjs"
        },
    ]
    
  return (
    <div name="Experience" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-16 ">
        <div>
            <h1  className="text-3xl font-bold mb-5">Tools Learn</h1>
            <p className=" font-semibold">
                 I have Knowledge about below tools:
                 </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                {
                carditem.map(({id,logo,name})=>(
                    <div key={id} className=" flex  flex-col items-center justify-center  border-[2px] rounded-full md:w-[200px] h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300">
                        <img src={logo} className="w-[150px]    rounded-full " alt="" />
                        <div>
                            <div className="">{name}</div>
                        </div>
                       
                    </div>

                ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Experience
