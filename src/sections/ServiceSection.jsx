import SectionTop001 from '../component/SectionTop001';
import ServiceCard from '../component/ServiceCard';
import useData from '../hooks/useData';

const ServiceSection = () => {
  const { serviceData } = useData();

  return (
    <div id='service' className='flex flex-col items-center w-full gap-10 py-20'>
      <SectionTop001 name="Services" />

      <div className='flex flex-wrap justify-center w-full gap-5'>
        {serviceData.map((service, i) => (
          <ServiceCard
            key={i}
            data={{
              ...service,
              top: service.top,
              bgColor: service.type === "red" ? "var(--secondary)" : "var(--primary)"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;