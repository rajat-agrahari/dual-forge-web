
import React from "react";
import { blogData } from "../assets/data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title">Blog & Resources</h2>
          <p className="section-subtitle">
            Latest articles, guides, and tutorials
          </p>
        </div>

        <div className="mt-16">
          {/* SEO Articles */}
          <div className="mb-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-navy-800">
              SEO Insights by Anuj
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogData.seo.map((post, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="mb-3 text-lg font-bold text-navy-900">
                      {post.title}
                    </h4>
                    <p className="mb-4 text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mb-4 flex items-center text-sm text-gray-500">
                      <div className="mr-4 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-teal-600 hover:text-teal-700"
                    >
                      Read More <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development Tutorials */}
          <div>
            <h3 className="mb-8 text-center text-2xl font-bold text-navy-800">
              Web Development by Rajat
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogData.dev.map((post, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-navy-100 px-3 py-1 text-xs text-navy-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="mb-3 text-lg font-bold text-navy-900">
                      {post.title}
                    </h4>
                    <p className="mb-4 text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mb-4 flex items-center text-sm text-gray-500">
                      <div className="mr-4 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-navy-600 hover:text-navy-700"
                    >
                      Read More <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn btn-lg btn-outline">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
