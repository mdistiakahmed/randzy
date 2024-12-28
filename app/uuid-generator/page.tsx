import UUIDGenerator from "@/components/UUIDGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generator | Create, Validate & Convert UUIDs Online",
  description:
    "Free online UUID generator tool. Generate, validate, and convert UUIDs (v1-v7). Perfect for developers, database design, and unique identifier creation.",
  keywords: [
    "UUID generator",
    "Universally Unique Identifier",
    "UUID v4",
    "UUID v7",
    "UUID validator",
    "online UUID tool",
  ],
  openGraph: {
    title: "UUID Generator - Create & Validate Unique Identifiers",
    description:
      "Powerful online tool to generate, validate, and convert UUIDs for developers and tech professionals.",
    type: "website",
    images: [
      {
        url: "/uuid.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID Generator Tool",
    description: "Generate, validate, and convert UUIDs with ease",
    images: [
      {
        url: "/uuid.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function UUIDGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">
          UUID Generator
        </h1>
        <p className="text-lg text-blue-600 mb-8 max-w-2xl mx-auto">
          Generate, convert, and validate Universally Unique Identifiers (UUIDs)
          across different versions with precision and ease.
        </p>

        <div className="flex justify-center mb-8">
          <UUIDGenerator />
        </div>

        {/* UUID Version 4 Explanation Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-500 pb-3">
                What is UUID Version 4?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                UUID Version 4 is a randomly generated universally unique
                identifier. Unlike other versions, v4 UUIDs are created using
                cryptographically strong random numbers, ensuring virtually no
                chance of collision.
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✦</span>
                  Purely random generation method
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✦</span>
                  128-bit identifier with extremely low collision probability
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✦</span>
                  Widely used in software development and distributed systems
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                UUID v4 Example
              </h3>
              <code className="block bg-gray-100 p-4 rounded-lg text-sm break-words">
                f47ac10b-58cc-4372-a567-0e02b2c3d479
              </code>
            </div>
          </div>
        </section>

        {/* UUID Version 7 Explanation Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                UUID v7 Example
              </h3>
              <code className="block bg-gray-100 p-4 rounded-lg text-sm break-words">
                018c5d27-d8b2-7b4a-a5f0-48b5a1e3f4c2
              </code>
            </div>
            <div className="order-1 md:order-2 text-left">
              <h2 className="text-3xl font-bold text-green-900 mb-6 border-b-4 border-green-500 pb-3">
                What is UUID Version 7?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                UUID Version 7 is a time-ordered unique identifier that combines
                timestamp information with random data. It provides improved
                sorting and indexing capabilities compared to previous versions.
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✦</span>
                  Timestamp-based generation method
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✦</span>
                  Improved database performance and indexing
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✦</span>
                  Maintains high uniqueness guarantee
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real-World UUID Use Cases Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 border-b-4 border-indigo-500 pb-3 text-center">
            Real-World Applications of UUIDs
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {/* Database Management Use Case */}
            <div className="bg-white p-6 rounded-xl shadow-md transform transition hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 text-indigo-600">💾</span>
                <h3 className="text-2xl font-semibold text-indigo-800">
                  Database Management
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                UUIDs provide unique, globally unique identifiers for database
                records, eliminating primary key conflicts across distributed
                systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">✦</span>
                  Prevent primary key collisions
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">✦</span>
                  Support for distributed databases
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-indigo-500">✦</span>
                  Seamless data replication
                </li>
              </ul>
            </div>

            {/* Microservices Architecture Use Case */}
            <div className="bg-white p-6 rounded-xl shadow-md transform transition hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 text-green-600">🌐</span>
                <h3 className="text-2xl font-semibold text-green-800">
                  Microservices Architecture
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                In distributed systems, UUIDs enable unique identification of
                services, transactions, and events across multiple independent
                services.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✦</span>
                  Unique service instance tracking
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✦</span>
                  Distributed transaction tracking
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✦</span>
                  Event sourcing and logging
                </li>
              </ul>
            </div>

            {/* Web Application Use Case */}
            <div className="bg-white p-6 rounded-xl shadow-md transform transition hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 text-purple-600">🌟</span>
                <h3 className="text-2xl font-semibold text-purple-800">
                  Web Application Development
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                UUIDs are crucial for generating unique identifiers for users,
                sessions, and resources in modern web applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">✦</span>
                  User session management
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">✦</span>
                  Authentication tokens
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">✦</span>
                  Resource identification
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-indigo-100 p-6 rounded-xl text-center">
            <p className="text-lg text-indigo-900 mb-4">
              🚀 Empowering Modern Software Architecture
            </p>
            <p className="text-md text-gray-700 italic max-w-3xl mx-auto">
              UUIDs are more than just identifiers. They are the backbone of
              scalable, distributed, and secure software systems, enabling
              seamless integration and communication across diverse
              technological landscapes.
            </p>
          </div>
        </section>

        {/* Privacy and Security Section */}
        <section className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-purple-900 mb-6 border-b-4 border-purple-500 pb-3 text-center">
            Privacy and Security Commitment
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                  🔒 Data Protection Principles
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-xl text-purple-500">✦</span>
                    <div>
                      <strong>Zero Server Storage</strong>
                      <p className="text-sm text-gray-600">
                        All UUID generations occur entirely in your browser. No
                        data is transmitted or stored on our servers.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl text-purple-500">✦</span>
                    <div>
                      <strong>Client-Side Generation</strong>
                      <p className="text-sm text-gray-600">
                        UUIDs are generated using Web Crypto API, ensuring
                        cryptographically secure random number generation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl text-purple-500">✦</span>
                    <div>
                      <strong>Instant Disposal</strong>
                      <p className="text-sm text-gray-600">
                        Generated UUIDs are not cached or saved. They exist only
                        for your immediate use.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-purple-800 mb-4 border-b-2 border-purple-200 pb-2">
                  🛡️ Security Guarantees
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-xl text-purple-500">✦</span>
                    <div>
                      <strong>Cryptographic Randomness</strong>
                      <p className="text-sm text-gray-600">
                        Utilizes industry-standard cryptographically secure
                        random number generation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl text-purple-500">✦</span>
                    <div>
                      <strong>No Tracking</strong>
                      <p className="text-sm text-gray-600">
                        We do not use cookies, analytics, or any tracking
                        mechanisms on this tool.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl text-purple-500">✦</span>
                    <div>
                      <strong>Open Source Transparency</strong>
                      <p className="text-sm text-gray-600">
                        Our generation methods are transparent and can be
                        verified by examining the source code.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-purple-100 p-6 rounded-xl text-center">
              <p className="text-lg text-purple-900 mb-4">
                🌐 Your Digital Identity, Completely Confidential
              </p>
              <p className="text-md text-gray-700 italic max-w-3xl mx-auto">
                We believe in empowering developers with tools that respect
                privacy. Every UUID generated is a testament to our commitment
                to secure, transparent, and user-centric technology.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
