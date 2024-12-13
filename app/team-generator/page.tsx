import React from "react";
import { Metadata } from "next";
import TeamGenerator from "@/components/TeamGenerator";

export const metadata: Metadata = {
  title: "Team Generator | Random Team Creation Tool",
  description:
    "Create fair and balanced teams instantly. Perfect for sports, classrooms, group projects, and team-building activities. Easy-to-use random team allocation.",
  keywords: [
    "team generator",
    "random team creator",
    "team allocation",
    "fair team division",
    "group randomizer",
    "team building",
    "sports team picker",
  ],
  openGraph: {
    title: "Team Generator - Fair and Random Team Creation",
    description:
      "Instantly create balanced teams with our interactive team generator. Great for sports, education, and group activities.",
    type: "website",
    images: [
      {
        url: "/team-generator.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Generator | Random Team Allocation",
    description:
      "Create fair teams in seconds with our random team generator tool.",
    images: ["/team-generator.png"],
  },
};

export default function TeamGeneratorPage() {
  return (
    <div className="container mx-auto pt-2 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full mx-auto text-center">
        <h1 className="text-3xl font-bold mb-3 text-blue-800">
          Team Generator
        </h1>
        <p className="text-lg text-blue-600 mb-2">
          Create balanced and fair teams with a single click!
        </p>

        <div className="flex justify-center mb-8">
          <TeamGenerator />
        </div>

        <section className="mt-12 text-left text-gray-700 space-y-6 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-500 pb-3">
                What is a Team Generator?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A team generator is a powerful digital tool designed to create
                balanced and fair teams randomly. Whether for sports, education,
                or professional settings, our tool ensures equitable team
                distribution with just a few clicks.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Key Features
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Random team allocation</li>
                  <li>Customizable team sizes</li>
                  <li>Support for large participant lists</li>
                  <li>Instant team generation</li>
                  <li>No registration required</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                Why Use Our Team Generator?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-3 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <h4 className="font-semibold text-blue-800">
                    Fair Selection
                  </h4>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-3 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <h4 className="font-semibold text-green-800">Quick & Easy</h4>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-3 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="font-semibold text-purple-800">Flexible</h4>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-3 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="font-semibold text-red-800">100% Free</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
              Technical Transparency
            </h3>
            <p className="text-gray-600 text-center">
              Our team generator uses advanced JavaScript algorithms to create
              truly random and balanced team allocations, ensuring fair
              distribution across multiple teams.
            </p>
          </div>

          <div className="text-center bg-blue-100 p-4 rounded-lg">
            <p className="text-blue-800 font-medium italic">
              Bringing fairness and excitement to team formation since 2024!
            </p>
          </div>
        </section>

        <section className="mt-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Real-Life Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Sports & Athletics
              </h3>
              <p className="text-gray-600">
                Create balanced teams for: - Pickup games - School sports - Team
                training sessions
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Education
              </h3>
              <p className="text-gray-600">
                Perfect for: - Group projects - Classroom activities - Academic
                competitions
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">
                Corporate & Events
              </h3>
              <p className="text-gray-600">
                Ideal for: - Team-building exercises - Workshop divisions -
                Company events
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                How are teams generated?
              </h3>
              <p className="text-gray-600">
                Our algorithm ensures balanced team distribution by randomly
                allocating participants while maintaining fairness across teams.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Can I customize team sizes?
              </h3>
              <p className="text-gray-600">
                Yes! You can specify the number of teams or team size, and our
                tool will automatically distribute participants accordingly.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Is the team generation truly random?
              </h3>
              <p className="text-gray-600">
                Absolutely. We use cryptographically secure random generation to
                ensure unbiased and unpredictable team formations.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center bg-blue-100 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Ready to Create Perfect Teams?
          </h2>
          <p className="text-xl text-blue-700 mb-6">
            Start generating balanced teams now and make group activities fair
            and fun!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#team-generator"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Generate Teams
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
