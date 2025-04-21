
import React from "react";
import { contactData } from "../assets/data";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container mx-auto py-12 px-4 md:py-16 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="md:col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-bold text-white">
              Anuj<span className="text-teal-500">&</span>Rajat
            </a>
            <p className="mt-4 text-gray-300">
              We combine web development expertise with SEO strategies to create high-performing websites that attract and convert visitors.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href={`mailto:${contactData.email}`}
                className="rounded-full bg-navy-800 p-2 text-gray-300 transition-colors hover:bg-navy-700 hover:text-white"
                aria-label="Email us"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${contactData.phone}`}
                className="rounded-full bg-navy-800 p-2 text-gray-300 transition-colors hover:bg-navy-700 hover:text-white"
                aria-label="Call us"
              >
                <Phone size={18} />
              </a>
              <a
                href={contactData.social.linkedin.anuj}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy-800 p-2 text-gray-300 transition-colors hover:bg-navy-700 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={contactData.social.github.rajat}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-navy-800 p-2 text-gray-300 transition-colors hover:bg-navy-700 hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Services", "Skills", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 transition-colors hover:text-teal-400"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "SEO Services",
                "E-commerce Solutions",
                "Custom Dashboards",
                "Technical SEO",
                "Content Strategy",
                "Local SEO",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 transition-colors hover:text-teal-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <p className="mb-2 text-gray-300">{contactData.location}</p>
            <p className="mb-2">
              <a
                href={`mailto:${contactData.email}`}
                className="text-gray-300 transition-colors hover:text-teal-400"
              >
                {contactData.email}
              </a>
            </p>
            <p className="mb-4">
              <a
                href={`tel:${contactData.phone}`}
                className="text-gray-300 transition-colors hover:text-teal-400"
              >
                {contactData.phone}
              </a>
            </p>
            <a
              href="#contact"
              className="btn btn-md bg-teal-500 text-white hover:bg-teal-600"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-navy-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Anuj & Rajat. All rights reserved. 
          </p>
          <p className="mt-2 text-sm">
            Web Development & SEO Services in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
