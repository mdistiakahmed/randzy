import { Metadata } from "next";
import Script from "next/script";

import EncryptionDecryptionWrapper from "./EncryptionDecryptionWrapper";

export const metadata: Metadata = {
  title: "🔓 Encryption & Decryption Tool | Online Secure Data Protection | Randzy Tools",
  description:
    "Encrypt and decrypt your data securely online with various algorithms like AES, RSA, and DES. Protect your sensitive information with our free and easy-to-use tool.",
  keywords: [
    "encryption tool",
    "decryption tool",
    "online encryption",
    "online decryption",
    "AES encryption",
    "RSA encryption",
    "DES encryption",
    "data security",
    "secure data",
    "encrypt data",
    "decrypt data",
    "cryptography",
  ],
  alternates: {
    canonical: "https://www.randzy.com/encrypt-decrypt", // Replace with your actual URL
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
    title: "🔓 Encryption & Decryption Tool - Online Secure Data Protection",
    description:
      "Encrypt and decrypt your data securely online with various algorithms like AES, RSA, and DES. Protect your sensitive information with our free and easy-to-use tool.",
    type: "website",
    locale: "en_US",
    siteName: "Randzy",
    images: [
      {
        url: "/encryption-decryption.PNG", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Randzy Encryption & Decryption Tool - Secure Your Data Online",
      },
    ],
    url: `https://www.randzy.com/encrypt-decrypt`, // Replace with your actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "🔓 Encryption & Decryption Tool",
    description:
      "Encrypt and decrypt your data securely online with various algorithms like AES, RSA, and DES.",
    images: ["/encryption-decryption.PNG"], // Replace with your actual image path
  },
};

export default function EncryptionDecryptionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Randzy Encryption & Decryption Tool",
    url: "https://www.randzy.com/encrypt-decrypt", // Replace with your actual URL
    description:
      "An online tool to encrypt and decrypt data using various algorithms, ensuring secure data protection.",
    applicationCategory: "Utility",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      {/* JSON-LD for Enhanced SEO */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 ">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2 text-gray-800 flex items-center justify-center gap-4">
            <span className="text-2xl lg:text-4xl">🔓</span>
            Encrypt Decrypt Tool
          </h1>

          <EncryptionDecryptionWrapper />

          <section className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Table of Contents
            </h2>
            <nav className="space-y-2">
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#overview">Overview</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#howtouse">How to Use</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#algorithms">Supported Algorithms</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#popularusecases">Popular Use Cases</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#aes-overview">AES Encryption and Decryption</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#rsa-overview">RSA Encryption and Decryption</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#des-overview">DES Encryption and Decryption</a>
              </div>
            </nav>
          </section>

          <section id="overview" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              Overview of Encryption and Decryption Tool
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              Our online Encryption and Decryption tool provides a secure and
              user-friendly way to protect your sensitive data. Whether you need
              to encrypt messages, files, or any other type of information, our
              tool offers a robust solution with various encryption algorithms.
              It ensures that your data remains confidential and accessible only
              to authorized users.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              We support a range of encryption and decryption algorithms,
              allowing you to choose the one that best suits your security
              needs. Our tool is designed to be intuitive and efficient, making
              it easy for both technical and non-technical users to encrypt and
              decrypt data.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              This tool is perfect for individuals and businesses looking to
              enhance their data security. With our online platform, you can
              quickly and securely encrypt and decrypt information without the
              need for complex software installations.
            </p>
          </section>

          <section id="howtouse" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              How to Use
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mb-4">
              Using our Encryption and Decryption tool is straightforward.
              Follow these simple steps:
            </p>
            <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mx-auto mb-6">
              <li>
                <strong>Enter Your Data:</strong> Input the text or data you
                want to encrypt or decrypt into the provided text area.
              </li>
              <li>
                <strong>Select Algorithm:</strong> Choose the desired encryption
                or decryption algorithm from the dropdown menu.
              </li>
              <li>
                <strong>Enter Key:</strong> Provide the encryption or decryption
                key. Ensure it is correct and secure.
              </li>
              <li>
                <strong>Encrypt or Decrypt:</strong> Click the "Encrypt" or
                "Decrypt" button to perform the operation.
              </li>
              <li>
                <strong>View Result:</strong> The encrypted or decrypted output
                will be displayed in the result area.
              </li>
              <li>
                <strong>Copy or Download:</strong> Copy the result or download
                it as a file if needed.
              </li>
            </ol>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              Ensure you keep your encryption keys safe and secure, as they are
              essential for decrypting your data.
            </p>
          </section>

          <section id="algorithms" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              Supported Algorithms
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mb-4">
              Our Encryption and Decryption tool supports a variety of robust
              algorithms, including:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mx-auto">
              <li>
                <strong>AES (Advanced Encryption Standard)</strong>
              </li>
              <li>
                <strong>RSA (Rivest–Shamir–Adleman)</strong>
              </li>
              <li>
                <strong>DES (Data Encryption Standard)</strong>
              </li>
              <li>And more...</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              These algorithms provide different levels of security and are
              suitable for various use cases. Choose the one that best fits your
              needs.
            </p>
          </section>

          <section id="popularusecases"
            className="py-16 px-2 lg:px-8 text-left"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              Popular Use Cases
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mb-4">
              Our Encryption and Decryption tool can be used in a variety of
              scenarios, including:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mx-auto">
              <li>
                <strong>Secure Communication:</strong> Encrypting messages and
                emails.
              </li>
              <li>
                <strong>Data Storage:</strong> Protecting sensitive files and
                databases.
              </li>
              <li>
                <strong>Password Protection:</strong> Securing passwords and
                credentials.
              </li>
              <li>
                <strong>Digital Signatures:</strong> Verifying the authenticity
                of documents.
              </li>
              <li>
                <strong>File Transfer:</strong> Securing data during
                transmission.
              </li>
              <li>
                <strong>Personal Data Protection:</strong> Ensuring privacy for
                personal information.
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              These use cases highlight the versatility and importance of
              encryption and decryption in modern digital security.
            </p>
          </section>

          <section id="aes-overview" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              AES Encryption and Decryption
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              Advanced Encryption Standard (AES) is a symmetric-key encryption
              algorithm widely used for securing sensitive data. It operates on
              128-bit blocks of data and supports key sizes of 128, 192, and 256
              bits, providing varying levels of security.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              <strong>Key Features:</strong>
              <ul>
                <li>
                  <strong>Symmetric Encryption:</strong> Uses the same key for
                  both encryption and decryption.
                </li>
                <li>
                  <strong>High Security:</strong> Considered highly secure and
                  resistant to known attacks.
                </li>
                <li>
                  <strong>Efficiency:</strong> Fast and efficient, making it
                  suitable for a wide range of applications.
                </li>
                <li>
                  <strong>Wide Adoption:</strong> Used in numerous applications,
                  including secure communications, data storage, and network
                  security.
                </li>
              </ul>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Our tool provides easy-to-use AES encryption and decryption,
              allowing you to protect your data with this robust algorithm.
            </p>
          </section>

          <section id="rsa-overview" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              RSA Encryption and Decryption
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              RSA (Rivest–Shamir–Adleman) is an asymmetric-key encryption
              algorithm widely used for secure data transmission and digital
              signatures. It uses a pair of keys: a public key for encryption
              and a private key for decryption.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              <strong>Key Features:</strong>
              <ul>
                <li>
                  <strong>Asymmetric Encryption:</strong> Uses separate keys for
                  encryption and decryption.
                </li>
                <li>
                  <strong>Key Exchange:</strong> Ideal for secure key exchange
                  and digital signatures.
                </li>
                <li>
                  <strong>High Security:</strong> Relies on the mathematical
                  difficulty of factoring large prime numbers.
                </li>
                <li>
                  <strong>Versatility:</strong> Used in various applications,
                  including secure email, web browsers, and digital
                  certificates.
                </li>
              </ul>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Our tool provides RSA encryption and decryption, allowing you to
              use this powerful algorithm for secure data handling.
            </p>
          </section>

          <section id="des-overview" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              DES Encryption and Decryption
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              Data Encryption Standard (DES) is a symmetric-key encryption
              algorithm that was once widely used. It operates on 64-bit blocks
              of data and uses a 56-bit key. Although it is now considered less
              secure due to its short key length, it is still used in some
              legacy systems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              <strong>Key Features:</strong>
              <ul>
                <li>
                  <strong>Symmetric Encryption:</strong> Uses the same key for
                  encryption and decryption.
                </li>
                <li>
                  <strong>Legacy Algorithm:</strong> Historically significant
                  but now considered less secure.
                </li>
                <li>
                  <strong>Block Cipher:</strong> Operates on 64-bit blocks of
                  data.
                </li>
                <li>
                  <strong>Simplicity:</strong> Relatively simple to implement.
                </li>
              </ul>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Our tool offers DES encryption and decryption for compatibility
              with legacy systems and educational purposes.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
