import React from "react";

const SectionRight001 = ({ img0, imgAlt0, img1, imgAlt1 }) => {
  return (
    <div className="relative flex items-center w-full h-full p-5 md:w-1/2 xl:w-1/3">
      {/* Main image */}
      <img
        className="Hero-FadeIn-Ap heroimg absolute z-10 w-[90%] xl:w-full"
        src={img0}
        alt={imgAlt0}
        loading="lazy"
      />
      {/* Optional secondary image */}
      {img1 && (
        <img
          className="Hero-FadeIn-Up absolute z-20 w-[90%] xl:w-full"
          src={img1}
          alt={imgAlt1}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default SectionRight001;