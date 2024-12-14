import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Learn more about Randzy team",
  description:
    "Discover the story behind our innovative software engineering team from Bangladesh.",
  openGraph: {
    title: "About Us - Learn more about Randzy team",
    description:
      "Discover the story behind our innovative software engineering team from Bangladesh.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.randzy.com/about",
  },
};

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Our Journey in Software Engineering
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in the vibrant tech ecosystem of Bangladesh, our team
              represents the cutting edge of software engineering innovation. We
              are a group of passionate developers, designers, and
              problem-solvers committed to transforming complex challenges into
              elegant technological solutions.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 300"
              className="w-full h-auto max-w-md rounded-lg shadow-md"
            >
              <title>Randzy Software Engineering Team Illustration</title>
              <rect width="100%" height="100%" fill="#f0f9ff" />
              <circle cx="200" cy="150" r="100" fill="#3b82f6" opacity="0.2" />
              <g transform="translate(100, 50)">
                <path
                  d="M50 0 L100 80 L0 80 Z"
                  fill="#2563eb"
                  transform="rotate(45 50 40)"
                />
                <rect x="30" y="120" width="40" height="60" fill="#1e40af" />
                <circle cx="50" cy="200" r="10" fill="#60a5fa" />
              </g>
              <text
                x="200"
                y="280"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="12"
                fill="#6b7280"
              >
                Innovative Technology Solutions
              </text>
            </svg>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Mission and Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Mission
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To empower businesses and individuals through innovative software
              solutions that drive digital transformation. We believe in
              leveraging technology to solve real-world problems and create
              meaningful impact.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Vision</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To be recognized globally as a leading software engineering team
              that consistently delivers high-quality, innovative solutions that
              push the boundaries of technological possibilities.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Web Development
            </h3>
            <p className="text-gray-700">
              Cutting-edge web applications using modern frameworks like
              Next.js, React, and Node.js
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Mobile Solutions
            </h3>
            <p className="text-gray-700">
              Cross-platform mobile app development with React Native and
              Flutter
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Cloud Engineering
            </h3>
            <p className="text-gray-700">
              Scalable cloud solutions using AWS, Google Cloud, and Azure
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Story and Background
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Company Origins
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Randzy was born from a shared passion for technology and
              innovation. Founded by a group of software engineers in
              Bangladesh, our company emerged from the desire to create
              meaningful technological solutions that bridge local talent with
              global opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Our Achievements
            </h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>Recognized as a top emerging tech startup in Bangladesh</li>
              <li>Delivered successful projects for international clients</li>
              <li>Maintained a 98% client satisfaction rate</li>
              <li>Contributed to open-source projects and tech community</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Commitment
        </h2>

        <div className="text-center">
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
            As Bangladesh-based software engineers, we are committed to
            excellence, continuous learning, and delivering solutions that
            exceed expectations. Our diverse team brings together unique
            perspectives and skills to create technology that makes a
            difference.
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg inline-block">
              <p className="text-sm text-gray-700">
                🌐 Bridging Technology and Innovation
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Connect With Our Team
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Last Updated:{" "}
              {new Date("2024-12-14T13:00:14+06:00").toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
