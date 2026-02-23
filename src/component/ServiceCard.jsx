import React from "react";

const ServiceCard = ({ data }) => {

    return (
        <div
            style={{ top: data.top, backgroundColor: data.bgColor }}
            className={`w-[90%] xl:w-[80%] flex flex-col lg:flex-row items-center gap-5 p-5 min-h-[350px] max-h-[100vh] rounded sticky overflow-hidden transition-transform duration-500 hover:scale-105`}
        >
            <img
                src={data.img}
                alt={data.name}
                className="object-cover rounded w-72 h-72 shrink-0"
            />
            <div className="flex flex-col items-center justify-center gap-3 lg:items-start">
                <h1 className={`text-4xl sm:text-6xl md:text-5xl xl:text-8xl font-bold text-white`}>
                    {data.name}
                </h1>
                <p className="w-full text-center text-white lg:text-left sm:text-base lg:text-xl xl:text-2xl line-clamp-3">
                    {data.para}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;