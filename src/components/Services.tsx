
import React from "react";
import { servicesData } from "../assets/data";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="bg-navy-950 py-16 text-white md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-300 md:text-2xl">
            Comprehensive web development and SEO solutions
          </p>
        </div>

        {/* Web Development Services */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-teal-400 md:text-3xl">
            Web Development
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.web.map((service, index) => (
              <div
                key={index}
                className="rounded-xl bg-navy-900 p-6 transition-all duration-300 hover:bg-navy-800"
              >
                <div className="mb-4 inline-flex rounded-lg bg-teal-900/30 p-3 text-teal-400">
                  <service.icon size={24} />
                </div>
                <h4 className="mb-3 text-lg font-bold text-white">
                  {service.title}
                </h4>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Services */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-teal-400 md:text-3xl">
            SEO Services
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.seo.map((service, index) => (
              <div
                key={index}
                className="rounded-xl bg-navy-900 p-6 transition-all duration-300 hover:bg-navy-800"
              >
                <div className="mb-4 inline-flex rounded-lg bg-teal-900/30 p-3 text-teal-400">
                  <service.icon size={24} />
                </div>
                <h4 className="mb-3 text-lg font-bold text-white">
                  {service.title}
                </h4>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Combined Packages */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-teal-400 md:text-3xl">
            Website + SEO Packages
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {servicesData.packages.map((pkg, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-gradient-to-b from-navy-900 to-navy-800"
              >
                <div className="border-b border-navy-700 bg-navy-950/30 p-6">
                  <h4 className="mb-2 text-xl font-bold text-white">
                    {pkg.title}
                  </h4>
                  <p className="mb-4 text-gray-300">{pkg.description}</p>
                  <div className="text-xl font-bold text-teal-400">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 font-semibold text-gray-100">Includes:</h5>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check
                          size={18}
                          className="mr-2 mt-1 flex-shrink-0 text-teal-400"
                        />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="btn btn-lg bg-white text-navy-950 hover:bg-gray-100"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
