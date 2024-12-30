"use client";

import React, { useEffect, useState } from "react";

// US States Area Codes
const US_STATES_AREA_CODES = {
  ALL: [],
  Alabama: ["205", "251", "256", "334", "938"],
  Alaska: ["907"],
  Arizona: ["480", "520", "602", "623", "928"],
  Arkansas: ["479", "501", "870"],
  California: [
    "209",
    "213",
    "310",
    "323",
    "408",
    "415",
    "510",
    "530",
    "559",
    "619",
    "626",
    "650",
    "661",
    "707",
    "714",
    "760",
    "805",
    "818",
    "831",
    "858",
    "909",
    "916",
    "925",
    "949",
    "951",
  ],
  Colorado: ["303", "719", "720", "970"],
  Connecticut: ["203", "475", "860"],
  Delaware: ["302"],
  Florida: [
    "239",
    "305",
    "321",
    "352",
    "386",
    "407",
    "561",
    "727",
    "754",
    "772",
    "786",
    "813",
    "850",
    "863",
    "904",
    "941",
    "954",
  ],
  Georgia: ["229", "404", "470", "478", "678", "706", "762", "770", "912"],
  Hawaii: ["808"],
  Idaho: ["208"],
  Illinois: [
    "217",
    "224",
    "309",
    "312",
    "331",
    "447",
    "618",
    "630",
    "708",
    "815",
    "847",
    "872",
  ],
  Indiana: ["219", "260", "317", "463", "574", "765", "812"],
  Iowa: ["319", "515", "563", "641", "712"],
  Kansas: ["316", "620", "785", "913"],
  Kentucky: ["270", "502", "606", "859"],
  Louisiana: ["225", "318", "337", "504", "985"],
  Maine: ["207"],
  Maryland: ["240", "301", "410", "443"],
  Massachusetts: [
    "339",
    "351",
    "413",
    "508",
    "617",
    "774",
    "781",
    "857",
    "978",
  ],
  Michigan: [
    "231",
    "248",
    "269",
    "313",
    "517",
    "586",
    "616",
    "734",
    "810",
    "906",
    "947",
    "989",
  ],
  Minnesota: ["218", "320", "507", "612", "651", "763", "952"],
  Mississippi: ["228", "601", "662", "769"],
  Missouri: ["314", "417", "573", "636", "660", "816"],
  Montana: ["406"],
  Nebraska: ["308", "402", "531"],
  Nevada: ["702", "725", "775"],
  "New Hampshire": ["603"],
  "New Jersey": ["201", "551", "609", "732", "848", "856", "862", "908", "973"],
  "New Mexico": ["505", "575"],
  "New York": [
    "212",
    "315",
    "347",
    "516",
    "518",
    "585",
    "607",
    "631",
    "646",
    "716",
    "718",
    "845",
    "914",
    "917",
    "929",
  ],
  "North Carolina": ["252", "336", "704", "828", "910", "919", "980"],
  "North Dakota": ["701"],
  Ohio: [
    "216",
    "234",
    "330",
    "380",
    "419",
    "440",
    "513",
    "567",
    "614",
    "740",
    "937",
  ],
  Oklahoma: ["405", "539", "580", "918"],
  Oregon: ["503", "541", "971"],
  Pennsylvania: [
    "215",
    "267",
    "272",
    "412",
    "484",
    "570",
    "610",
    "717",
    "724",
    "814",
    "878",
  ],
  "Rhode Island": ["401"],
  "South Carolina": ["803", "843", "854", "864"],
  "South Dakota": ["605"],
  Tennessee: ["423", "615", "629", "731", "865", "901", "931"],
  Texas: [
    "210",
    "214",
    "254",
    "281",
    "325",
    "346",
    "361",
    "409",
    "430",
    "432",
    "469",
    "512",
    "551",
    "571",
    "573",
    "713",
    "737",
    "806",
    "817",
    "830",
    "832",
    "915",
    "936",
    "940",
    "956",
    "972",
    "979",
  ],
  Utah: ["385", "435", "801"],
  Vermont: ["802"],
  Virginia: ["276", "434", "540", "571", "703", "757", "804"],
  Washington: ["206", "253", "360", "425", "509"],
  "West Virginia": ["304", "681"],
  Wisconsin: ["262", "414", "534", "608", "715", "920"],
  Wyoming: ["307"],
};

const PhoneNumberGenerator = () => {
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>("ALL");
  const [numberOfNumbers, setNumberOfNumbers] = useState<string>("5"); // Changed default to 5
  const [copyStatus, setCopyStatus] = useState<{ [key: number]: boolean }>({});

  // Generate phone numbers on initial load
  useEffect(() => {
    generatePhoneNumbers();
  }, []);

  // Generate phone numbers based on state and count
  const generatePhoneNumbers = () => {
    const generatedNumbers: string[] = [];

    let num = 0;

    try {
      num = parseInt(numberOfNumbers, 10);
    } catch (err) {
      console.error("Invalid number of numbers", err);
      return;
    }

    for (let i = 0; i < num; i++) {
      // Get area codes for the selected state
      const stateCodes =
        selectedState === "ALL"
          ? Object.values(US_STATES_AREA_CODES).flat().filter(Boolean)
          : US_STATES_AREA_CODES[
              selectedState as keyof typeof US_STATES_AREA_CODES
            ];

      // Select a random area code
      const areaCode =
        stateCodes.length > 0
          ? stateCodes[Math.floor(Math.random() * stateCodes.length)]
          : Math.floor(200 + Math.random() * 800)
              .toString()
              .padStart(3, "0");

      // Generate exchange code and subscriber number
      const exchangeCode = Math.floor(200 + Math.random() * 800)
        .toString()
        .padStart(3, "0");
      const subscriberNumber = Math.floor(
        1000 + Math.random() * 8999
      ).toString();

      // Format as (XXX) XXX-XXXX
      const formattedNumber = `(${areaCode}) ${exchangeCode}-${subscriberNumber}`;
      generatedNumbers.push(formattedNumber);
    }

    setPhoneNumbers(generatedNumbers);
    setCopyStatus({}); // Reset copy status
  };

  // Copy individual phone number
  const copyPhoneNumber = (index: number, number: string) => {
    try {
      // Remove non-digit characters for pure number copy
      const plainNumber = number.replace(/\D/g, "");
      navigator.clipboard
        .writeText(plainNumber)
        .then(() => {
          // Set copy status for specific number
          setCopyStatus((prev) => ({
            ...prev,
            [index]: true,
          }));

          // Reset copy status after 2 seconds
          setTimeout(() => {
            setCopyStatus((prev) => {
              const newStatus = { ...prev };
              delete newStatus[index];
              return newStatus;
            });
          }, 2000);
        })
        .catch(() => {
          console.error("Copy failed");
        });
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  // Add this method back to the component
  const copyPhoneNumbers = () => {
    if (phoneNumbers.length > 0) {
      try {
        // Remove non-digit characters for pure number copy
        const plainNumbers = phoneNumbers
          .map((num) => num.replace(/\D/g, ""))
          .join("\n");
        navigator.clipboard
          .writeText(plainNumbers)
          .then(() => {
            setCopyStatus({ "-1": true }); // Use a special key to indicate all numbers copied
            // Reset copy status after 2 seconds
            setTimeout(() => setCopyStatus({}), 2000);
          })
          .catch(() => {
            console.error("Copy failed");
          });
      } catch (err) {
        console.error("Copy failed", err);
      }
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          US Phone Number Generator
        </h1>

        {/* State Selection */}
        <div className="mb-4">
          <label
            htmlFor="state-select"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select State
          </label>
          <select
            id="state-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            {[
              "ALL",
              ...Object.keys(US_STATES_AREA_CODES).filter(
                (state) => state !== "ALL"
              ),
            ].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Number of Phone Numbers */}
        <div className="mb-4">
          <label
            htmlFor="number-count"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Number of Phone Numbers
          </label>
          <input
            type="text"
            id="number-count"
            value={numberOfNumbers}
            onChange={(e) => {
              setNumberOfNumbers(e.target.value);
            }}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Generate Button */}

        <div className="mb-6 flex justify-center items-center space-x-4">
          {" "}
          {/* Added space-x-4 for gap */}
          <button
            onClick={generatePhoneNumbers}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Generate
          </button>
          <button
            onClick={copyPhoneNumbers}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded inline-flex items-center whitespace-nowrap"
          >
            {copyStatus["-1"] ? (
              <>
                <span className="mr-1">✅</span> Copied
              </>
            ) : (
              <>
                <span className="mr-1">📋</span> Copy All
              </>
            )}
          </button>
        </div>

        {/* Generated Phone Numbers */}
        {phoneNumbers.length > 0 && (
          <div className="mb-4">
            <div className="border border-gray-300 rounded-md p-2 max-h-48 overflow-y-auto">
              {phoneNumbers.map((num, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b last:border-b-0 py-1"
                >
                  <span>{num}</span>
                  <button
                    onClick={() => copyPhoneNumber(index, num)}
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                  >
                    {copyStatus[index] ? (
                      <>
                        <span className="mr-1">✅</span> Copied
                      </>
                    ) : (
                      <>
                        <span className="mr-1">📋</span> Copy
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-sm text-gray-500 mt-4">
          Generates random US phone numbers for testing purposes
        </p>
      </div>
    </div>
  );
};

export default PhoneNumberGenerator;
