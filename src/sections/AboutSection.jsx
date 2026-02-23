import SectionLeft001 from "../component/SectionLeft001";
import SectionRight001 from "../component/SectionRight001";
import useData from "../hooks/useData";

const AboutSection = () => {
  const { aboutSecImg } = useData();

  return (
    <div
      id="about"
      className="flex flex-col-reverse md:flex-row gap-x-10 justify-center items-center h-[1000px] md:h-[100vh] w-full overflow-hidden"
    >
      {/* Right Image */}
      <SectionRight001
        img0={aboutSecImg.aboutImg.path}
        imgAlt0={aboutSecImg.aboutImg.alt}
      />

      {/* Left Text Content */}
      <SectionLeft001
        mainHead="About Me"
        subHead="Building Digital Experiences"
        para="Hello, I'm Muhammad Yousuf Khan, a passionate web developer and designer dedicated to transforming ideas into intuitive, visually stunning digital experiences. I specialize in both front-end and back-end development, creating responsive websites that not only look great but perform flawlessly. I thrive at the intersection of design and technology, delivering solutions that are creative, efficient, and impactful."
        btn1="View Portfolio"
        btn2="Contact Me"
        btn1Link="#showcase"
        btn2Link="#contact"
      />
    </div>
  );
};

export default AboutSection;