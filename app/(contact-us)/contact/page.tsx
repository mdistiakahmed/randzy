import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Randzy - Software Engineering Consultation & Support",
  description:
    "Connect with Randzy, a leading Bangladesh-based software engineering team. Explore our consultation services, project support, and global technology solutions.",
  keywords: [
    "software engineering consultation",
    "Bangladesh tech support",
    "international software development",
    "technology project assistance",
    "software engineering services",
  ],
  openGraph: {
    title: "Contact Randzy - Software Engineering Consultation & Support",
    description:
      "Connect with our expert software engineering team for innovative technology solutions.",
    type: "website",
  },
  alternates: {
    canonical: "https://www.randzy.com/contact",
  },
};

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Connect with Randzy Technology Solutions
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Communication Channels
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Email Consultation
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Primary Email:</strong>
                  <Link
                    href="mailto:randzyx62@gmail.com"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    randzyx62@gmail.com
                  </Link>
                </p>
                <p className="text-sm text-gray-600">
                  Typical response time: 24-48 hours
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-6">
              Our Global Presence
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Bangladesh Headquarters
                </h3>
                <p className="text-gray-700">
                  12/3, Kawla Bazar, Dhaka-1229, Bangladesh
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Business Hours: 9:00 AM - 6:00 PM (GMT+6)
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Singapore Regional Office
                </h3>
                <p className="text-gray-700">314 Shunfu Rd, Singapore 570314</p>
                <p className="text-sm text-gray-600 mt-2">
                  Business Hours: 9:00 AM - 6:00 PM (GMT+8)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Our Consultation Process
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <div className="text-4xl mb-4 text-blue-600">📋</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Initial Consultation
            </h3>
            <p className="text-gray-700">
              Free 30-minute discovery call to understand your project
              requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <div className="text-4xl mb-4 text-green-600">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Detailed Analysis
            </h3>
            <p className="text-gray-700">
              Comprehensive project assessment and strategic recommendation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg text-center shadow-md">
            <div className="text-4xl mb-4 text-purple-600">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Custom Solution
            </h3>
            <p className="text-gray-700">
              Tailored software engineering solutions aligned with your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Randzy for Consultation?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Global Expertise
            </h3>
            <p className="text-gray-700">
              Leveraging international experience from Bangladesh and Singapore
              to deliver world-class software solutions.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Customized Approach
            </h3>
            <p className="text-gray-700">
              Every project receives personalized attention, ensuring solutions
              that precisely match your unique requirements.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Last Updated:{" "}
          {new Date("2024-12-14T13:07:13+06:00").toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
