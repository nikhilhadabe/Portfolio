import React from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) =>/* console.log(data) */{
        const userinfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
             await  axios.post("https://getform.io/f/bxooxvxa",userinfo);
             /**alert("Your Message has been sent"); */
             toast.success("Your Message has been sent");
        }catch (error) {
              console.log(error);
              toast.error("Something went wrong!")
        }
      }
  return (
    <>
    <div name="Contact" className="max-w-screen-2x1 container mx-auto px-4 md:px-20">
        <h1 className="text-3xl font-bold mb-4 ">Contact Us</h1>
        <div className="flex flex-col items-center justify-center mt-5">
           
           
        <form onSubmit={handleSubmit(onSubmit)}
                 // action="https://getform.io/f/bxooxvxa" 
                 // method="POST"
                  className="bg-slate-200 w-96 px-8 py-6 rounded-xl ">
                <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                <div className="flex flex-col mb-4">
                    <label  className="block text-gray-700 " >Full Name</label>
                    <input type="text" id="name" 
                             name="name"  placeholder="Enter Your Name"
                             {...register("name", { required: true })} 
                            className="shadow appearence-none border rounded roundex-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
              
                     {errors.name && <span>This field is required</span>}

                </div>
                <div className="flex flex-col mb-4">
                    <label  className="block text-gray-700 "> Email </label>
                    <input type="text" id="email"
                           name="email" placeholder="Enter Your Email Address" 
                           {...register("email", { required: true })} 
                           className="shadow appearence-none border rounded roundex-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
              
                      {errors.email && <span>This field is required</span>}  

                </div>
                <div className="flex flex-col mb-4">
                    <label className="block text-gray-700 " >Message</label>
                    <textarea type="text" id="message" 
                              name="message" placeholder="Enter Message"
                              {...register("message", { required: true })} 
                              className="shadow appearence-none border rounded roundex-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
                
                    {errors.message && <span>This field is required</span>}

                </div>
                <button type="submit" id="submit" name="submit"
                       className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Submit</button>
            </form>

        </div>

    </div>
    <br />
    </>
  )
}

export default Contact
