import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Center vertical line (left on mobile, center on sm+) */}
        <div
          aria-hidden="true"
          className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 bg-white/30"
        />

        {/* Timeline Items */}
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16"
            >
              {/* Timeline Circle (centered on the line, vertically centered to card) */}
              <div
                aria-hidden="true"
                className="absolute left-6 sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden z-20"
              >
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Card */}
              <div
                className={[
                  "w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md",
                  "shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]",
                  // Mobile: indent to clear the left-side line & circle
                  "ml-16 sm:ml-0",
                  // Desktop: alternate sides with spacing away from the center line
                  isEven
                    ? "sm:col-start-2 sm:ml-12 sm:justify-self-start"
                    : "sm:col-start-1 sm:mr-12 sm:justify-self-end",
                  "transform transition-transform duration-300 hover:scale-105",
                ].join(" ")}
              >
                {/* Header: logo + text */}
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={experience.img}
                      alt={`${experience.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {experience.role}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {experience.company}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {experience.date}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400">{experience.desc}</p>

                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
