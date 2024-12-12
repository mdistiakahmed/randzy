import { Metadata } from "next";
import CoinFlipWheel from "@/components/CoinFlipWheel";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Flip a Coin | Free Online Coin Toss Simulator | Randzy",
  description:
    "Experience a fun and interactive coin flip simulation. Perfect for making decisions, playing games, or settling disputes.",
  keywords: [
    "coin flip",
    "coin toss",
    "random decision maker",
    "heads or tails",
    "online coin flip",
    "coin spinner",
    "random coin toss",
    "decision tool",
    "random selection",
    "probability simulator",
  ],
  alternates: {
    canonical: "https://www.randzy.com/coin-flip",
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
    title: "Coin Flip Simulator - Free Online Coin Toss Tool",
    description:
      "Make random decisions with our exciting coin flip simulator. Easy, fair, and fun!",
    type: "website",
    locale: "en_US",
    siteName: "Randzy",
    images: [
      {
        url: "/coin-flip.PNG",
        width: 1200,
        height: 630,
        alt: "Randzy Coin Flip Simulator - Toss the Coin!",
      },
    ],
    url: `https://www.randzy.com/coin-flip`,
  },
};

export default function CoinFlipPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <main className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Flip a Coin</h1>
        <p className="text-lg text-blue-600 mb-8">
          Flip a virtual coin and let randomness decide!
        </p>

        <div className="flex justify-center mb-8">
          <CoinFlipWheel />
        </div>

        <section className="mt-12 text-left text-gray-700 space-y-6 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-b-2 border-blue-200 pb-2">
            About Our Coin Flip Simulator
          </h2>

          <p className="leading-relaxed">
            Our online coin flip tool is the perfect solution for making quick,
            unbiased decisions. Whether you&apos;re settling a dispute, playing
            a game, or just need a random choice, our virtual coin toss provides
            a fair and instant result.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">
                How to Use the Coin Flip Tool
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Simply click on the coin to start the flip</li>
                <li>Watch the exciting 2-second animation</li>
                <li>See the random result of Heads or Tails</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-4">
                Why Use Our Simulator?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Game night decisions</li>
                <li>Settling friendly arguments</li>
                <li>Teaching probability concepts</li>
                <li>Random selection processes</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 italic text-gray-600 bg-white p-4 rounded-lg shadow-md">
            🎲 Remember, each flip is completely random and independent. Past
            results do not influence future flips!
          </p>
        </section>

        <section className="mt-12 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2">
            The Science of Randomness
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Probability Explained
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Each coin flip has a 50/50 chance of landing on Heads or Tails.
                This is known as an equiprobable event, where both outcomes are
                equally likely.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Real-World Applications
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Coin flips are used in various fields, from sports (coin toss
                before a game) to scientific research for creating unbiased
                random selections.
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
                Is the coin flip truly random?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! Our simulator uses a cryptographically secure random number
                generator to ensure each flip is completely unpredictable. This
                means the outcome is not influenced by previous flips or any
                external factors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Can I use this for important decisions?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                While fun, we recommend using this tool for light-hearted
                decisions. Important choices should involve careful thought,
                analysis, and consideration of multiple factors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                How does the coin flip animation work?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our coin flip uses a smooth 2-second animation that simulates a
                real coin toss. The animation alternates between heads and tails
                to create a realistic flipping effect, making each flip engaging
                and fun.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Are there any limitations to the coin flip?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The coin flip is designed for binary (two-option) decisions.
                While perfect for heads/tails scenarios, it&apos;s not suitable
                for more complex multi-option selections. For those, we
                recommend using our other random selection tools.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Can I use this tool on mobile devices?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely! Our coin flip simulator is fully responsive and
                works seamlessly on smartphones, tablets, and desktop computers.
                You can enjoy random coin flips from any device with a web
                browser.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Is my data private when using this tool?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we prioritize your privacy. Our coin flip tool does not
                store any personal information or track your flips. Each flip is
                completely anonymous and independent.
              </p>
            </div>
          </div>

          <p className="mt-6 text-center italic text-gray-600 bg-white p-4 rounded-lg shadow-md">
            🎲 Still have questions? Feel free to reach out to our support team!
          </p>
        </section>
      </main>
    </div>
  );
}
