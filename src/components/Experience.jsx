import React, { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { section } from "framer-motion/client";

const experiences = [
  {
    role: "Frontend Developer Intern",
    location: "Zynk.AI",
    duration: "April 2025 - Present",
    description:
      "Contibuted to Untitled Venture Zynk.AI, a cutting-edge recruiting platform, where I built a responsive and modern landing page and managed the entire frontend architecture using Next.js and Tailwind CSS. Designed clean, intuitive UI components to present AI-driven candidate insights effectively.",
  },
];

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // Lowered threshold for earlier trigger
    );

    const target = document.querySelector("#experience");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section
      id="experience"
      className="min-h-screen w-full flex items-center justify-center bg-black text-white px-6 md:px-16 lg:px-32 py-20"
    >
        <div className="flex flex-col max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-10 text-blue-500">Experience</h1>
            <div className="relative mx-auto  h-auto pt-20 lg:pt-28 pb-10 sm:pb-14 lg:pb-10 lg:ml-10">
                <div className="absolute top-0 bottom-0 w-1 bg-blue-500 left-1/2 transform -translate-x-1/2"></div>

                {experiences.map((exp, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-between w-full mb-10 ${
                    index % 2 === 0
                        ? "flex-col lg:flex-row-reverse"
                        : "flex-col lg:flex-row"
                    }`}
                >
                    <div
                    className={`w-4/5 lg:w-1/2 px-4 text-gray-400 mb-4 lg:mb-14 text-sm opacity-0 ${
                        isVisible ? `animate-fadeInLeft` : ""
                    } ${
                        index % 2 === 0
                        ? "text-center lg:text-left"
                        : "text-center lg:text-right"
                    }`}
                    style={{
                        animationDelay: `${index === 0 ? "0.2s" : index * 0.1 + 0.2}s`, // Reduced delay values
                    }}
                    >
                    {exp.duration}
                    </div>

                    <div
                    className={`w-16 h-16 bg-blue-500 mb-4 sm:mb-16 text-white rounded-full flex items-center justify-center border-4 border-white z-10 opacity-0 group ${
                        isVisible ? `animate-fadeInCircle` : ""
                    } hover:bg-white hover:border-blue-500 hover:text-blue-500 transform transition-all duration-300`}
                    style={{
                        animationDelay: `${index === 0 ? "0.2s" : index * 0.1 + 0.2}s`,
                        marginBottom: "30px",
                        marginLeft: "16px",
                        marginRight: "16px",
                    }}
                    >
                    <MapPinIcon className="w-8 h-8" />
                    </div>

                    <div
                    className={`w-4/5 lg:w-1/2 bg-white rounded-lg shadow-lg p-6 relative opacity-0 ${
                        isVisible ? `animate-fadeInBox` : ""
                    } ${
                        index % 2 === 0
                        ? "text-center lg:text-left ml-0 lg:ml-0"
                        : "text-center lg:text-right mr-0 lg:mr-0"
                    } hover:bg-gray-200 transform transition-all duration-300 ease-in-out group`}
                    style={{
                        animationDelay: `${index === 0 ? "0.1s" : index * 0.1 + 0.1}s`, // Reduced delay values
                        marginTop: "20px",
                    }}
                    >
                    <div
                        className={`absolute w-0 h-0 border-solid border-t-[8px] border-t-transparent border-b-[16px] border-b-transparent ${
                        index % 2 === 0
                            ? "border-l-[20px] border-l-white -right-5 top-6 group-hover:border-l-gray-200"
                            : "border-r-[20px] border-r-white -left-5 top-6 group-hover:border-r-gray-200"
                        } hidden lg:block`}
                    ></div>
                    <h3 className="text-xl font-bold text-black">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.location}</p>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Timeline;
