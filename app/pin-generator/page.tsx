import React from "react";
import { Metadata } from "next";
import PinGenerator from "@/components/PinGenerator";

export const metadata: Metadata = {
  title: "PIN Generator | Secure Random PIN Creation Tool",
  description:
    "Generate secure, random PINs instantly with customizable length. Perfect for passwords, security codes, and personal identification numbers.",
  keywords: [
    "PIN generator",
    "random PIN",
    "secure PIN",
    "password generator",
    "random number generator",
    "digital security",
  ],
  openGraph: {
    title: "PIN Generator - Create Secure Random PINs",
    description:
      "Easily generate secure and random PINs with our user-friendly tool.",
    type: "website",
    url: "https://randzy.com/pin-generator",
    images: [
      {
        url: "/pin-generator.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIN Generator | Secure Random PIN Creation",
    description:
      "Generate secure, random PINs instantly with customizable length.",
    images: ["/pin-generator.png"],
  },
};

export default function PinGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">PIN Generator</h1>
        <p className="text-lg text-blue-600 mb-8">
          Generate secure, random PINs with complete control and privacy!
        </p>

        <div className="flex justify-center mb-8">
          <PinGenerator />
        </div>

        <section className="mt-12 text-left text-gray-700 space-y-6 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-b-2 border-blue-200 pb-2">
            About Our PIN Generator
          </h2>

          <p className="leading-relaxed">
            Our online PIN generator provides a quick, secure way to create
            random Personal Identification Numbers for various purposes. Whether
            you need a PIN for banking, security systems, or personal use, our
            tool ensures randomness and unpredictability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">
                How to Use the PIN Generator
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Select your desired PIN length</li>
                <li>Click &quot;Regenerate&quot; to create a new PIN</li>
                <li>Copy the PIN with a single click</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">
                Why Use Our PIN Generator?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Banking security</li>
                <li>Access control systems</li>
                <li>Two-factor authentication</li>
                <li>Personal identification</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 italic text-gray-600 bg-white p-4 rounded-lg shadow-md">
            🔒 Remember, each PIN is generated using cryptographically secure
            random number generation for maximum unpredictability!
          </p>
        </section>

        <section className="mt-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            The Science of Randomness
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Randomness Explained
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our PIN generator uses advanced algorithms to create truly
                random sequences, ensuring each digit is independently and
                unpredictably chosen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Real-World Applications
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Random PINs are crucial in cybersecurity, preventing predictable
                patterns that could compromise system integrity.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Real-World PIN Generator Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                🏦 Banking & Finance
              </h3>
              <p className="text-gray-700 text-sm">
                Generate temporary ATM PINs, create secure access codes for
                mobile banking, and develop two-factor authentication tokens.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                🔐 Security Systems
              </h3>
              <p className="text-gray-700 text-sm">
                Create unique access codes for home security systems, garage
                doors, digital locks, and restricted area entry points.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                💻 Digital Authentication
              </h3>
              <p className="text-gray-700 text-sm">
                Generate one-time passwords (OTPs), create temporary login
                credentials, and develop secure verification mechanisms.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                🎮 Gaming & Entertainment
              </h3>
              <p className="text-gray-700 text-sm">
                Create unique player access codes, generate random game tokens,
                and develop secure in-game authentication methods.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                📱 Mobile Applications
              </h3>
              <p className="text-gray-700 text-sm">
                Develop temporary access codes for apps, create secure user
                verification processes, and generate unique app-specific
                authentication tokens.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                🏢 Corporate Access Control
              </h3>
              <p className="text-gray-700 text-sm">
                Generate temporary employee access codes, create visitor passes,
                and develop secure workplace authentication systems.
              </p>
            </div>
          </div>

          <p className="mt-6 text-center italic text-gray-600 bg-blue-100 p-4 rounded-lg">
            🌐 Versatility is key: Our PIN generator adapts to diverse security
            needs across multiple domains and industries.
          </p>
        </section>

        <section className="mt-12 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Are the generated PINs truly random?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! We use cryptographically secure random number generation to
                ensure each PIN is completely unpredictable and unique. Our
                algorithm uses advanced entropy sources to create high-quality
                random sequences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                How secure are these PINs?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our generator creates high-entropy PINs that are resistant to
                guessing or systematic prediction. Each PIN is generated using
                cryptographically secure methods, making them ideal for security
                purposes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Can I trust this PIN generator for sensitive applications?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                While our generator is robust, we recommend using it for
                non-critical applications. For high-security scenarios like
                financial systems, always follow specific institutional
                guidelines.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Is my privacy protected when generating PINs?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely! All PIN generation happens entirely client-side in
                your browser. No PINs are stored, logged, or transmitted to any
                server. Your generated PINs remain completely private.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                What makes this different from other PIN generators?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our tool offers unparalleled flexibility with customizable PIN
                lengths, instant generation, and a user-friendly interface. We
                prioritize both randomness and user experience.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center italic text-gray-600 bg-white p-4 rounded-lg shadow-md">
            🔐 Security Tip: Never share your generated PINs and always use them
            responsibly!
          </p>
        </section>
      </main>
    </div>
  );
}
