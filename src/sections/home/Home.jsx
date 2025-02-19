import React from 'react'
import { Button } from '@heroui/react'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
export default function Home() {


    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ff7b00",
                },
                links: {
                    color: "#ff7b00",
                    distance: 150,
                    enable: true,
                    opacity: 1,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );




    return (
        <section id='home' className="overflow-hidden  min-w-screen min-h-screen relative flex items-center justify-center text-white text-4xl font-bold ">
            <Particles
                id="tsparticles"
                className="absolute inset-0 "
                particlesLoaded={particlesLoaded}
                options={options}
            />

            <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1, ease: "easeOut" }
                }}
                exit={{ opacity: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative z-10 text-center">
                <p className='text-2xl text-main'> Welcome to my world </p>
                <h1 className='my-2'>I am Ayman Osama, <span className='text-main'> Front-End Developer </span></h1>
                <TypeAnimation
                    sequence={[
                        "Crafting Modern ",
                        2000,
                        "Crafting Responsive ",
                        2000,
                        "Crafting Interactive ",
                        2000,
                    ]}
                    speed={40}
                    cursor={false}
                    style={{ fontSize: "1.2em", display: "inline" }}
                    repeat={Infinity}
                />
                <span> Websites</span>






            </motion.div>
        </section>
    )
}
