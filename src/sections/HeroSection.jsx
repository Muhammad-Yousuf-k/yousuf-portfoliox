import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SectionLeft001 from "../component/SectionLeft001";
import SectionRight001 from "../component/SectionRight001";
import useData from "../hooks/useData";

const HeroSection = () => {
  const { heroSecImg } = useData();
  const heroRef = useRef(null);

  useEffect(() => {
    // Create GSAP context scoped to this section
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } })
        .from(".Hero-FadeIn-l", { opacity: 0, x: -50, stagger: 0.2 })
        .from(".Hero-FadeIn-Up", { opacity: 0, y: 50, stagger: 0.2 }, "<0.2")
        .from(".Hero-FadeIn-Ap", { opacity: 0, scale: 0, stagger: 0.2 }, "<0.2");
    }, heroRef);

    return () => ctx.revert(); // Cleanup animations on unmount
  }, []);

  return (
    <div
      id="hero"
      ref={heroRef}
      className="flex flex-col-reverse md:flex-row gap-x-10 justify-center items-center h-[1000px] md:h-[100vh] w-full overflow-hidden"
    >
      <SectionLeft001
        mainHead={<>MERN Stack <br /> Developer</>}
        subHead="Hi There, I'm Yousuf"
        para="I am a passionate Full Stack Developer dedicated to building efficient and scalable web applications. I enjoy solving complex problems and turning ideas into functional, user-friendly solutions."
        btn1="Learn More"
        btn2="See Our Work"
        btn1Link="#about"
        btn2Link="#showCase"
      />
      <SectionRight001
        img0={heroSecImg.heroImg0.path}
        imgAlt0={heroSecImg.heroImg0.alt}
        img1={heroSecImg.heroImg1.path}
        imgAlt1={heroSecImg.heroImg1.alt}
      />
    </div>
  );
};

export default HeroSection;