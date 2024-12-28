import { Metadata } from "next";
import RandomCountry from "@/components/RandomCountry";

export const metadata: Metadata = {
  title: "Random Country Generator | Global Geography Explorer",
  description:
    "Discover random countries, their flags, and learn about global geography with our interactive country generator.",
  keywords: [
    "random country generator",
    "world geography",
    "country explorer",
    "global cultures",
    "continent selector",
    "country facts",
    "world map",
    "travel information",
  ],
  openGraph: {
    title: "Random Country Generator - Explore Global Diversity",
    description:
      "An interactive tool to discover random countries, their flags, and fascinating geographical details.",
    type: "website",
    url: "https://randzy.com/random-country",
    images: [
      {
        url: "/random-country.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Country Generator | Global Geography Explorer",
    description:
      "Discover random countries and learn about their unique characteristics.",
    images: [
      {
        url: "/random-country.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

async function fetchAllCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

export default async function RandomCountryPage() {
  const countries = await fetchAllCountries();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">
          Random Country Generator
        </h1>
        <p className="text-lg text-blue-600 mb-8 max-w-2xl mx-auto">
          Explore the world with our interactive tool! Generate random
          countries, discover fascinating geographical details, and learn about
          global diversity.
        </p>

        <div className="flex justify-center mb-8">
          <RandomCountry />
        </div>

        {/* Country Generator Explanation Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-500 pb-3">
                Unlock Global Knowledge
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Dive deep into the world&apos;s geographical tapestry with our
                cutting-edge Country Explorer. More than just a random
                generator, it&apos;s an educational journey through continents,
                cultures, and global diversity.
              </p>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="font-semibold mb-1">Global Perspective</h3>
                  <p className="text-sm">
                    Explore countries across all continents
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600 mb-2"
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
                  <h3 className="font-semibold mb-1">Verified Data</h3>
                  <p className="text-sm">
                    Comprehensive and accurate information
                  </p>
                </div>
              </div>
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-blue-500 pb-3">
                Educational Insights
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 mr-3 mt-1"
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
                  <span>
                    Discover unique cultural and geographical characteristics
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 mr-3 mt-1"
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
                  <span>
                    Learn about capitals, languages, and economic details
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 mr-3 mt-1"
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
                  <span>Interactive exploration of world geography</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 mr-3 mt-1"
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
                  <span>Expand your global knowledge effortlessly</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-blue-500 pb-3 text-center">
            Your Journey Through Global Geography
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">
                Continent Selection
              </h3>
              <p className="text-gray-600">
                Strategically choose your geographical exploration zone or go
                global.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Random Discovery</h3>
              <p className="text-gray-600">
                Uncover a random country with a single, exciting click of
                exploration.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Detailed Insights</h3>
              <p className="text-gray-600">
                Dive deep into comprehensive geographical and cultural
                information.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Potential Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-8 border-b-4 border-green-500 pb-3 text-center">
            Transformative Learning Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4 text-center">📖</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Educational Resource
              </h3>
              <p className="text-gray-600 text-center">
                Transform random exploration into a comprehensive learning
                journey about world cultures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4 text-center">💼</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Professional Development
              </h3>
              <p className="text-gray-600 text-center">
                Enhance global awareness and cultural intelligence through
                interactive discovery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌐</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                Interactive Learning
              </h3>
              <p className="text-gray-600 text-center">
                Engage with dynamic, real-time geographical information across
                global regions.
              </p>
            </div>
          </div>
        </section>

        {/* Global Impact Section */}
        <section className="bg-blue-50 p-8 rounded-2xl shadow-md mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-blue-500 pb-3 text-center">
            Connecting Continents, Expanding Horizons
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🌍</span>
                <h3 className="text-2xl font-semibold text-blue-800">
                  Cultural Exploration
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Discover the rich tapestry of global cultures, from language
                diversity to unique traditions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Multilingual Insights
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Geographical Diversity
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🤝</span>
                <h3 className="text-2xl font-semibold text-blue-800">
                  Global Connectivity
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Bridge geographical gaps and foster understanding through
                interactive exploration.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Cross-Cultural Learning
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✅</span>
                  Global Perspective
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Independent Countries Showcase */}
        <section className="bg-white p-8 rounded-2xl shadow-md mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-4 border-blue-500 pb-3 text-center">
            World of Independent Nations
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore the diverse landscape of independent countries. Each flag
            represents a unique nation with its own rich history, culture, and
            global significance.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {countries
              .filter((country: any) => country.independent)
              .sort((a: any, b: any) =>
                a.name.common.localeCompare(b.name.common)
              )
              .map((country: any) => (
                <div
                  key={country.name.common}
                  className="bg-gray-50 rounded-lg p-3 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-video mb-2">
                    <img
                      src={country.flags.svg}
                      alt={`Flag of ${country.name.common}`}
                      className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-center text-gray-800 group-hover:text-blue-600 transition-colors">
                    {country.name.common}
                  </h3>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
