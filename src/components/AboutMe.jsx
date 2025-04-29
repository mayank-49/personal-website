import React from "react";
import {motion}  from "framer-motion";

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
            <span>SGPA: 8.6</span>
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
            passionate and creative Frontend Developer with a strong foundation
            in modern web technologies. I specialize in building responsive and
            engaging websites using <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong>, <strong>React.js</strong>, and
            <strong>Next.js</strong>.
          </p>

          <br />

          <p>
            With hands-on experience in frameworks like{" "}
            <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong>, as well
            as backend basics with <strong>Node.js</strong> and <strong>APIs</strong>, I strive to deliver visually appealing, functional, and user-focused
            digital experiences.
          </p>

          <br />

          <p>
            Currently diving deeper into the <strong>MERN stack</strong>, I am
            building full-stack projects that combine clean UI design with
            robust backend systems — aiming to create impactful solutions that
            blend performance with creativity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
