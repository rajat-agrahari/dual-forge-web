
import React from "react";
import { projectsData } from "../assets/data";
import { Link, ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Case studies and featured work from our portfolio
          </p>
        </div>

        <div className="mt-16">
          {/* SEO Projects */}
          <div className="mb-20">
            <h3 className="mb-6 text-center text-2xl font-bold text-navy-800 md:text-3xl">
              SEO Case Studies
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
              {projectsData.seo.map((project, index) => (
                <div
                  key={index}
                  className="project-card overflow-hidden rounded-xl bg-white shadow-md"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-60 overflow-hidden md:h-auto">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h4 className="mb-3 text-xl font-bold text-navy-900">
                        {project.title}
                      </h4>
                      <p className="mb-4 text-gray-600">{project.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="mb-2 text-sm font-semibold text-navy-700">
                          Key Results:
                        </h5>
                        <ul className="ml-4 list-disc space-y-1 text-gray-600">
                          {project.results.map((result, idx) => (
                            <li key={idx}>{result}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="mb-2 text-sm font-semibold text-navy-700">
                          Approach:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="mb-2 text-sm font-semibold text-navy-700">
                          Tools Used:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-800"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development Projects */}
          <div>
            <h3 className="mb-6 text-center text-2xl font-bold text-navy-800 md:text-3xl">
              Web Development Projects
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projectsData.web.map((project, index) => (
                <div
                  key={index}
                  className="project-card overflow-hidden rounded-xl bg-white shadow-md"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-2 flex items-center justify-between text-xl font-bold text-navy-900">
                      {project.title}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:text-teal-600"
                          aria-label={`View ${project.title} project`}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </h4>
                    <p className="mb-4 text-gray-600">{project.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="mb-2 text-sm font-semibold text-navy-700">
                        Key Features:
                      </h5>
                      <ul className="ml-4 list-disc space-y-1 text-gray-600">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="mb-2 text-sm font-semibold text-navy-700">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="btn btn-lg btn-accent inline-flex items-center"
          >
            Start Your Project <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
