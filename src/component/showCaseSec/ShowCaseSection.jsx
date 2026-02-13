import React, { useEffect, useState } from 'react'
import SectionTop from '../../MUC/SectionTopHeading001'
import ShowCaseBottom from './ShowCaseBottom'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {



    const [SecName, setSecName] = useState("ShowCase")
    const [currentView, setCurrentView] = useState("project")

    useEffect(() => {
        gsap.from(".showCase-FadeIn-Up", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#showCase", // container of all cards
                start: "top 90%",
                end: "bottom 20%",
                // markers:true,
                toggleActions: "play none none none",
            },
        });

        gsap.from(".showCase-FadeIn-Ap", {
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#showCase", // container of all cards
                start: "top 90%",
                end: "bottom 20%",
                // markers: true,
                toggleActions: "play none none none",
            },
        });
    }, []);


    return (
        <div id='showCase' className='w-[100wh] overflow-hidden h-[100vh]'>
            {/* top */}
            <SectionTop name={SecName} />
            {/* middle */}

            <div className=" w-full h-[20vh] flex justify-evenly items-center">
                <div onClick={() => { setCurrentView("project") }} className="showCase-FadeIn-Ap text-xl px-2 sm:text-2xl cursor-pointer active:scale-95 text-nowrap h-[50%] rounded sm:w-1/4 flex items-center justify-center bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)]">Project</div>
                <div onClick={() => { setCurrentView("certificate") }} className="showCase-FadeIn-Ap text-xl px-2 sm:text-2xl cursor-pointer active:scale-95 text-nowrap h-[50%] rounded sm:w-1/4 flex items-center justify-center bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)]">Certificate</div>
                <div onClick={() => { setCurrentView("techStack") }} className="showCase-FadeIn-Ap text-xl px-2 sm:text-2xl cursor-pointer active:scale-95 text-nowrap h-[50%] rounded sm:w-1/4 flex items-center justify-center bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)]">Tech Stack</div>
            </div>



            {/* bottom project */}
            <ShowCaseBottom currentView={currentView} />

        </div>
    )
}

export default ShowCaseSection