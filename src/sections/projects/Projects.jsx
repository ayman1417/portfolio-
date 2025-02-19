import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Data } from '../../helper/ProjectsData'
export default function Projects() {


    return (
        <section id='projects' className=" overflow-hidden   flex items-center justify-center flex-col  min-w-screen  min-h-screen   text-white bg-black p-10  ">
            <h1 className='text-center text-5xl my-12 mb-10 font-bold bg-gradient-to-r from-main via-main to-text bg-clip-text text-transparent' >Projects</h1>
            <div

                className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-5">
                {
                    Data.map((data, index) => (
                        <motion.div key={index}
                            initial={{ y: "-100%", opacity: 0, scale: 0 }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 1, delay: index * .2, ease: "anticipate" }
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            viewport={{ once: false, amount: .2 }}

                            className=" border-2 border-main rounded-2xl p-5 relative group overflow-hidden  duration-250 cursor-pointer hover:-translate-y-2 ">
                            <div className="bg-main flex items-center justify-center w-20 h-20 rounded-full mb-3 ">
                                {data.icon}
                            </div>
                            <h1 className='text-2xl font-bold mb-1'>{data.title}</h1>
                            <p className='text-lg line-clamp-4 text-slate-300'>{data.Descrioption}</p>
                            <div className="bg-main p-1 gap-2 rounded-lg absolute top-6  duration-200  start-full  group-hover:start-[85%] flex justify-between flex-col">
                                <a href={data.Git} target='_blank' className="bg-black hover:bg-main hover:text-black duration-250 text-main flex items-center justify-center w-12 h-12 rounded-full     ">
                                    <i className="fa-brands fa-github text-3xl"></i>
                                </a>

                                <a href={data.link} target='_blank' className="bg-black hover:bg-main hover:text-black duration-2500 text-main flex items-center justify-center w-12 h-12 rounded-full    ">
                                    <i className="fa-solid fa-link text-xl"></i>
                                </a>

                            </div>
                        </motion.div>
                    ))}
            </div>


        </section>
    )
}
