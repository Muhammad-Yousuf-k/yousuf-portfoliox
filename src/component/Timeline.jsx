import React, { useEffect, useRef, useState } from 'react';

export default function ExperienceTimeline({ experiencesData }) {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [progressHeight, setProgressHeight] = useState(0);
    const timelineRef = useRef(null);



    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemId = parseInt(entry.target.dataset.id);
                        setVisibleItems((prev) => new Set([...prev, itemId]));
                    }
                });
            },
            { threshold: 0.3 }
        );

        const items = document.querySelectorAll('[data-timeline-item]');
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const updateProgress = () => {
            if (!timelineRef.current) return;

            const timelineRect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const timelineTop = timelineRect.top + window.scrollY;
            const timelineHeight = timelineRef.current.offsetHeight;

            const scrollY = window.scrollY + windowHeight / 2;
            let height = scrollY - timelineTop;
            height = Math.max(0, Math.min(height, timelineHeight));
            setProgressHeight(height);
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress);
        window.addEventListener('resize', updateProgress);

        return () => {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, []);

    return (
        <div className="min-h-screen px-5 py-0">
            <div ref={timelineRef} className="relative max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="absolute top-0 hidden w-1 h-full -translate-x-1/2 bg-gray-300 left-1/2 md:block"></div>
                <div className="absolute left-[25px] top-0 w-1 h-full bg-gray-300 md:hidden"></div>

                {/* Progress line */}
                <div
                    className="absolute left-1/2 top-0 w-1 bg-[var(--secondary)] -translate-x-1/2 transition-all duration-100 ease-linear md:block hidden"
                    style={{ height: `${progressHeight}px` }}
                ></div>
                <div
                    className="absolute left-[25px] top-0 w-1 bg-[var(--secondary)] transition-all duration-100 ease-linear md:hidden"
                    style={{ height: `${progressHeight}px` }}
                ></div>

                {experiencesData.map((exp, index) => (
                    <div
                        key={index}
                        data-id={index}
                        data-timeline-item
                        className={`relative w-full md:w-1/2 px-5 md:px-0 box-border mb-8 transition-all duration-600 ease-out ${index % 2 === 0 ? 'md:left-0 md:pr-12' : 'md:left-1/2 md:pl-12'
                            } ${visibleItems.has(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                            } pl-[70px] md:pl-0`}
                    >
                        {/* Dot */}
                        <div
                            className={`absolute top-10 w-[18px] h-[18px] bg-[var(--secondary)] rounded-full left-[17px] ${index % 2 === 0 ? 'md:left-auto md:-right-[9px]' : 'md:-left-[9px]'
                                }`}
                        ></div>

                        {/* Card */}
                        <div className="p-5 transition-transform duration-300 bg-white shadow rounded-2xl hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.companyName} Logo`}
                                    className="w-[42px] h-[42px] rounded-md object-cover"
                                />
                                <div>
                                    <div className="exo2 font-bold text-[var(--textprimary)]">{exp.title}</div>
                                    <div className="text-sm text-[var(--textsecondary)] ">{exp.companyName}</div>
                                </div>
                            </div>
                            <div className="text-[13px] text-[var(--textlight2)] mb-2 ">{exp.date}</div>
                            <div className="text-sm text-[var(--textlight2)]">{exp.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}