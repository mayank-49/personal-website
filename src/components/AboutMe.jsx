import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="min-h-screen w-full flex items-center justify-center bg-black text-white px-6 md:px-16 lg:px-32 py-20"
    >
      <div className="w-full max-w-6xl rounded-3xl flex flex-col gap-4 bg-black ">
        {/* Heading */}
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 text-blue-500">
            About Me
          </h2>
          <p className="text-md md:text-xl font-semibold text-zinc-500 pl-4">
            B.Tech in Artificial Intelligence & Data Science
          </p>
          <div className="flex flex-wrap items-center gap-1 md:gap-2 lg:gap-3 text-blue-500 font-medium text-md mt-2 pl-4">
            <span>ADGIPS</span>
            <span>•</span>
            <span>2022–2026</span>
            <span>•</span>
            <span>SGPA: 8.8</span>
          </div>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="border-l-4 border-yellow-500 ml-4 pl-2 my-4">
            <p className="text-zinc-500 italic text-sm md:text-base font-medium ">
              "I code, I solve, I innovate – and yes, I probably broke something
              along the way."
            </p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-slate-200 text-sm md:text-base leading-relaxed tracking-normal ml-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <p>
            Hi, I'm <strong className="text-blue-500">Mayank Kumar</strong>, a
            passionate <strong>MERN Stack Developer</strong> with hands-on
            experience in both frontend and backend development. I enjoy
            building modern, scalable, and high-performance web applications
            that combine intuitive user interfaces with robust server-side
            architecture. I focus on writing clean, maintainable code and
            developing solutions that deliver seamless user experiences.
          </p>

          <br />

          <p>
            My technical expertise includes <strong>JavaScript (ES6+)</strong>,
            <strong> React.js</strong>, <strong>Next.js</strong>,
            <strong> Node.js</strong>, <strong>Express.js</strong>,
            <strong> MongoDB</strong>, <strong>HTML5</strong>,
            <strong> CSS3</strong>, <strong>Tailwind CSS</strong>,
            <strong> Bootstrap</strong>, <strong>Redux Toolkit</strong>,
            <strong> Git</strong>, <strong>GitHub</strong>, and
            <strong> RESTful APIs</strong>. I have experience building
            responsive user interfaces, developing reusable components,
            implementing authentication systems, integrating APIs, managing
            databases, and creating full-stack applications from concept to
            deployment.
          </p>

          <br />

          <p>
            I am passionate about solving real-world problems through technology
            and continuously expanding my knowledge of modern web development. I
            enjoy learning new frameworks, exploring best practices, and
            building innovative, scalable applications that prioritize
            performance, accessibility, security, and exceptional user
            experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
