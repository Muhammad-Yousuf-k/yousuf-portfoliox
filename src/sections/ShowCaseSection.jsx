import React, { useState } from "react";
import SectionTop001 from "../component/SectionTop001";
import ShowCaseBottom from "../component/ShowCaseBottom";
import useData from "../hooks/useData";

const ShowCaseSection = () => {
  const {
    projectData,
    certificateData,
    techStackFrontendData,
    techStackBackendData,
    techStackOtherData,
  } = useData();

  const [currentView, setCurrentView] = useState("project");

  const views = [
    { key: "project", label: "Project" },
    { key: "certificate", label: "Certificate" },
    { key: "techStack", label: "Tech Stack" },
  ];

  return (
    <div id="showCase" className="w-full overflow-hidden h-[100vh]">
      {/* Top Section */}
      <SectionTop001 name="ShowCase" />

      {/* View Buttons */}
      <div className="w-full h-[20vh] flex justify-evenly items-center">
        {views.map((view) => (
          <div
            key={view.key}
            onClick={() => setCurrentView(view.key)}
            className="showCase-FadeIn-Ap text-xl sm:text-2xl cursor-pointer active:scale-95 text-nowrap h-[50%] rounded sm:w-1/4 flex items-center justify-center
                       bg-[var(--secondary)] hover:bg-[var(--primary)] text-[var(--light)]"
          >
            {view.label}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <ShowCaseBottom
        currentView={currentView}
        projectData={projectData}
        certificateData={certificateData}
        techStackFrontendData={techStackFrontendData}
        techStackBackendData={techStackBackendData}
        techStackOtherData={techStackOtherData}
      />
    </div>
  );
};

export default ShowCaseSection;