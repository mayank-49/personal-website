import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skills = [
    {
      name: "C++",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "HTML5",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Bootstrap",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git & GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center bg-black text-white px-6 md:px-16 lg:px-32 py-20"
    >
      <div className="w-full max-w-6xl rounded-3xl flex flex-col gap-8">
        {/* Heading */}
        <div className="">
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-500 mb-4">
            Skills
          </h2>
          <p className="text-zinc-500 text-sm md:text-base italic pl-4">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="w-full flex flex-wrap justify-between items-between mt-8">
          {/* Render all skill items here */}
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Little Motivational Line */}
        <div className="w-full">
          <div className="border-l-4 border-yellow-500  ml-4 pl-2 my-6">
            <p className="text-zinc-500 italic text-sm md:text-base font-medium">
              "Always learning. Always building. Always improving."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Now it will trigger every time it comes into view
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
  });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center justify-center py-6 w-[5rem] h-auto md:w-[11rem] md:h-[9rem] rounded-xl transition-all duration-300 hover:scale-105 transform group cursor-pointer "
      initial={{ opacity: 0 }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -50, // Adds a subtle slide-in animation from the left
      }}
      transition={{
        delay: 0.1 * index,
        duration: 0.5,
        type: "spring", // Adds a springy effect
      }}
    >
      {/* Skill Image */}
      <img
        src={skill.image}
        alt={skill.name}
        className={`w-16 h-16 mb-4 object-contain ${skill.name === "Express.js" || skill.name === "Git & GitHub" ? "invert" : ""}`}
      />
      {/* Skill Name (Initially Hidden) */}
      <span className="font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default Skills;
