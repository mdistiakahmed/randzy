import { Metadata } from "next";
import RandomNumberWheel from "@/components/RandomNumberWheel";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "🎲 Random Number Generator | Free Online Number Picker | Randzy Tools",
  description:
    "Generate truly random numbers with our interactive spinning wheel. Perfect for games, research, and decision-making. Customize number ranges easily!",
  keywords: [
    "random number generator",
    "number picker",
    "random tool",
    "number randomizer",
    "dice roller",
    "random number wheel",
    "online random number generator",
    "free random number tool",
    "number spinner",
    "random selection tool",
  ],
  alternates: {
    canonical: "https://www.randzy.com/random-number",
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
    title: "🎲 Random Number Generator - Free Online Number Picker",
    description:
      "Generate random numbers with an exciting spinning wheel. Easy, fast, and fun!",
    type: "website",
    locale: "en_US",
    siteName: "Randzy",
    images: [
      {
        url: "/random-number.PNG",
        width: 1200,
        height: 630,
        alt: "Randzy Random Number Generator - Spin the Wheel!",
      },
    ],
    url: `https://www.randzy.com/random-number`,
  },
  twitter: {
    card: "summary_large_image",
    title: "🎲 Random Number Generator",
    description: "Generate random numbers with an exciting spinning wheel",
    images: ["/random-number.PNG"],
  },
};

export default function RandomNumberGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Randzy Random Number Generator",
    url: "https://www.randzy.com/random-number",
    description:
      "An interactive online tool to generate random numbers with a spinning wheel",
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-2 text-gray-800 flex items-center justify-center gap-4">
              <span className="text-4xl">🎲</span>
              Random Number Generator
            </h1>

            <RandomNumberWheel />

            {/* Enhanced SEO-friendly content section */}
            <section className="mt-12 bg-gray-50 rounded-xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    Why Use Our Random Number Generator?
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our Random Number Generator is more than just a
                    tool—it&apos;s a versatile solution for anyone needing truly
                    random number generation. From game designers to
                    statisticians, researchers to decision-makers, our
                    interactive spinning wheel provides an engaging and reliable
                    way to generate random numbers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-green-600 mb-4">
                    How It Works
                  </h2>
                  <ol className="text-gray-700 space-y-2 list-decimal list-inside">
                    <li>Set your desired minimum and maximum numbers</li>
                    <li>Click the &quot;Generate Number&quot; button</li>
                    <li>Watch the exciting spinning wheel animation</li>
                    <li>Get your randomly generated number</li>
                  </ol>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-semibold text-purple-600 mb-4">
                  Versatile Applications
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Gaming</h3>
                    <p className="text-sm text-gray-700">
                      Generate random numbers for board games, RPGs, and digital
                      game mechanics.
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Research</h3>
                    <p className="text-sm text-gray-700">
                      Create random samples for statistical analysis and
                      scientific studies.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Decision Making</h3>
                    <p className="text-sm text-gray-700">
                      Use randomization for fair selections, raffles, and
                      unbiased choices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 italic">
                  Remember, true randomness is just a spin away!
                </p>
              </div>

              <div className="mt-12 space-y-8">
                <article className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                    Understanding Random Number Generation
                  </h3>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Random number generation is a critical process used across
                      various disciplines. Our online random number generator
                      provides a reliable and transparent method to create
                      unpredictable numerical outcomes for diverse applications.
                    </p>
                    <p>
                      Whether you need random numbers for statistical sampling,
                      game development, cryptography, or simple decision-making,
                      our tool ensures true randomness with an intuitive,
                      user-friendly interface.
                    </p>
                  </div>
                </article>

                <article className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">
                    Advanced Random Number Generation Techniques
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Pseudo-Random vs True Random
                      </h4>
                      <p className="text-gray-700">
                        Our generator uses advanced algorithms to create numbers
                        that appear truly random, suitable for most applications
                        requiring unpredictable numerical sequences.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Customization Options
                      </h4>
                      <p className="text-gray-700">
                        Customize your random number generation with flexible
                        range settings, allowing precise control over minimum
                        and maximum values.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                    Common Use Cases for Random Number Generators
                  </h3>
                  <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
                    <li className="bg-purple-50 p-4 rounded">
                      <strong className="block mb-2">
                        Scientific Research
                      </strong>
                      Create unbiased sample selections and experimental
                      randomizations.
                    </li>
                    <li className="bg-blue-50 p-4 rounded">
                      <strong className="block mb-2">Game Development</strong>
                      Generate dynamic game mechanics and unpredictable events.
                    </li>
                    <li className="bg-green-50 p-4 rounded">
                      <strong className="block mb-2">Educational Tools</strong>
                      Develop interactive learning experiences with randomized
                      elements.
                    </li>
                    <li className="bg-red-50 p-4 rounded">
                      <strong className="block mb-2">Simulation</strong>
                      Model complex scenarios with probabilistic approaches.
                    </li>
                    <li className="bg-yellow-50 p-4 rounded">
                      <strong className="block mb-2">Decision Making</strong>
                      Create fair and unbiased selection processes.
                    </li>
                    <li className="bg-indigo-50 p-4 rounded">
                      <strong className="block mb-2">Cryptography</strong>
                      Generate secure, unpredictable numerical sequences.
                    </li>
                  </ul>
                </article>

                <div className="text-center bg-blue-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Is the Number Generation Truly Random?
                      </h4>
                      <p className="text-gray-700">
                        Our generator uses sophisticated algorithms to produce
                        pseudo-random numbers that are statistically random and
                        suitable for most applications.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Can I Use This for Professional Work?
                      </h4>
                      <p className="text-gray-700">
                        Yes! Our random number generator is used by researchers,
                        developers, and professionals across various industries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
