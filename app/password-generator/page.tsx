import { Metadata } from "next";
import PasswordGenerator from "@/components/PasswordGenerator";

export const metadata: Metadata = {
  title: "Password Generator | Create Strong & Secure Passwords",
  description:
    "Generate unbreakable passwords with our free online password generator. Customize length, include symbols, numbers, and create strong passwords instantly.",
  keywords: [
    "password generator",
    "secure password",
    "random password",
    "password creator",
    "strong password tool",
    "online password generator",
  ],
  openGraph: {
    title: "Password Generator - Create Secure Passwords",
    description:
      "Generate strong, unique passwords with our easy-to-use online tool.",
    type: "website",
    url: "https://randzy.com/password-generator",
    images: ["/password-generator.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Password Generator | Create Strong Passwords",
    description: "Generate unbreakable passwords instantly with our free tool.",
  },
};

export default function PasswordGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Password Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create strong, unique passwords that protect your online accounts
            from unauthorized access.
          </p>
        </header>

        <section className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <PasswordGenerator />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Use Our Password Generator?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                🔒 Enhanced Security
              </h3>
              <p className="text-gray-700">
                Generate complex passwords that are virtually impossible to
                guess or crack.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-800">
                🧩 Customizable Options
              </h3>
              <p className="text-gray-700">
                Adjust password length and include/exclude character types as
                needed.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-800">
                📋 Easy Clipboard Copy
              </h3>
              <p className="text-gray-700">
                Instantly copy generated passwords with a single click.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Password Security Tips
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <p>
                Use unique passwords for each account to minimize risk if one
                account is compromised.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <p>
                Aim for passwords at least 12 characters long with a mix of
                character types.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <p>
                Consider using a password manager to securely store your
                generated passwords.
              </p>
            </li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start Generating Secure Passwords Now
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Protect your digital life with strong, unique passwords generated in
            seconds.
          </p>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Are generated passwords truly random?
              </h3>
              <p className="text-gray-700">
                Yes, our password generator uses a cryptographically secure
                random number generation method to create truly unpredictable
                passwords.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Is it safe to use an online password generator?
              </h3>
              <p className="text-gray-700">
                Our tool generates passwords client-side, meaning the passwords
                are created directly in your browser and never sent to our
                servers, ensuring maximum privacy and security.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                How long should my password be?
              </h3>
              <p className="text-gray-700">
                We recommend passwords between 12-32 characters. Longer
                passwords are generally more secure, as they are harder to crack
                through brute-force methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Can I customize the generated password?
              </h3>
              <p className="text-gray-700">
                Absolutely! You can adjust the password length and choose which
                types of characters to include (uppercase, lowercase, numbers,
                symbols) to meet your specific security requirements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
