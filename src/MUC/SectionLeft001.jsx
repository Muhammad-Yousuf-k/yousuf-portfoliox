import React from "react";

const SectionLeft001 = ({
  mainHead,
  subHead,
  para,
  btn1,
  btn2,
  btn1Link = "#",
  btn2Link = "#",
}) => (
  <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col justify-center items-start gap-5 p-5">
    <div className="flex flex-col gap-5">
      <h2 className="Hero-FadeIn-l text-[var(--secondary)] text-left text-xl md:text-2xl font-bold">
        {subHead}
      </h2>
      <h1 className="Hero-FadeIn-l font-bold text-6xl md:text-7xl lg:text-8xl">
        {mainHead}
      </h1>
    </div>
    <p className="Hero-FadeIn-l">{para}</p>
    <div className="Hero-FadeIn-l flex gap-5">
      <a href={btn1Link}>
        <button className="active:scale-95 bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)] px-6 py-3 rounded">
          {btn1}
        </button>
      </a>
      <a href={btn2Link} className="flex items-center">
        <button className="active:scale-95 font-bold hover:text-[var(--secondary)] flex items-center gap-2">
          {btn2} <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </a>
    </div>
  </div>
);

export default SectionLeft001;
