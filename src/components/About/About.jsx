import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ProfilePic from "../../assets/profile2.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vh] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am{" "}
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Saddam Syed
          </h2>
          {/* typing animation with skills */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-4 leading-tight">
            <span className="text-cyan-400">I am a </span>
            <Typewriter
              words={[
                "Fullstack Developer",
                "Software Developer",
                "Coder",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          {/* About me Paragraph */}
          <p className="sm:text-lg md:text-lg text-gray-300 text-lg mb-10 mt-8 leading-relaxed">
            I am a passionate Fullstack Developer with expertise in building
            scalable web applications. I love to explore new technologies and
            apply them in my projects. My goal is to create impactful solutions
            that enhance user experiences.
          </p>
          {/* Resume Buttoon  */}
          <a
            href="https://drive.google.com/file/d/1K0dTl5HVL4R6eSOAJojzyGfKYO2D1-bt/view?usp=drive_link"
            className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-600 transition duration-300"
          >
            DOWNLOAD RESUME
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
