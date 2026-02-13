import React from "react";

const TestimonialCard = ({ name, email, text, img }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-[300px] w-[400px] gap-4">
            <img
                src={img}
                alt={name}
                className="w-16 h-16 object-contain rounded-full bg-gray-100 p-2"
            />
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-600 h-[200px] overflow-x-hidden overflow-y-scroll scroll-none w-full text-sm">{text}</p>
            {/* <span className="text-gray-400 text-xs">{email}</span> */}
        </div>
    );
};

export default TestimonialCard;
