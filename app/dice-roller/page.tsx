import React from "react";
import { Metadata } from "next";
import DiceRoller from "@/components/DiceRoller";

export const metadata: Metadata = {
  title: "Dice Roller | Random Number Generator Tool",
  description:
    "Generate random numbers instantly with our interactive online dice roller. Perfect for games, decisions, and random selections.",
  keywords: [
    "dice roller",
    "random number generator",
    "online dice",
    "game tool",
    "random selection",
    "virtual dice",
  ],
  openGraph: {
    title: "Dice Roller - Generate Random Numbers",
    description:
      "Roll a virtual six-sided die with a single click. Easy, fun, and random!",
    type: "website",
    images: [
      {
        url: "/dice-roller.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dice Roller | Random Number Generation",
    description:
      "Generate random numbers instantly with our interactive online dice roller.",
    images: ["/dice-roller.png"],
  },
};

export default function DiceRollerPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Dice Roller</h1>
        <p className="text-lg text-blue-600 mb-8">
          Generate random numbers with a virtual six-sided die!
        </p>

        <div className="flex justify-center mb-8">
          <DiceRoller />
        </div>

        <section className="mt-12 text-left text-gray-700 space-y-6 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-b-2 border-blue-200 pb-2">
            About Our Dice Roller
          </h2>

          <p className="leading-relaxed">
            Our online dice roller provides a quick, interactive way to generate
            random numbers. Whether you need to make a game decision, randomize
            a selection, or just have fun, our virtual dice is perfect for any
            occasion.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">
                How to Use the Dice Roller
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Click on the dice to start rolling</li>
                <li>Watch the 3D animated dice tumble</li>
                <li>See your randomly generated number</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">
                Perfect For
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Board games</li>
                <li>Making random selections</li>
                <li>Teaching probability</li>
                <li>Decision making</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 italic text-gray-600 bg-white p-4 rounded-lg shadow-md">
            🎲 Each roll uses cryptographically secure random number generation
            to ensure true randomness!
          </p>
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
                Our dice roller uses advanced algorithms to generate completely
                unpredictable numbers, mimicking the randomness of a physical
                die roll.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Uniform Distribution
              </h3>
              <p className="text-gray-600">
                Each number (1-6) has an equal probability of being selected,
                ensuring fair and unbiased results.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Real-World Applications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Educational Tools
              </h3>
              <p className="text-gray-600">
                Teach probability, statistics, and randomness in classrooms and
                educational settings.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Game Design
              </h3>
              <p className="text-gray-600">
                Simulate dice rolls for tabletop RPGs, board games, and digital
                game mechanics.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Decision Making
              </h3>
              <p className="text-gray-600">
                Use random selection for fair choices, team assignments, or
                breaking deadlocks.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Is the dice roll truly random?
              </h3>
              <p className="text-gray-600">
                Yes! Our dice roller uses cryptographically secure random number
                generation to ensure each roll is completely unpredictable and
                unbiased.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Can I use this for serious decision-making?
              </h3>
              <p className="text-gray-600">
                While our dice roller provides truly random results, we
                recommend using it for fun and light-hearted decisions.
                Important choices should involve careful consideration.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Is the tool free to use?
              </h3>
              <p className="text-gray-600">
                Absolutely! Our online dice roller is completely free and
                requires no registration or download.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            Dice Rolling Across Cultures
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Historical Significance
              </h3>
              <p className="text-gray-600">
                Dice have been used for decision-making and games for thousands
                of years, from ancient civilizations to modern times.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Global Variations
              </h3>
              <p className="text-gray-600">
                Different cultures have unique dice and randomization methods,
                reflecting the universal human fascination with chance and
                probability.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-blue-100 p-6 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Ready to Roll the Dice?
          </h2>
          <p className="text-blue-700 mb-6">
            Start generating random numbers with our interactive dice roller
            now!
          </p>
          <p className="italic text-blue-600">
            🎲 Every roll is a new adventure!
          </p>
        </section>
      </main>
    </div>
  );
}
