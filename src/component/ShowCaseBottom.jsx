import React from "react";
import EducationCard from "../component/EducationCard";
import TechStackBox from "../component/TechStackBox";
import ProjectCard from "../component/ProjectCard";

const ShowCaseBottom = ({
  currentView,
  projectData,
  certificateData,
  techStackFrontendData,
  techStackBackendData,
  techStackOtherData,
  techStackCMSData,
}) => {
  const techStacks = [
    { title: "Frontend", data: techStackFrontendData },
    { title: "Backend", data: techStackBackendData },
    { title: "CMS", data: techStackCMSData },
    { title: "Other", data: techStackOtherData },
  ];

  return (
    <>
      {/* Projects View */}
      {currentView === "project" && (
        <div id="proj" className="w-full flex justify-center overflow-hidden h-[90vh]">
          <div className="w-[90%] h-full p-5 overflow-y-scroll flex flex-wrap justify-center gap-3 scroll-none">
            {projectData.map((e) => (
              <ProjectCard projectData={e} />
            ))}
          </div>
        </div>
      )}

      {/* Certificates View */}
      {currentView === "certificate" && (
        <div id="certificate" className="w-full h-[60vh] overflow-y-scroll p-5 flex flex-wrap justify-center gap-6 scroll-none">
          {certificateData.map((e) => (
            <EducationCard certificateData={e} />
          ))}
        </div>
      )}

      {/* Tech Stack View - Improved Design */}
      {currentView === "techStack" && (
        <div id="techStack" className="w-full h-[60vh] overflow-y-scroll p-5 flex flex-wrap justify-center gap-6 scroll-none">
          {techStacks.map((e) => (
            <TechStackBox techStacks={e} />
          ))}
        </div>
      )}
    </>
  );
};

export default ShowCaseBottom;