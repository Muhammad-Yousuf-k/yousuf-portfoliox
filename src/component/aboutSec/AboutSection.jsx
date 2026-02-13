import { useEffect } from 'react'
import SectionLeft001 from '../../MUC/SectionLeft001';
import AboutRight from './AboutRight';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const aboutSection = () => {

    useEffect(() => {
        gsap.from(".about-FadeIn-r", {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#about", // container of all cards
                start: "top 70%",
                end: "bottom 20%",
                // markers:true,
                toggleActions: "play none none none",
            },
        });
    }, []);





    return (
        <div id='about' className='flex justify-center items-center flex-col md:flex-row w-[100vw] overflow-hidden  md:h-screen'>
            <AboutRight />
            {/* <AboutLeft /> */}
            <SectionLeft001
                mainHead="About Me"
                subHead="Building Digital Experiences"
                para="Hello, I'm Muhammad Yousuf Khan, a passionate web developer and designer dedicated to transforming ideas into intuitive, visually stunning digital experiences. I specialize in both front-end and back-end development, creating responsive websites that not only look great but perform flawlessly. I thrive at the intersection of design and technology, delivering solutions that are creative, efficient, and impactful."
                btn1="View Portfolio"
                btn2="Contact Me"
                btn1Link="#showCase"
                btn2Link="#contact" />
        </div>
    )
}

export default aboutSection