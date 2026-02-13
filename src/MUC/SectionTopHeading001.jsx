import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionTop = ({ name }) => {

    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.from(headingRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                // markers: true, // remove in production
                toggleActions: "play none none none",
            },
        });
    }, []);

    return (
        <div ref={sectionRef} className="w-full h-[20vh] flex items-center justify-center">
            <div
                ref={headingRef}
                className="MUC-FadeIn-Up relative flex items-center justify-center text-6xl sm:text-8xl md:text-9xl"
            >
                <h1 className="stroke absolute opacity-50 font-[Montserrat] font-bold text-[1em] text-center z-10">{name}</h1>
                <h1 className="absolute text-[0.5em] text-center z-20 font-bold">{name}</h1>
            </div>
        </div>
    );
};

export default SectionTop;
