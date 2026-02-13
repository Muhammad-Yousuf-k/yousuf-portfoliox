import React, { useEffect, useRef } from "react";
import SectionLeft001 from "../../MUC/sectionLeft001";
import HeroRight from "./HeroRight";
import { gsap } from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP floating animation
    gsap.to(buttonRef.current, {
      y: -10,          // move up by 10px
      duration: 2,     // 2 seconds per cycle
      repeat: -1,      // infinite loop
      yoyo: true,      // move back down
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

      tl.from(".Hero-FadeIn-l", { opacity: 0, x: -50, stagger: 0.2 })
        .from(".Hero-FadeIn-Up", { opacity: 0, y: 50, stagger: 0.2 }, "<0.2")
        .from(".Hero-FadeIn-Ap", { opacity: 0, scale: 0, stagger: 0.2 }, "<0.2");
    }, heroRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div
      id="hero"
      ref={heroRef}
      className="flex flex-col-reverse md:flex-row justify-center items-center  h-[1000px] md:h-[100vh] w-[100vw] overflow-hidden"
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
      <HeroRight />
      <a href="#hero">
        <button ref={buttonRef} className="fixed bottom-5 right-5 bg-[var-(--secondary)] hover:bg-[var-(--primary)] rounded-full p-3"><svg className="w-10" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" /></svg></button>
      </a>
    </div>
  );
};

export default HeroSection;
