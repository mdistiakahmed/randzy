import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Randzy Privacy Policy - Commitment to User Data Protection",
  description:
    "Comprehensive privacy policy detailing our commitment to user data protection, browser-based generation, and absolute privacy for random number, PIN, and password tools.",
  keywords: [
    "privacy policy",
    "data protection",
    "browser-based generation",
    "user privacy",
    "no data storage",
    "secure random generation",
  ],
  openGraph: {
    title: "Randzy Privacy Policy - Commitment to User Data Protection",
    description:
      "Learn how we prioritize your privacy with browser-based generation and zero data storage.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.randzy.com/privacy",
  },
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy and Data Protection
        </h1>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Privacy Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Randzy, we are deeply committed to protecting your privacy. Our
              core principle is simple: we do not store any user-generated data,
              passwords, or random numbers on our servers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Browser-Based Generation: Your Ultimate Privacy Shield
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4 text-blue-600">🔒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Local Generation
            </h3>
            <p className="text-gray-700">
              All random numbers, PINs, and passwords are generated directly in
              your browser using cryptographically secure methods.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4 text-green-600">🚫</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              No Server Storage
            </h3>
            <p className="text-gray-700">
              Zero data is transmitted to or stored on our servers. Your
              generated content remains entirely private.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4 text-purple-600">🧠</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Client-Side Processing
            </h3>
            <p className="text-gray-700">
              All computational processes occur within your browser, ensuring
              maximum privacy and security.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Detailed Privacy Guarantees
        </h2>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Random Number Generation
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Generated using Web Crypto API</li>
              <li>Cryptographically secure random generation</li>
              <li>No trace left on any server</li>
              <li>Immediate disposal after generation</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Password Generation
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Generated entirely in the browser</li>
              <li>Uses advanced randomization techniques</li>
              <li>No password is ever stored or logged</li>
              <li>Instant generation and disposal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Transparency Pledge
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Open Source Commitment
            </h3>
            <p className="text-gray-700">
              Our privacy mechanisms are transparent and can be independently
              verified by security experts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Continuous Improvement
            </h3>
            <p className="text-gray-700">
              We continuously update our privacy and security measures to
              protect user data.
            </p>
          </div>
        </div>
      </section>

      {/* GDPR and CCPA Compliance Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Global Privacy Compliance
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              GDPR Compliance
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No personal data collection or storage</li>
              <li>Transparent privacy practices</li>
              <li>User rights respected and protected</li>
              <li>No cross-border data transfers</li>
              <li>Immediate data disposal mechanism</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              CCPA Compliance
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Zero personal information retention</li>
              <li>No selling or sharing of user data</li>
              <li>Complete transparency in data handling</li>
              <li>Browser-based processing only</li>
              <li>User control and privacy guaranteed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics and Tracking Transparency Section */}
      <section className="bg-gray-50 shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Analytics and Tracking Transparency
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-4 text-left text-gray-800">Service</th>
                <th className="p-4 text-left text-gray-800">Data Collected</th>
                <th className="p-4 text-left text-gray-800">Privacy Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 text-gray-700">Google Analytics</td>
                <td className="p-4 text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>Page views</li>
                    <li>Device type</li>
                    <li>Approximate location</li>
                  </ul>
                </td>
                <td className="p-4 text-green-700">
                  Anonymized, no personal identification
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 text-gray-700">Google Search Console</td>
                <td className="p-4 text-gray-700">
                  <ul className="list-disc list-inside">
                    <li>Search queries</li>
                    <li>Click-through rates</li>
                    <li>Indexing performance</li>
                  </ul>
                </td>
                <td className="p-4 text-green-700">
                  Aggregated, non-personal data
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700">
            We use minimal, anonymized tracking to improve user experience and
            site performance. No personally identifiable information is ever
            collected or stored.
          </p>
        </div>
      </section>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Last Updated:{" "}
          {new Date("2024-12-14T13:10:44+06:00").toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
