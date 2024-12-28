import React from "react";
import { Metadata } from "next";
import WheelOfNames from "@/components/WheelOfNames";

export const metadata: Metadata = {
  title: "Name Picker | Random Name Selection Tool",
  description:
    "Generate fair and random name selections instantly. Perfect for games, team assignments, and decision-making. Easy-to-use interactive wheel picker.",
  keywords: [
    "name picker",
    "random name generator",
    "name selection tool",
    "fair selection",
    "random picker",
    "team assignment",
    "decision making",
  ],
  openGraph: {
    title: "Name Picker - Fair Random Name Selection",
    description:
      "Spin the wheel and randomly select names with our interactive tool. Perfect for games, classrooms, and group activities.",
    type: "website",
    url: "https://randzy.com/random-name",
    images: [
      {
        url: "/name-picker.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Name Picker | Random Name Generator",
    description:
      "Instantly select names randomly with our interactive wheel picker.",
    images: ["/name-picker.png"],
  },
};

export default function NamePickerPage() {
  return (
    <div className="container mx-auto pt-2 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full  mx-auto text-center">
        <h1 className="text-3xl font-bold mb-3 text-blue-800">Name Picker</h1>
        <p className="text-lg text-blue-600 mb-2">
          Generate fair and random name selections with a single spin!
        </p>

        <div className="flex justify-start mb-8">
          <WheelOfNames />
        </div>

        <section className="mt-12 text-left text-gray-700 space-y-6 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-500 pb-3">
                What is a Name Picker?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A name picker is an innovative digital tool designed to make
                random selection processes fair, transparent, and engaging. Our
                interactive wheel provides a visual and exciting way to choose
                names randomly for various personal and professional scenarios.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Key Features
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Interactive spinning wheel interface</li>
                  <li>Unlimited name list capacity</li>
                  <li>Instant random selection</li>
                  <li>Mobile-friendly design</li>
                  <li>No registration required</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                Why Use Our Name Picker?
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
                  <h4 className="font-semibold text-purple-800">No Limits</h4>
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
              Our name picker uses advanced JavaScript and Canvas API to
              generate truly random selections with cryptographically secure
              algorithms, ensuring unbiased and unpredictable results every
              time.
            </p>
          </div>

          <div className="text-center bg-blue-100 p-4 rounded-lg">
            <p className="text-blue-800 font-medium italic">
              🎲 Bringing fairness and fun to random selection since 2024!
            </p>
          </div>
        </section>

        <section className="mt-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            The Science of Randomness
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Truly Random Results
              </h3>
              <p className="text-gray-600">
                Our name picker uses advanced algorithms to generate completely
                unpredictable selections, ensuring no bias or pattern in name
                selection.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Uniform Distribution
              </h3>
              <p className="text-gray-600">
                Each name has an equal probability of being selected, providing
                a fair and unbiased selection process.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Real-Life Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Education
              </h3>
              <p className="text-gray-600">
                Teachers can use the name picker to: - Randomly call on students
                - Assign group projects - Create fair participation
                opportunities
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                Team Building
              </h3>
              <p className="text-gray-600">
                Managers and team leaders can: - Form random teams - Assign
                tasks fairly - Create engaging team-building activities
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">
                Events & Games
              </h3>
              <p className="text-gray-600">
                Event organizers can use for: - Raffle and prize drawings - Game
                night selections - Icebreaker activities
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
                Is the name selection truly random?
              </h3>
              <p className="text-gray-600">
                Yes! Our wheel uses cryptographically secure random number
                generation to ensure each name has an equal chance of being
                selected.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Can I use this for professional settings?
              </h3>
              <p className="text-gray-600">
                Absolutely! Our name picker is perfect for fair team
                assignments, classroom participation, and unbiased selection
                processes.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                How many names can I add to the wheel?
              </h3>
              <p className="text-gray-600">
                You can add as many names as you want! The wheel dynamically
                adjusts to accommodate different list sizes, maintaining
                fairness.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Is this tool free to use?
              </h3>
              <p className="text-gray-600">
                Yes! Our name picker is completely free. No sign-up required,
                just add your names and start spinning.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center bg-blue-100 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Ready to Make Fair Choices?
          </h2>
          <p className="text-xl text-blue-700 mb-6">
            Start using our Name Picker now and bring excitement to your
            decision-making process!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#wheel"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Start Spinning
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
