
import React from "react";
import { ArrowRight } from "lucide-react";
import { aboutData } from "../assets/data";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 md:pt-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800">
            SEO + Web Development Experts
          </div>
          <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-navy-950 md:text-6xl">
            We Build and <span className="gradient-heading">Rank</span> Your Online Presence
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 md:text-xl">
            A powerful duo combining expert web development and SEO strategies
            to create high-performing websites that attract and convert visitors.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href="#contact"
              className="btn btn-lg btn-accent flex items-center gap-2"
            >
              Work With Us <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="btn btn-lg btn-outline"
            >
              View Our Work
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {/* Anuj's Bio Card */}
          <div className="flex animate-fade-in flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 overflow-hidden rounded-full">
              <img
                src={aboutData.anuj.image}
                alt={aboutData.anuj.name}
                className="h-28 w-28 object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-navy-950">
              {aboutData.anuj.name}
            </h3>
            <p className="mb-3 text-teal-500">SEO Specialist</p>
            <p className="text-center text-gray-600">
              {aboutData.anuj.experience} experience optimizing websites for search engines and 
              driving organic traffic through proven SEO strategies.
            </p>
          </div>

          {/* Rajat's Bio Card */}
          <div className="flex animate-fade-in flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 overflow-hidden rounded-full">
              <img
                src={aboutData.rajat.image}
                alt={aboutData.rajat.name}
                className="h-28 w-28 object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-navy-950">
              {aboutData.rajat.name}
            </h3>
            <p className="mb-3 text-teal-500">Web Developer</p>
            <p className="text-center text-gray-600">
              {aboutData.rajat.experience} experience building responsive, user-friendly
              websites and applications using modern technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
