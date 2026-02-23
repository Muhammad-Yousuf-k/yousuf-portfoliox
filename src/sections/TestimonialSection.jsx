import SectionTop001 from "../component/SectionTop001";
import TestimonialCard from "../component/TestimonialCard";
import useData from "../hooks/useData";

const TestimonialSection = () => {
  const { testimonialsData } = useData();

  return (
    <div
      id="testimonial"
      className="flex flex-col items-center justify-center w-full py-20 overflow-hidden bg-gray-50"
    >
      <SectionTop001 name="Testimonials" />

      <div className="flex gap-5 w-[90%] overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {testimonialsData.map((testimonial, idx) => (
          <div key={idx} className="flex-shrink-0 snap-center">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;