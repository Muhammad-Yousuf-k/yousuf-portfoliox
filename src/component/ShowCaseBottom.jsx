import React from "react";

const ShowCaseBottom = ({
  currentView,
  projectData,
  certificateData,
  techStackFrontendData,
  techStackBackendData,
  techStackOtherData,
}) => {
  const techStacks = [
    { title: "Frontend", data: techStackFrontendData },
    { title: "Backend", data: techStackBackendData },
    { title: "Other", data: techStackOtherData },
  ];

  return (
    <>
      {/* Projects View */}
      {currentView === "project" && (
        <div id="proj" className="w-full flex justify-center overflow-hidden h-[60vh]">
          <div className="w-[90%] h-full p-5 overflow-y-scroll flex flex-wrap justify-center gap-3 scroll-none">
            {projectData.map((e, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-500 shadow-2xl showCase-FadeIn-Up w-80 sm:w-90 h-100 rounded-4xl"
              >
                {/* Card top */}
                <div className="w-full h-[40%] border rounded-4xl overflow-hidden">
                  <img
                    className="object-cover w-full h-full rounded-4xl"
                    src={e.img}
                    alt={e.ProjName}
                  />
                </div>
                {/* Card bottom */}
                <div className="w-full h-[60%] p-1">
                  <div className="w-full h-[25%] flex items-center px-5">
                    <h1 className="bg-[var(--secondary)] text-white px-3 py-1 rounded-2xl flex items-center">
                      {e.ProjStatus}
                    </h1>
                  </div>
                  <div className="w-full h-[55%] flex flex-col gap-2 justify-center px-5">
                    <h1 className="flex items-center justify-between text-3xl">
                      {e.ProjName}
                      <a href={e.ProjLink} target="_blank" rel="noopener noreferrer">
                        <svg className="w-12 p-1 transition-all hover:-rotate-45 hover:bg-[var(--secondary)] rounded-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                          <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                        </svg>
                      </a>
                    </h1>
                    <p className="text-xl truncate">{e.ProjDescription}</p>
                  </div>
                  <div className="w-full h-[20%] flex gap-2 items-center px-5">
                    {e.ProjStack.map((stack, i) => (
                      <h2
                        key={i}
                        className="flex items-center px-3 py-1 text-white bg-gray-500 rounded-2xl"
                      >
                        {stack}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certificates View */}
      {currentView === "certificate" && (
        <div id="certificate" className="w-full h-[60vh] overflow-y-scroll p-5 flex flex-wrap justify-center gap-3 scroll-none">
          {certificateData.map((e, idx) => (
            <div key={idx} className="p-3 border shadow-2xl showCase-FadeIn-Up w-70 h-80 rounded-2xl">
              <div className="h-[50%] flex flex-col justify-start items-start gap-2 pt-[20px]">
                <h1 className="text-3xl font-bold">{e.degreeName}</h1>
                <h2 className="text-xl font-light">{e.instituteName}</h2>
                <h2 className="flex items-center gap-2">
                  <span className="bg-gray-300 text-[13px] font-light px-2 py-[3px] rounded">
                    {e.startDate}
                  </span>
                  <span className="bg-gray-300 text-[13px] font-light px-2 py-[3px] rounded">
                    {e.endDate}
                  </span>
                </h2>
              </div>
              <div className="flex justify-start items-center border-b h-[30%]">
                <h2 className="font-bold bg-[var(--primary)] text-white px-2 py-1 rounded">
                  {e.status}
                </h2>
              </div>
              <div className="h-[20%] flex justify-center items-center">
                <button className="active:scale-95 bg-[var(--secondary)] hover:bg-[var(--primary)] text-white py-2 rounded cursor-pointer w-full">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack View */}
      {currentView === "techStack" && (
        <div id="techStack" className="w-full h-[60vh] overflow-y-scroll p-5 flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-4 scroll-none">
          {techStacks.map((stack, idx) => (
            <div key={idx} className="border w-full lg:w-[40%] shrink-0 p-3 shadow-xl rounded">
              <div className="flex justify-center w-full py-2">
                <h1 className="text-5xl font-bold">{stack.title}</h1>
              </div>
              <div className="flex flex-col w-full gap-3 rounded">
                {stack.data.map((e, idx2) => (
                  <div key={idx2} className="flex items-center border rounded w-full h-[90px] px-2">
                    <svg className="w-[70px] h-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                      <path d={e.logo} />
                    </svg>
                    <div className="flex flex-col justify-center w-full">
                      <h1 className="text-3xl font-bold">{e.name}</h1>
                      <p className="text-xl">{e.level}</p>
                      <div className="w-full bg-gray-400 rounded">
                        <div
                          className="h-4 rounded bg-[var(--secondary)]"
                          style={{ width: e.prograss }} // dynamic width
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowCaseBottom;