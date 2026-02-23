import React from "react";

const TestimonialCard = ({ name, email, text, img }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-[300px] w-[400px] gap-4">
      <img
        src={img || ""} // leave empty, add path later
        alt={name}
        className="object-cover w-16 h-16 p-2 bg-gray-100 rounded-full"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 h-[180px] overflow-y-auto overflow-x-hidden scroll-none w-full text-sm">
        {text}
      </p>
      {/* Optional: Uncomment if you want to show email */}
      {/* <span className="text-xs text-gray-400">{email}</span> */}
    </div>
  );
};

export default TestimonialCard;