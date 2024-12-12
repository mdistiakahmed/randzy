import React from "react";
import { Metadata } from "next";
import RandomStringGenerator from "@/components/RandomStringGenerator";

export const metadata: Metadata = {
  title: "Random String Generator | Secure String Creation Tool",
  description:
    "Generate secure, random strings instantly with customizable length and character sets. Perfect for passwords, tokens, and unique identifiers.",
  keywords: [
    "random string generator",
    "secure string",
    "password generator",
    "random text generator",
    "digital security",
  ],
  openGraph: {
    title: "Random String Generator - Create Secure Random Strings",
    description:
      "Easily generate secure and random strings with our user-friendly tool.",
    type: "website",
    images: [
      {
        url: "/random-string.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random String Generator | Secure String Creation",
    description:
      "Generate secure, random strings instantly with customizable length.",
    images: ["/random-string.png"],
  },
};

export default function RandomStringPage() {
  return (
    <div className="container mx-auto py-8 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">
          Random String Generator
        </h1>
        <p className="text-lg text-blue-600 mb-8">
          Generate secure, random strings with complete control and privacy!
        </p>

        <div className="flex justify-center mb-8">
          <RandomStringGenerator />
        </div>

        <section className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 mb-6 border-b-2 border-blue-200 pb-4">
            Understanding Random String Generation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-800">
              <p className="leading-relaxed text-lg">
                Random string generation is a sophisticated process that goes
                beyond simple character randomization. It&apos;s a critical technique
                used in cryptography, software development, and digital security
                to create unpredictable and unique character sequences.
              </p>
              <div className="bg-white p-5 rounded-lg border-2 border-blue-200 shadow-md">
                <h3 className="text-2xl font-semibold text-blue-800 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-blue-600"
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
                  Core Principles
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Cryptographically secure generation</li>
                  <li>Uniform statistical distribution</li>
                  <li>High entropy and unpredictability</li>
                  <li>Zero predictive patterns</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-200 shadow-md">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 01-4.176-4.176l-.477-2.387a2 2 0 00-.547-1.022L6.414 4.414a2 2 0 00-2.828 0L3 4.586a2 2 0 00-.586 1.414V16a2 2 0 002 2h11a2 2 0 001.414-.586l.586-.586a2 2 0 000-2.828z"
                  />
                </svg>
                Advanced Generation Techniques
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <h4 className="font-semibold text-blue-700">
                    Entropy Sources
                  </h4>
                  <p className="text-sm">
                    Leveraging system randomness, hardware signals, and
                    cryptographic algorithms
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">
                    Character Set Customization
                  </h4>
                  <p className="text-sm">
                    Flexible selection of character types for tailored string
                    generation
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700">
                    Pseudo-Random Generation
                  </h4>
                  <p className="text-sm">
                    Using advanced mathematical algorithms to ensure true
                    randomness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 mb-6 border-b-2 border-purple-200 pb-4">
            The Fascinating Science of Randomness
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-800">
              <p className="leading-relaxed text-lg">
                Randomness is not mere chaos, but a complex mathematical
                phenomenon that lies at the intersection of probability,
                information theory, and computational science.
              </p>
              <div className="bg-white p-5 rounded-lg border-2 border-purple-200 shadow-md">
                <h3 className="text-2xl font-semibold text-purple-800 mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Entropy and Unpredictability
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Measure of inherent uncertainty</li>
                  <li>Quantifies information content</li>
                  <li>Determines true randomness</li>
                  <li>Prevents pattern prediction</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-purple-200 shadow-md">
              <h3 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
                Computational Randomness Techniques
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <h4 className="font-semibold text-purple-700">
                    Cryptographic Algorithms
                  </h4>
                  <p className="text-sm">
                    Advanced mathematical transformations that generate
                    statistically random sequences
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">
                    Quantum Randomness
                  </h4>
                  <p className="text-sm">
                    Leveraging fundamental quantum mechanical principles for
                    true randomness
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700">
                    Pseudo-Random Generation
                  </h4>
                  <p className="text-sm">
                    Sophisticated algorithms that simulate randomness through
                    complex mathematical models
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-5 rounded-lg border-2 border-purple-200 shadow-md">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              The Mathematics Behind Randomness
            </h3>
            <p className="text-gray-700 leading-relaxed">
              True randomness challenges our understanding of predictability.
              It&apos;s not just about generating unpredictable numbers, but about
              creating sequences that defy pattern recognition, statistical
              bias, and computational prediction.
            </p>
          </div>
        </section>

        <section className="mt-12 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Real-World Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                🔐 Cybersecurity
              </h3>
              <p className="text-gray-700 text-sm">
                Generate secure temporary passwords, API keys, and
                authentication tokens with high entropy.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                🧪 Software Testing
              </h3>
              <p className="text-gray-700 text-sm">
                Create diverse test data, unique identifiers, and simulate
                random user inputs for robust testing.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                💻 Development
              </h3>
              <p className="text-gray-700 text-sm">
                Generate unique database keys, session identifiers, and random
                configuration values.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                🎲 Gaming & Simulation
              </h3>
              <p className="text-gray-700 text-sm">
                Create random game elements, procedural generation, and
                unpredictable scenarios.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Are the generated strings truly random?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! We use cryptographically secure random generation to ensure
                each string is completely unpredictable and unique. Our
                algorithm leverages advanced entropy sources to create
                high-quality random sequences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                How customizable are the string generations?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Extremely customizable! You can control string length, choose
                character types (uppercase, lowercase, numbers, symbols), and
                even generate word-like strings or single continuous strings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                What can I use these random strings for?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Random strings are versatile: create passwords, generate unique
                identifiers, develop test data, create temporary tokens, or use
                in scenarios requiring unpredictable text generation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Is my privacy protected during string generation?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely! All string generation happens entirely client-side
                in your browser. No generated strings are stored, logged, or
                transmitted to any server. Your generated content remains
                completely private.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
