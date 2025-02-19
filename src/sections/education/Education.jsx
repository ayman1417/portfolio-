import React, { useState } from 'react'
import { motion } from 'framer-motion'
export default function Education() {
    const [finish, setFinish] = useState(false);
    const skills = ["React.js", "HTML5 & CSS3", "Bootstrap", "Tailwind CSS", "SAAS", "JavaScript", "Version Control", "Animation & Effects", "API Integration", "React Query", "Framer Motion", "React Router DOM"]
    return (
        <section id='about' className=" overflow-hidden   flex items-center justify-center flex-col  min-w-screen  min-h-screen   text-white bg-black p-5  ">

            <motion.h1

                initial={{ y: "-100%", opacity: 0, scale: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
                }}
                exit={{ y: "-100%", opacity: 0, rotate: 360 }}
                viewport={{ once: false, amount: 0.2 }}

                className='text-center text-5xl mb-12 mt-10 font-bold bg-gradient-to-r from-main via-main to-text bg-clip-text text-transparent' >Education & Skills</motion.h1>


            {/* eduaction */}
            <motion.div
                className="grid md:grid-cols-2 gap-10 text-center  " data-taos-offset="300">
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.8, delay: 1, ease: "easeOut" }
                    }}
                    exit={{ x: "-100%", opacity: 0, rotate: 360 }}
                    viewport={{ once: false, amount: 0.2 }}

                    className="border-2 border-main p-3  rounded-3xl">
                    <h1 className=' text-main text-3xl mb-5 font-bold' >
                        <i className="fa-solid fa-graduation-cap me-2"></i>
                        Education</h1>
                    <h2 className="text-2xl font-semibold ">
                        Bachelor of Computer Science
                    </h2>
                    <p className="text-lg ">Assiut University</p>
                    <p className="text-sm  mt-1">
                        10/2020 – 07/2024
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.8, delay: 1, ease: "easeOut" }
                    }}
                    onAnimationComplete={() => setFinish(true)}
                    exit={{ x: "100%", opacity: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="border-2 border-main p-3  rounded-3xl">
                    <h1 className='text-main text-3xl mb-5 font-bold'>
                        <i className="fa-solid fa-award me-2"></i>
                        Certifications</h1>
                    <h2 className="text-2xl font-semibold">
                        Front-End Diploma
                    </h2>
                    <p className="text-lg">Route Academy</p>
                    <p className="text-sm mt-1">
                        Completed in 2024
                    </p>
                </motion.div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1, delay: 1.5, ease: "easeOut" }
                }}
                exit={{ opacity: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="grid md:grid-cols-4  sm:grid-cols-3 grid-cols-2 gap-x-3 mb-5">
                {finish &&

                    skills.map((skill, index) => (
                        <motion.p

                            initial={{ x: "-100%", opacity: 0, rotate: 0, }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                rotate: 720,
                                transition: { duration: 1, delay: index * 0.4, ease: "easeOut" }
                            }}
                            exit={{ x: "-100%", opacity: 0}}
                            viewport={{ once: false, amount: 0.2 }}
                            className=" font-semibold text-center  text-main mt-10 border-main border-2 rounded-full  h-28 w-28 flex items-center justify-center p-1">
                            {skill}
                        </motion.p>
                    ))


                }

            </motion.div>


        </section >
    )
}
