import React, { useEffect, useState } from 'react'
import ayman1 from "../../assets/Ayman.png"
import { motion } from 'framer-motion'
export default function About() {
    const [touch, setTouch] = useState(true)
    const [msg, setMsg] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Oops");
            setTouch(false)
            setMsg("OOPS")
        }, 7000);

        return () => clearInterval(interval);
    }, [touch]);

    function handleTouch() {
        setTouch(true);
        setMsg("Thanks");
    }

    return (
        <section id='about' className=" overflow-hidden   flex items-center justify-center flex-col  min-w-screen  min-h-screen   text-white bg-black p-5  ">
            <h1 className='text-center text-5xl mb-16 font-bold bg-gradient-to-r from-main via-main to-text bg-clip-text text-transparent' >About Me</h1>
            <div className=" hidden lg:grid lg:grid-cols-2 gap-5 p-10">

                <motion.p
                    initial={{ x: "100%", opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1, ease: "easeOut" }
                    }}
                    exit={{ opacity: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className=" text-xl m-auto md:w-4/5 text-start leading-loose  ">
                    Hello! I'm Ayman Osama, a passionate Front-End Developer based in Egypt. With a keen eye for detail and a love for crafting intuitive, dynamic user interfaces, I specialize in building responsive web applications using React.
                    Whether it's developing interactive components, implementing smooth animations, or ensuring cross-browser compatibility, I always strive to deliver clean, scalable, and maintainable code that enhances user experience.
                </motion.p>

                <div
                    initial={{ x: "100%", opacity: 0, display: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        display: 1,
                        transition: { duration: 0.8, delay: 1, ease: "easeOut" }
                    }}
                    exit={{ x: "100%", opacity: 0, display: 0 }}
                    viewport={{ once: false, amount: 0.2 }}

                    onMouseEnter={handleTouch} className={`  m-auto rounded-3xl w-[500px] h-[500px] border-main relative border-2   duration-250 ${touch ? "rotate-0" : "rotate-[5deg]"} `}>
                    <img src={ayman1} alt="" className='w-100' />
                    {!touch &&
                        <div className="absolute bottom-96 end-16">
                            <i className="fa-regular fa-message text-7xl text-main text-center relative">
                                <p className=' text-main text-sm  absolute start-4 top-4'>{msg}</p>
                            </i>
                        </div>
                    }
                </div>

            </div>

            <div className="lg:hidden	 grid lg:grid-cols-2 gap-5 p-10   ">
                <div onMouseEnter={handleTouch} className={` m-auto rounded-3xl w-[500px] h-[500px] border-main relative border-2   duration-250 ${touch ? "rotate-0" : "rotate-[5deg]"} `}>
                    <img src={ayman1} alt="" className='w-90' />
                    {!touch &&
                        <div className="absolute bottom-96 end-16">
                            <i className="fa-regular fa-message text-7xl text-main text-center relative">
                                <p className=' text-main text-sm  absolute start-4 top-4'>{msg}</p>
                            </i>
                        </div>
                    }
                </div>
                <p className=" text-xl m-auto md:w-4/5 text-start leading-loose  ">
                    Hello! I'm Ayman Osama, a passionate Front-End Developer based in Egypt. With a keen eye for detail and a love for crafting intuitive, dynamic user interfaces, I specialize in building responsive web applications using React.
                    Whether it's developing interactive components, implementing smooth animations, or ensuring cross-browser compatibility, I always strive to deliver clean, scalable, and maintainable code that enhances user experience.
                </p>
            </div>


        </section>
    )
}
