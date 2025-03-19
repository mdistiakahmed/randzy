import React from "react";
import { Metadata } from "next";
import HashGenerator from "./HashGenerator";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Online Hash Generator | Multi-Algorithm Hashing Tool | Randzy Tools",
  description:
    "Generate hashes online using various algorithms like SHA-256, MD5, CRC32, SHA-1, and more. Perfect for verifying data integrity and security.",
  keywords: [
    "online hash generator",
    "hash generator",
    "SHA-256",
    "MD5",
    "CRC32",
    "SHA-1",
    "cryptographic hash",
    "data integrity",
    "hashing tool",
    "online hashing",
    "hash algorithm",
  ],
  alternates: {
    canonical: "https://www.randzy.com/hash-generator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Online Hash Generator - Multi-Algorithm Hashing Tool",
    description:
      "Generate hashes online using various algorithms like SHA-256, MD5, CRC32, SHA-1, and more. Perfect for verifying data integrity and security.",
    type: "website",
    locale: "en_US",
    siteName: "Randzy",
    images: [
      {
        url: "/hash-generator.PNG",
        width: 1200,
        height: 630,
        alt: "Randzy Online Hash Generator - Multi-Algorithm Hashing Tool",
      },
    ],
    url: `https://www.randzy.com/hash-generator`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Hash Generator",
    description:
      "Generate hashes online using various algorithms like SHA-256, MD5, SHA-1, and more.",
    images: ["/hash-generator.PNG"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Randzy Online Hash Generator",
  url: "https://www.randzy.com/hash-generator",
  description:
    "An interactive online tool to generate hashes using different algorithms, useful for data integrity verification and security purposes.",
  applicationCategory: "Utility",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const CryptoTools = () => {
  return (
    <>
      {/* JSON-LD for Enhanced SEO */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto md:px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-4 md:p-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2 text-gray-800 flex items-center justify-center gap-4">
            <span className="text-2xl lg:text-4xl">🔒</span>
            Hash Generator
          </h1>

          <HashGenerator />

          <section className="p-6 mt-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Table of Contents
            </h2>
            <nav className="space-y-2">
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#whatis">What is a Hash Function?</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#howitworks">How Hashing Works</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#hashingtool">
                  How We Calculate Hash in This Online Hash Generator
                </a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#different-algos">Different Hash Algorithms</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#best-hash-algorithm">
                  What is the Best Hash Algorithm?
                </a>
              </div>
            </nav>
          </section>

          <section id="whatis" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              What is a Hash Function?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              A hash function is a mathematical algorithm that converts an input
              (or &apos;message&apos;) into a fixed-length string of bytes. The
              output, commonly referred to as the hash value or digest, uniquely
              represents the original data but cannot be reversed to retrieve
              the original input.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Hash functions are widely used in cryptography, data integrity
              checks, password storage, and digital signatures. They ensure that
              even a small change in the input results in a drastically
              different hash output, making them useful for security and
              verification.
            </p>
          </section>

          <section id="howitworks" className="py-6 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              How Hashing Works
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              A hash function takes an input string and processes it using a
              mathematical formula to produce a fixed-size output. The key
              properties of a cryptographic hash function include:
            </p>
            <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 leading-relaxed mx-auto">
              <li>
                <strong>Deterministic:</strong> The same input always produces
                the same output.
              </li>
              <li>
                <strong>Fast Computation:</strong> The hash function should
                compute efficiently.
              </li>
              <li>
                <strong>Pre-image Resistance:</strong> Given a hash, it&apos;s
                infeasible to determine the original input.
              </li>
              <li>
                <strong>Collision Resistance:</strong> Two different inputs
                should not produce the same hash.
              </li>
              <li>
                <strong>Small Changes in Input:</strong> Even a slight
                modification in input drastically changes the hash.
              </li>
            </ul>
          </section>

          <section id="hashingtool" className="py-6 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              How We Calculate Hash in This Tool
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              This tool uses JavaScript&apos;s CryptoJS library to generate hash
              values for user-inputted text. You can select different hash
              algorithms like MD5, SHA-1, SHA-256, and SHA-512. Here&apos;s an
              example of how the tool generates a SHA-256 hash:
            </p>
            <pre className="bg-gray-200 p-4 text-wrap rounded-md mt-4 overflow-auto text-sm">
              <code>
                {`
import CryptoJS from "crypto-js";

function generateHash(text) {
return CryptoJS.SHA256(text).toString();
}

console.log(generateHash("Hello, World!"));
`}
              </code>
            </pre>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              The function takes an input string, processes it using SHA-256,
              and returns a hash value.
            </p>
          </section>

          <section id="different-algos" className="py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 leading-tight">
              Different Hash Algorithms
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Hash functions are widely used in cryptography, data integrity
              verification, and digital signatures. Below are some of the most
              common cryptographic hash functions, their features, advantages,
              and limitations.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                1. MD5 (Message Digest Algorithm 5)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                MD5 is one of the oldest hash algorithms, designed by Ronald
                Rivest in 1991. It produces a 128-bit (16-byte) hash value,
                typically represented as a 32-character hexadecimal number.
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  <strong>Speed:</strong> Very fast and efficient in generating
                  hash values.
                </li>
                <li>
                  <strong>Security:</strong> No longer considered secure due to
                  vulnerabilities that allow hash collisions.
                </li>
                <li>
                  <strong>Usage:</strong> Previously used for file integrity
                  checks, digital signatures, and password hashing (now replaced
                  by stronger algorithms).
                </li>
                <li>
                  <strong>Limitation:</strong> Prone to collision attacks (two
                  different inputs can produce the same hash).
                </li>
                <li>
                  <strong>Key Features:</strong> Fixed-length output, one-way
                  function, fast computation.
                </li>
                <li>
                  <strong>Collision Resistance:</strong> Weak, collisions are
                  easily found.
                </li>
                <li>
                  <strong>Practical Implication:</strong> Should not be used for
                  security-sensitive applications.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                2. SHA-1 (Secure Hash Algorithm 1)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SHA-1 was developed by the NSA and published in 1995 as part of
                the Secure Hash Standard (SHS). It generates a 160-bit (20-byte)
                hash value.
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  <strong>Security:</strong> Considered insecure due to
                  collision vulnerabilities discovered in 2005.
                </li>
                <li>
                  <strong>Usage:</strong> Historically used in SSL/TLS
                  certificates, digital signatures, and cryptographic protocols.
                </li>
                <li>
                  <strong>Limitation:</strong> No longer recommended for secure
                  cryptographic use due to collision attacks.
                </li>
                <li>
                  <strong>Key Features:</strong> Fixed-length output, one-way
                  function, slightly slower than MD5.
                </li>
                <li>
                  <strong>Collision Resistance:</strong> Weak, collisions are
                  practically feasible.
                </li>
                <li>
                  <strong>Practical Implication:</strong> Should be phased out
                  and replaced with stronger algorithms.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                3. SHA-256 (Secure Hash Algorithm 256-bit)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SHA-256 is part of the SHA-2 family, designed to replace SHA-1.
                It generates a 256-bit (32-byte) hash value.
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  <strong>Security:</strong> Highly secure, widely used in
                  blockchain technology, cryptographic security, and data
                  integrity verification.
                </li>
                <li>
                  <strong>Usage:</strong> Used in Bitcoin, TLS certificates,
                  password hashing, and digital signatures.
                </li>
                <li>
                  <strong>Limitation:</strong> Slower than MD5 and SHA-1 but
                  significantly more secure.
                </li>
                <li>
                  <strong>Key Features:</strong> Fixed-length output, one-way
                  function, strong collision resistance.
                </li>
                <li>
                  <strong>Collision Resistance:</strong> Strong, practically
                  impossible to find collisions.
                </li>
                <li>
                  <strong>Practical Implication:</strong> Recommended for most
                  security applications.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                4. SHA-512 (Secure Hash Algorithm 512-bit)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SHA-512 is another member of the SHA-2 family, producing a
                512-bit (64-byte) hash value. It is often used in high-security
                applications.
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  <strong>Security:</strong> Even more secure than SHA-256,
                  suitable for environments requiring long-term data protection.
                </li>
                <li>
                  <strong>Usage:</strong> Used in cryptographic applications,
                  high-security encryption systems, and password storage.
                </li>
                <li>
                  <strong>Limitation:</strong> Consumes more processing power
                  and memory compared to SHA-256.
                </li>
                <li>
                  <strong>Key Features:</strong> Fixed-length output, one-way
                  function, very strong collision resistance.
                </li>
                <li>
                  <strong>Collision Resistance:</strong> Very strong, extremely
                  difficult to find collisions.
                </li>
                <li>
                  <strong>Practical Implication:</strong> Used for extremely
                  high-security needs.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                5. CRC-32 (Cyclic Redundancy Check 32-bit)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                CRC-32 is not a cryptographic hash function but rather a
                checksum algorithm used for detecting errors in data
                transmission. It produces a 32-bit hash value.
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  <strong>Security:</strong> Not cryptographically secure,
                  primarily used for error detection.
                </li>
                <li>
                  <strong>Usage:</strong> Used in network protocols (like
                  Ethernet, ZIP files), file integrity verification, and
                  checksums.
                </li>
                <li>
                  <strong>Limitation:</strong> Vulnerable to intentional
                  modification attacks since it is designed for detecting
                  accidental errors rather than providing cryptographic
                  security.
                </li>
                <li>
                  <strong>Key Features:</strong> Fast computation, designed for
                  error detection, not cryptographic security.
                </li>
                <li>
                  <strong>Collision Resistance:</strong> Very weak, collisions
                  are easily found.
                </li>
                <li>
                  <strong>Practical Implication:</strong> Only suitable for
                  detecting accidental data corruption.
                </li>
              </ul>
            </div>
          </section>

          <section
            id="best-hash-algorithm"
            className="py-6 px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6 leading-tight">
              What is the Best Hash Algorithm?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Determining the &quot;best&quot; hash algorithm depends heavily on the
              specific requirements of your application. There is no single
              &quot;best&quot; algorithm for every scenario.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Factors to Consider
              </h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  <strong>Security Requirements:</strong> If security is
                  paramount (e.g., password storage, digital signatures),
                  SHA-256 or SHA-512 are generally recommended.
                </li>
                <li>
                  <strong>Performance Needs:</strong> If speed is critical
                  (e.g., file integrity checks in high-throughput systems),
                  faster but still secure algorithms might be preferred.
                </li>
                <li>
                  <strong>Collision Resistance:</strong> For applications where
                  collisions must be extremely rare (e.g., blockchain), strong
                  collision resistance is essential.
                </li>
                <li>
                  <strong>Application Context:</strong> The specific use case
                  (e.g., data integrity, password hashing, digital signatures)
                  dictates the necessary security and performance trade-offs.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                General Recommendations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For most security-sensitive applications:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  <strong>SHA-256:</strong> A strong and widely supported
                  algorithm suitable for a wide range of security applications.
                </li>
                <li>
                  <strong>SHA-512:</strong> Provides even higher security for
                  applications requiring long-term data protection, at the cost
                  of increased computational overhead.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                For non-cryptographic applications (e.g., data integrity checks
                where security is not a primary concern):
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  <strong>CRC-32:</strong> Suitable for detecting accidental
                  data corruption but not for security purposes.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Avoid:</strong> MD5 and SHA-1 should be avoided for
                security-sensitive applications due to known vulnerabilities.
              </p>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
                The &quot;best&quot; hash algorithm is the one that best meets the
                specific security and performance requirements of your
                application. Always prioritize security when handling sensitive
                data, and stay informed about the latest security
                recommendations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CryptoTools;
