
import React from "react";
import { aboutData } from "../assets/data";
import { Calendar, MapPin, Briefcase, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            Meet the team behind your next successful online project
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Anuj's Profile */}
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <div className="mb-6 md:mb-0">
                <div className="mx-auto overflow-hidden rounded-full md:mx-0">
                  <img
                    src={aboutData.anuj.image}
                    alt={aboutData.anuj.name}
                    className="h-48 w-48 object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-navy-950">
                  {aboutData.anuj.name}
                </h3>
                <p className="mb-4 text-xl text-teal-500">
                  {aboutData.anuj.role}
                </p>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <User size={18} className="mr-2" />
                    <span>{aboutData.anuj.age} years old</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{aboutData.anuj.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={18} className="mr-2" />
                    <span>{aboutData.anuj.experience} of experience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="mb-3 text-lg font-semibold text-navy-800">
                Background
              </h4>
              <p className="text-gray-600">{aboutData.anuj.bio}</p>
              <h4 className="mb-3 mt-6 text-lg font-semibold text-navy-800">
                Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {["On-page SEO", "Off-page SEO", "Technical SEO", "Content strategy", "Keyword research", "Link building"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-800"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <h4 className="mb-3 mt-6 text-lg font-semibold text-navy-800">
                Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Ahrefs", "SEMrush", "GSC", "GA4", "Screaming Frog", "SurferSEO"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Rajat's Profile */}
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <div className="mb-6 md:mb-0">
                <div className="mx-auto overflow-hidden rounded-full md:mx-0">
                  <img
                    src={aboutData.rajat.image}
                    alt={aboutData.rajat.name}
                    className="h-48 w-48 object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-navy-950">
                  {aboutData.rajat.name}
                </h3>
                <p className="mb-4 text-xl text-teal-500">
                  {aboutData.rajat.role}
                </p>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={18} className="mr-2" />
                    <span>{aboutData.rajat.experience} of experience</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>{aboutData.rajat.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-2" />
                    <span>Currently at {aboutData.rajat.company}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="mb-3 text-lg font-semibold text-navy-800">
                Background
              </h4>
              <p className="text-gray-600">{aboutData.rajat.bio}</p>
              <h4 className="mb-3 mt-6 text-lg font-semibold text-navy-800">
                Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Frontend", "Backend", "PHP", "MySQL", "Laravel", "Bootstrap", "RESTful APIs", "Admin Panels"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-800"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <h4 className="mb-3 mt-6 text-lg font-semibold text-navy-800">
                Integration Experience
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Razorpay", "Instamojo", "AdminLTE", "GitHub", "VS Code"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
