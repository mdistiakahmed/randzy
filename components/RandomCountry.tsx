"use client";

import React, { useState, useEffect } from "react";

const CONTINENTS = [
  "All",
  "Africa",
  "Asia", 
  "Europe", 
  "North America",
  "South America", 
  "Oceania", 
  "Antarctica"
];

export default function RandomCountry({countries}: any) {
  const [country, setCountry] = useState<any>(null);
  const [showName, setShowName] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const fetchRandomCountry = async (continent?: string) => {
    setIsLoading(true);
    try {
      // Filter by continent and independent status
      const filteredCountries =
        countries.filter((c: any) => 
          c.independent === true && 
          (continent === "All" || !continent || c.continents.includes(continent))
        );

      if (filteredCountries.length === 0) {
        // Fallback if no countries match the criteria
        alert("No independent countries found in the selected continent. Please choose another.");
        setIsLoading(false);
        return;
      }

      const randomCountry =
        filteredCountries[Math.floor(Math.random() * filteredCountries.length)];

      setCountry(randomCountry);
      setShowName(false);
      setAnimationKey(prev => prev + 1); // Trigger re-render for animation
    } catch (error) {
      console.error("Error fetching country:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomCountry(selectedContinent);
  }, [selectedContinent]);

  const renderCountryDetails = () => {
    if (!country) return null;

    return (
      <div 
        key={animationKey}
        className="pt-4 sm:pt-6 mt-4 sm:mt-6 space-y-4 animate-fade-in w-full"
      >
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 border-b pb-4">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {country.name.common}
            </h2>
            <p className="text-sm text-gray-500">
              {country.name.official}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <DetailCard 
            title="Region" 
            value={country.region || "Not Available"} 
            icon="🌍"
          />
          <DetailCard 
            title="Capital" 
            value={country.capital?.[0] || "Not Available"} 
            icon="🏛️"
          />
          <DetailCard 
            title="Population" 
            value={country.population ? country.population.toLocaleString() : "Not Available"}
            icon="👥"
          />
          <DetailCard 
            title="Currency" 
            value={
              Object.values(country.currencies || {})
                .map((currency: any) => `${currency.name} (${currency.symbol})`)
                .join(", ") || "Not Available"
            } 
            icon="💰"
          />
          <DetailCard 
            title="Main Language" 
            value={
              Object.values(country.languages || {})
                .slice(0, 1)
                .join(", ") || "Not Available"
            } 
            icon="🗣️"
          />
          <DetailCard 
            title="Area" 
            value={
              country.area 
                ? `${country.area.toLocaleString()} km²`
                : "Not Available"
            }
            icon="📏"
          />
        </div>

        <div className="mt-4 bg-gray-50 rounded-lg p-4">
          <p className="font-semibold text-gray-700 mb-2 flex items-center">
            <span className="mr-2">🌐</span>
            Quick Facts
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>
              Independent: {country.independent ? "Yes" : "No"}
            </li>
            <li>
              UN Member: {country.unMember ? "Yes" : "No"}
            </li>
            <li>
              Time Zones: {country.timezones?.slice(0, 2).join(", ") || "Not Available"}
            </li>
          </ul>
        </div>

        <div className="mt-4 bg-white">
          <p className="font-semibold text-gray-600 mb-2 flex items-center">
            <span className="mr-2">📍</span>
            Map Location:
          </p>
          <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden shadow-md">
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
    );
  };

  return (
    <div className="space-y-6 w-full">
      {/* Continent Selector and Generate Button */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-1/2 flex items-center justify-center gap-5">
          <label
            htmlFor="continent-select"
            className="block text-lg text-gray-700  whitespace-nowrap"
          >
            Select Continent
          </label>
          <select
            id="continent-select"
            value={selectedContinent}
            onChange={(e) => setSelectedContinent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            {CONTINENTS.map((continent) => (
              <option key={continent} value={continent}>
                {continent}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-1/2 flex items-end">
          <button
            onClick={() => fetchRandomCountry(selectedContinent)}
            disabled={isLoading}
            className={`
              w-full px-8 py-3 rounded-md text-white transition duration-300 ease-in-out
              ${isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95'
              }
            `}
          >
            {isLoading ? 'Generating...' : 'Generate New Country'}
          </button>
        </div>
      </div>

      {/* Country Display */}
      {country && (
        <div className="py-4 sm:py-6 flex flex-col items-center">
          <div className="w-48 sm:w-64 h-36 sm:h-48 mb-4 sm:mb-6 flex items-center justify-center">
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className="max-w-full max-h-full object-contain shadow-md rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="mt-2 sm:mt-4">
            <button
              onClick={() => setShowName(!showName)}
              className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out active:scale-95"
            >
              {showName ? "Hide Country Details" : "Reveal Country Details"}
            </button>
          </div>

          {showName && renderCountryDetails()}
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

// Reusable detail card component
function DetailCard({ 
  title, 
  value, 
  icon 
}: { 
  title: string, 
  value: string, 
  icon: string 
}) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}