
import React from "react";
import { skillsData } from "../assets/data";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">
            Our expertise and the technologies we use
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Anuj's Skills */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold text-navy-800">
              SEO Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
              {skillsData.anuj.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-md"
                >
                  <div className="mb-3 rounded-full bg-teal-100 p-3 text-teal-700">
                    <skill.icon size={24} />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Rajat's Skills */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold text-navy-800">
              Development Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
              {skillsData.rajat.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-md"
                >
                  <div className="mb-3 rounded-full bg-navy-100 p-3 text-navy-700">
                    <skill.icon size={24} />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-navy-800">
            Tools We Use
          </h3>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skillsData.tools.map((tool, index) => (
              <div
                key={index}
                className={`skill-card rounded-lg ${
                  tool.type === "seo"
                    ? "bg-teal-50 text-teal-800"
                    : "bg-navy-50 text-navy-800"
                } p-4 text-center shadow-sm`}
              >
                <span className="text-sm font-medium">{tool.name}</span>
                <div className="mt-2 text-xs text-gray-500">
                  {tool.type === "seo" ? "SEO Tool" : "Dev Tool"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
