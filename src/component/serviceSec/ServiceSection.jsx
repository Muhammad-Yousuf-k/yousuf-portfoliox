import React, { useState } from 'react'
import SectionTop from '../../MUC/SectionTopHeading001'
import ServiceCardRed from './ServiceCardRed'
import ServiceCardBlack from './ServiceCardBlack'
import serviceImages from "../../assets/scripts/renderImage";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const servicex = () => {

const [serviceData, setServiceData] = useState([
  {
    name: "WordPress Customization",
    para: "Professional WordPress setup, theme customization, and optimization to create visually appealing and functional websites tailored to your brand.",
    img: serviceImages.wordpress,
    top: "10vh",
    type: "red",
  },
  {
    name: "SEO & Digital Marketing",
    para: "Helping brands improve search rankings, increase visibility, and engage the right audiences through strategic SEO and digital marketing solutions.",
    img: serviceImages.seo,
    top: "15vh",
    type: "black",
  },
  {
    name: "Graphic Design",
    para: "Crafting creative visuals, branding elements, and design assets that capture attention and communicate your brand story.",
    img: serviceImages.graphicDesign,
    top: "20vh",
    type: "red",
  },
  {
    name: "Web Development",
    para: "Developing responsive, fast, and user-friendly websites that deliver seamless experiences across devices.",
    img: serviceImages.webApp,
    top: "25vh",
    type: "black",
  },
  {
    name: "Website Development",
    para: "End-to-end website creation—from planning and design to deployment—ensuring performance, scalability, and usability.",
    img: serviceImages.webSite,
    top: "30vh",
    type: "red",
  },
  {
    name: "Troubleshooting",
    para: "Providing expert troubleshooting, maintenance, and support to keep your website running smoothly and efficiently.",
    img: serviceImages.troubleshoot,
    top: "35vh",
    type: "black",
  },
]);



  return (
    <div id='service' className=' flex flex-col items-center gap-5 w-[100wh] '>
      <SectionTop name="Service" />

      {serviceData.map((service, i) =>
        service.type === "red" ? (
          <ServiceCardRed key={i} data={service} />
        ) : (
          <ServiceCardBlack key={i} data={service} />
        )
      )}


    </div>
  )
}

export default servicex