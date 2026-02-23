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
  <div className="flex flex-col items-start justify-center w-full gap-5 p-5 lg:w-1/2 xl:w-1/3">
    {/* Headings */}
    <div className="flex flex-col gap-5">
      <h2 className="Hero-FadeIn-l text-[var(--secondary)] text-left text-xl md:text-2xl font-bold">
        {subHead}
      </h2>
      <h1 className="text-6xl font-bold Hero-FadeIn-l md:text-7xl lg:text-8xl">
        {mainHead}
      </h1>
    </div>

    {/* Paragraph */}
    <p className="Hero-FadeIn-l">{para}</p>

    {/* Buttons */}
    <div className="flex gap-5 Hero-FadeIn-l">
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