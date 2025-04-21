
import React, { useState } from "react";
import { contactData } from "../assets/data";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Show success message (would implement with toast in real app)
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Let's discuss your project and how we can help
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-6 text-xl font-bold text-navy-900">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-teal-100 p-2 text-teal-600">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800">Email</h4>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-gray-600 hover:text-teal-600"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-teal-100 p-2 text-teal-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800">Phone</h4>
                    <a
                      href={`tel:${contactData.phone}`}
                      className="text-gray-600 hover:text-teal-600"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-teal-100 p-2 text-teal-600">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800">Location</h4>
                    <p className="text-gray-600">{contactData.location}</p>
                  </div>
                </div>
              </div>

              <h3 className="mb-4 mt-8 text-xl font-bold text-navy-900">
                Connect With Us
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-navy-800">Anuj</h4>
                    <div className="flex space-x-3">
                      <a
                        href={contactData.social.linkedin.anuj}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-blue-100 p-2 text-blue-600 transition-colors hover:bg-blue-200"
                        aria-label="Anuj's LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={contactData.social.github.anuj}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-100 p-2 text-gray-700 transition-colors hover:bg-gray-200"
                        aria-label="Anuj's GitHub"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-navy-800">Rajat</h4>
                    <div className="flex space-x-3">
                      <a
                        href={contactData.social.linkedin.rajat}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-blue-100 p-2 text-blue-600 transition-colors hover:bg-blue-200"
                        aria-label="Rajat's LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={contactData.social.github.rajat}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gray-100 p-2 text-gray-700 transition-colors hover:bg-gray-200"
                        aria-label="Rajat's GitHub"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md btn-accent w-full"
                >
                  <Phone size={18} className="mr-2" /> WhatsApp Us
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md btn-outline w-full"
                >
                  <Calendar size={18} className="mr-2" /> Book 15-min Discovery Call
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
              <h3 className="mb-6 text-xl font-bold text-navy-900">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg btn-accent w-full md:w-auto"
                >
                  Send Message <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
