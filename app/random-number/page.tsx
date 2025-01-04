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
            <section className="mt-12  rounded-xl  space-y-6">
              <div className="bg-white rounded-lg lg:shadow-md lg:p-8 mt-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-blue-800 flex items-center">
                      <span className="mr-4 text-4xl">🎲</span>Why Choose Our
                      Random Number Generator?
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Our cutting-edge Random Number Generator is a
                      sophisticated tool designed to meet the diverse needs of
                      professionals, researchers, and enthusiasts across
                      multiple domains. Leveraging advanced algorithmic
                      techniques, we provide a seamless, transparent, and truly
                      random number generation experience.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-2xl mr-4">🔬</span>
                        <div>
                          <h3 className="font-semibold text-green-700">
                            Scientific Precision
                          </h3>
                          <p className="text-gray-600">
                            Cryptographically secure pseudo-random number
                            generation (CSPRNG) ensures statistically uniform
                            distribution for rigorous research and experimental
                            design.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-2xl mr-4">🌐</span>
                        <div>
                          <h3 className="font-semibold text-purple-700">
                            Universal Compatibility
                          </h3>
                          <p className="text-gray-600">
                            Seamlessly works across desktop and mobile
                            platforms, providing consistent performance in web
                            browsers, scientific applications, and gaming
                            environments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg lg:p-6 lg:shadow-inner">
                    <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
                      <span className="mr-4 text-4xl">🎯</span>How to Generate
                      Random Numbers
                    </h2>
                    <ol className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-2xl mr-4 text-blue-600">1️⃣</span>
                        <div>
                          <h3 className="font-semibold">Define Your Range</h3>
                          <p className="text-sm text-gray-600">
                            Set custom minimum and maximum number boundaries
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-4 text-green-600">2️⃣</span>
                        <div>
                          <h3 className="font-semibold">
                            Choose Generation Method
                          </h3>
                          <p className="text-sm text-gray-600">
                            Select between spinning wheel or bulk number
                            generation
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-4 text-purple-600">
                          3️⃣
                        </span>
                        <div>
                          <h3 className="font-semibold">Instant Results</h3>
                          <p className="text-sm text-gray-600">
                            Receive truly random numbers instantly with visual
                            feedback
                          </p>
                        </div>
                      </li>
                    </ol>
                    <div className="mt-6 text-center">
                      <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-green-800 text-sm">
                          💡 Pro Tip: Our generator uses advanced algorithms to
                          ensure maximum randomness and unpredictability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg md:shadow-md  md:p-8">
                <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center flex items-center justify-center gap-4">
                  <span>🎲</span>Versatile Random Number Applications
                  <span>🎲</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🎮</span>
                      <h3 className="font-bold text-xl text-blue-800">
                        Interactive Gaming
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Enhance digital and tabletop game experiences with truly
                      unpredictable random number generation. Ideal for creating
                      dynamic game mechanics, character attributes, and fair
                      randomized events in role-playing games (RPGs), board
                      games, and competitive gaming platforms.
                    </p>
                    <div className="mt-4 text-sm text-blue-600 font-semibold">
                      Key Features: 🎲 Fair Gameplay | 🔀 Unbiased Outcomes
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🔬</span>
                      <h3 className="font-bold text-xl text-green-800">
                        Scientific Research
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Generate statistically robust random samples for academic
                      research, clinical trials, and scientific simulations. Our
                      advanced algorithm ensures high-quality randomness crucial
                      for maintaining experimental integrity and producing
                      reliable research outcomes.
                    </p>
                    <div className="mt-4 text-sm text-green-600 font-semibold">
                      Applications: 📊 Statistical Analysis | 🧪 Experimental
                      Design
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🤝</span>
                      <h3 className="font-bold text-xl text-purple-800">
                        Impartial Decision Making
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Implement fair and transparent randomization for
                      selections, draws, and group assignments. Perfect for
                      raffles, team formations, interview candidate selection,
                      and creating unbiased allocation methods in various
                      professional and personal scenarios.
                    </p>
                    <div className="mt-4 text-sm text-purple-600 font-semibold">
                      Use Cases: 🎳 Team Selection | 🏆 Fair Draws
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 italic">
                  Remember, true randomness is just a spin away!
                </p>
              </div>

              <div className="mt-12 space-y-8">
                <article className="bg-white">
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

                <article className="bg-white mt-6 ">
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

                <article className="bg-white pt-6 ">
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

                <div className="bg-white md:shadow-lg rounded-lg md:p-8 mt-12">
                  <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center flex items-center justify-center gap-4">
                    <span>🎲</span>Frequently Asked Questions<span>🎲</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-lg transition-all hover:shadow-md">
                      <h4 className="font-bold text-xl text-blue-800 mb-4 flex items-center">
                        <span className="mr-3 text-2xl">🎯</span>Is the Number
                        Generation Truly Random?
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Our advanced random number generator uses
                        cryptographically secure pseudo-random number generation
                        (CSPRNG) algorithms. This ensures high-quality
                        randomness suitable for scientific research, statistical
                        sampling, and gaming applications.
                      </p>
                      <div className="mt-4 text-sm text-blue-600 font-semibold">
                        Randomness Guarantee: ✅ Statistically Uniform
                        Distribution
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg transition-all hover:shadow-md">
                      <h4 className="font-bold text-xl text-green-800 mb-4 flex items-center">
                        <span className="mr-3 text-2xl">💼</span>Professional
                        Applications
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Trusted by researchers, developers, educators, and
                        professionals across multiple domains. Perfect for
                        scientific simulations, statistical analysis, game
                        development, and educational tools that require unbiased
                        random number generation.
                      </p>
                      <div className="mt-4 text-sm text-green-600 font-semibold">
                        Use Cases: 📊 Research | 🎮 Gaming | 📝 Education
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg transition-all hover:shadow-md">
                      <h4 className="font-bold text-xl text-purple-800 mb-4 flex items-center">
                        <span className="mr-3 text-2xl">🔒</span>Privacy &
                        Security
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        All number generations are processed client-side,
                        ensuring complete privacy. No personal data is collected
                        or stored during the random number generation process.
                      </p>
                      <div className="mt-4 text-sm text-purple-600 font-semibold">
                        Security Level: 🛡️ High | 🌐 Anonymous
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg transition-all hover:shadow-md">
                      <h4 className="font-bold text-xl text-orange-800 mb-4 flex items-center">
                        <span className="mr-3 text-2xl">🌐</span>Browser
                        Compatibility
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Our random number generator is fully compatible with
                        modern web browsers. Works seamlessly on desktop and
                        mobile devices, providing a consistent and responsive
                        experience across all platforms.
                      </p>
                      <div className="mt-4 text-sm text-orange-600 font-semibold">
                        Supported Browsers: 🌍 Chrome | 🦊 Firefox | 🌊 Edge |
                        🍎 Safari
                      </div>
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
