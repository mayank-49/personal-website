import React from "react";
import ProjectCard from "./ProjectCard";
// import VariableWeightText from "./VariableWeightText";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p5 from "../assets/p5.png";
import p4 from "../assets/p4.png";

const projectsData = [
  {
    id: "01",
    title: "TEXT-IT",
    description:
      "A feature-rich text manipulation tool developed to streamline and enhance text processing tasks. This application enables users to effortlessly perform a variety of text operations, including formatting, case conversion (uppercase, lowercase, title case), removing extra spaces, and changing font styles. Built with a clean and responsive UI, it ensures accessibility and ease of use across all devices. Whether for quick edits or detailed text transformations, the app offers an intuitive experience that caters to both casual users and professionals.",
    link: "https://text-it1221.netlify.app/",
    image: p1,
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: "02",
    title: "NEWS APP",
    description:
      "A dynamic and responsive news application developed using React, Bootstrap, and the News API. This project features a clean, modern interface that enables users to browse real-time news updates across multiple categories. Designed with a focus on performance, accessibility, and responsiveness, the application ensures a seamless user experience across devices. The integration with the News API allows for the automatic retrieval and display of current headlines, providing users with up-to-date information in an organized and intuitive layout.",
    link: "https://github.com/mayank-49/NewsApp",
    image: p2,
    techStack: ["REACT.JS", "BOOTSTRAP", "NEWS API"],
  },
  {
    id: "03",
    title: "V-TUBE",
    description:
      "VTube is a modern, responsive video streaming application built with React, Tailwind CSS, and Rapid API. It offers a seamless and user-friendly interface for exploring, searching, and watching video content in real time. Users can browse trending videos, view detailed video and channel information, and enjoy a smooth playback experience across all devices. The application is designed with a focus on performance and accessibility, ensuring that users can easily navigate and interact with the platform. VTube is perfect for anyone looking to",
    link: "https://youtube-clone-one-jade.vercel.app/",
    image: p5,
    techStack: ["REACT.JS", "TAILWIND CSS", "RAPID API", "VITE"],
  },
  {
    id: "04",
    title: "QUICK-BITE",
    description:
      "Built a fully responsive food ordering website using React.js, Tailwind CSS, Redux Toolkit, and React Router, offering users a smooth and interactive experience. The application features dynamic menu browsing, category-based filtering, real-time cart management, and seamless navigation across pages. Designed with a modern UI and efficient state management, it ensures fast performance, intuitive usability, and a consistent experience across all device types.",
    link: "https://quick-bite-lime.vercel.app/",
    image: p4,
    techStack: ["REACT.JS", "TAILWIND CSS", "REDUX"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white px-6 md:px-16 lg:px-32 py-20 w-full"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-500 font-bebas">My Projects</h2>

        <div className="mt-10 flex flex-col gap-y-20 pl-4">
          {projectsData.map((projectData) => (
            <ProjectCard key={projectData.id} projectData={projectData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
