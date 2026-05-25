import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../component/Button";

const SectionLeft001 = ({
  mainHead,
  subHead,
  para,
  btn1,
  btn2,
  btn1Link = "#",
  btn2Link = "#",
}) => {
  const IconComponent = ArrowRight;

  return (
    <div className="flex flex-col items-start justify-center w-full sm:w-1/2 md:w-1/2 xl:w-[40%] h-full gap-5 p-5 text-xl xl:text-2xl 2xl:text-5xl ">
      {/* Headings */}
      <div className="flex flex-col gap-5">
        <h2 className="Hero-FadeIn-l text-[var(--textsecondary)] mb-[-20px] text-left text-[0.8em] font-bold">
          {subHead}
        </h2>
        <h1 className="exo2 text-5xl sm:text-7xl font-bold Hero-FadeIn-l text-[var(--textprimary)] ">
          {mainHead}
        </h1>
      </div>

      {/* Paragraph */}
      <p className="Hero-FadeIn-l text-[var(--textlight2)] text-[0.7em]">{para}</p>

      {/* Buttons */}
      <div className="flex gap-5 Hero-FadeIn-l">
        <a href={btn1Link}>
          <Button text={btn1} />
        </a>
        <a href={btn2Link} className="flex items-center">
          <button className="active:scale-95 font-bold text-[var(--textprimary)] hover:text-[var(--textsecondary)] flex items-center justify-center gap2 text-[0.6em]">
            {btn2} <IconComponent className="w-8" strokeWidth={2} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default SectionLeft001;