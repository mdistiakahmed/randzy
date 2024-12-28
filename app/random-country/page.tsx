"use client";

import React, { useState, useEffect } from "react";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Random Country Generator | Explore Global Diversity",
//   description: "Discover random countries, their flags, and learn about global geography with our interactive country generator.",
//   keywords: [
//     "random country",
//     "country flag",
//     "geography",
//     "world exploration",
//     "continent selector"
//   ],
//   openGraph: {
//     title: "Random Country Generator - Explore the World",
//     description: "An interactive tool to discover random countries and their flags from around the globe.",
//     type: "website",
//     url: "https://randzy.com/random-country",
//     images: [
//       {
//         url: "/globe.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Random Country Generator",
//     description: "Discover random countries and their fascinating flags",
//     images: [
//       {
//         url: "/globe.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
// };

const CONTINENTS = [
  "All",
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Oceania",
  "Antarctica",
];

export default function RandomCountryPage() {
  const [country, setCountry] = useState<any>(null);
  const [showName, setShowName] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("All");

  const fetchRandomCountry = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();

      // Filter by continent if not 'All'
      const filteredCountries =
        selectedContinent === "All"
          ? countries
          : countries.filter((c: any) =>
              c.continents.includes(selectedContinent)
            );

      const randomCountry =
        filteredCountries[Math.floor(Math.random() * filteredCountries.length)];

      setCountry(randomCountry);
      setShowName(false);
    } catch (error) {
      console.error("Error fetching country:", error);
    }
  };

  useEffect(() => {
    fetchRandomCountry();
  }, [selectedContinent]);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">
          Random Country Explorer
        </h1>

        <div className="mb-8">
          <label
            htmlFor="continent-select"
            className="block text-lg text-gray-700 mb-2"
          >
            Select Continent
          </label>
          <select
            id="continent-select"
            value={selectedContinent}
            onChange={(e) => setSelectedContinent(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {CONTINENTS.map((continent) => (
              <option key={continent} value={continent}>
                {continent}
              </option>
            ))}
          </select>
        </div>

        {country && (
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center">
            <div className="w-64 h-48 mb-6 flex items-center justify-center">
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                className="max-w-full max-h-full object-contain shadow-md rounded-lg"
              />
            </div>

            <div className="mt-4">
              <button
                onClick={() => setShowName(!showName)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                {showName ? "Hide Country Name" : "Reveal Country Name"}
              </button>
            </div>

            {showName && (
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {country.name.common}
                </h2>
              </div>
            )}

            {/* New section for additional country information */}
            {country && (
              <div className="mt-6 w-full text-left bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-700">
                  Country Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-600">Region:</p>
                    <p>{country.region}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Capital:</p>
                    <p>{country.capital?.[0] || "Not Available"}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">Currency:</p>
                    <p>
                      {Object.values(country.currencies || {})
                        .map(
                          (currency: any) =>
                            `${currency.name} (${currency.symbol})`
                        )
                        .join(", ") || "Not Available"}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600">
                      Main Language:
                    </p>
                    <p>
                      {Object.values(country.languages || {})
                        .slice(0, 1)
                        .join(", ") || "Not Available"}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-gray-600 mb-2">
                    Map Location:
                  </p>
                  <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${country.name.common}`}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={fetchRandomCountry}
            className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
          >
            Generate New Country
          </button>
        </div>
      </main>
    </div>
  );
}
