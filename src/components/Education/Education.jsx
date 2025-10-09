import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          aria-hidden="true"
          className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 bg-white/30"
        />

        {/* Education Entries */}
        {education.map((edu, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16"
            >
              {/* Timeline Circle */}
              <div
                aria-hidden="true"
                className="absolute left-6 sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden z-20"
              >
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div
                className={[
                  "w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md",
                  "shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]",
                  "ml-16 sm:ml-0", // indent on mobile
                  isEven
                    ? "sm:col-start-2 sm:ml-12 sm:justify-self-start"
                    : "sm:col-start-1 sm:mr-12 sm:justify-self-end",
                  "transform transition-transform duration-300 hover:scale-105",
                ].join(" ")}
              >
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6">
                  {/* School Logo/Image */}
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree, School, Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {edu.school}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">
                  Grade: {edu.grade}
                </p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
