import React from "react";
import SectionTop from "../../MUC/sectionTopHeading001";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
    {
        name: "Client A",
        email: "syedumer@gmail.com",
        text: "Yousuf delivered clean and well structured work. Communication was clear and the project was completed on time.",
        img: "/assets/icon/burger.svg",
    },
    {
        name: "Client B",
        email: "jane.doe@example.com",
        text: "This service is amazing! I highly recommend it to anyone looking for quality and professionalism.",
        img: "/assets/icon/burger.svg",
    },
    {
        name: "Client C",
        email: "john.smith@example.com",
        text: "Absolutely wonderful experience! The team is skilled, responsive, and friendly.",
        img: "/assets/icon/burger.svg",
    },
    {
        name: "Client D",
        email: "alice.johnson@example.com",
        text: "Fantastic! I am so happy with the results, and the support was top-notch.",
        img: "/assets/icon/burger.svg",
    },
];

const Testimonial = () => {
    return (
        <section
            id="testimonial"
            className="flex flex-col justify-center items-center w-full py-20 bg-gray-50"
        >
            <SectionTop name="Testimonials" />

            {/* Carousel */}
            <div className="flex gap-5 w-[90%] overflow-auto scroll-none relative">
                {testimonialsData.map((testimonial, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 snap-center  "
                    >
                        <TestimonialCard {...testimonial} />
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Testimonial;
