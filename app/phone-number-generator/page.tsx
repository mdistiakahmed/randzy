import PhoneNumberGenerator from "@/components/PhoneNumberGenerator";
import { Metadata } from "next";

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
  

export const metadata: Metadata = {
  title: "US Phone Number Generator | Random Phone Number Tool",
  description:
    "Generate random US phone numbers by state. Perfect for testing, development, and privacy protection.",
  keywords: [
    "US Phone Number Generator",
    "Random Phone Number",
    "Phone Number Faker",
    "Test Phone Numbers",
    "Development Phone Numbers",
    "Privacy Phone Numbers",
  ],
  openGraph: {
    title: "US Phone Number Generator | Random Phone Number Tool",
    description:
      "Generate random US phone numbers by state. Perfect for testing, development, and privacy protection.",
    type: "website",
    url: "https://randzy.com/phone-number-generator",
    images: [
      {
        url: "/phone.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function PhoneNumberGeneratorPage() {
  return (
    <div className="relative min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_left_-50px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            US Phone Number Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate random, realistic US phone numbers for testing,
            development, and privacy protection.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="p-6 sm:p-10">
            <PhoneNumberGenerator />
          </div>
        </div>

        {/* Phone Number Generator Tool Section */}
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  US Phone Number Generator Tool
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A comprehensive, cutting-edge solution for generating
                  authentic and randomized United States phone numbers with
                  unparalleled precision and flexibility
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:bg-blue-100 transition-colors">
                  <div className="mb-4">
                    <span className="text-4xl">🔢</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Random Generation
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Generates completely random phone numbers using authentic US
                    area codes and formatting, ensuring maximum unpredictability
                    and realism.
                  </p>
                  <p className="text-sm text-gray-600">
                    Our advanced algorithm guarantees unique, statistically
                    distributed phone numbers that meet professional standards.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:bg-green-100 transition-colors">
                  <div className="mb-4">
                    <span className="text-4xl">🌎</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-3">
                    State-Specific Options
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Choose from all 50 states or generate numbers for a specific
                    state with accurate, geographically-mapped area codes.
                  </p>
                  <p className="text-sm text-gray-600">
                    Precise geographical representation ensures your generated
                    numbers reflect authentic regional telecommunications
                    patterns.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 hover:bg-purple-100 transition-colors">
                  <div className="mb-4">
                    <span className="text-4xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">
                    Customizable Generation
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Control the number of phone numbers generated, from a single
                    number to a comprehensive batch of up to 50 unique phone
                    numbers.
                  </p>
                  <p className="text-sm text-gray-600">
                    Flexible generation parameters allow for precise control,
                    making our tool adaptable to various professional and
                    testing scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Applications Section */}
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Real-World Applications
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore the versatile use cases of our US Phone Number
                  Generator across multiple professional domains
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 hover:bg-indigo-100 transition-colors">
                  <div className="mb-4">
                    <span className="text-4xl">💻</span>
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                    Software Development
                  </h3>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>
                      Comprehensive Unit Testing of Communication Features
                    </li>
                    <li>
                      Efficient Database Seeding with Realistic Phone Numbers
                    </li>
                    <li>
                      Rapid Prototyping of Communication-Based Applications
                    </li>
                    <li>Simulating User Profiles for Complex System Testing</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Developers can create robust applications with realistic,
                    randomized contact information.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 hover:bg-orange-100 transition-colors">
                  <div className="mb-4">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">
                    Design and Prototyping
                  </h3>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Advanced UI/UX Mockup Creation</li>
                    <li>Realistic User Flow Demonstrations</li>
                    <li>Comprehensive Design System Validation</li>
                    <li>Dynamic Wireframe Population</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Designers can create authentic, context-rich prototypes with
                    genuine-looking contact information.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 hover:bg-teal-100 transition-colors">
                  <div className="mb-4">
                    <span className="text-4xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-teal-900 mb-3">
                    Research and Education
                  </h3>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Advanced Academic Research Simulations</li>
                    <li>Comprehensive Training Environment Creation</li>
                    <li>Complex Data Analysis Scenarios</li>
                    <li>Interactive Educational Modeling</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Researchers and educators can generate realistic datasets
                    for comprehensive studies and training.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-xl p-6 border border-pink-100 hover:bg-pink-100 transition-colors">
                  <div className="mb-4">
                    <span className="text-4xl">🔒</span>
                  </div>
                  <h3 className="text-xl font-semibold text-pink-900 mb-3">
                    Privacy and Security
                  </h3>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Secure Anonymous Testing Protocols</li>
                    <li>Advanced Data Anonymization Techniques</li>
                    <li>Regulatory Compliance Verification</li>
                    <li>Confidential Prototype Development</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Ensure data privacy and security with completely randomized,
                    non-identifiable phone numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* US States Area Codes Section */}
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              US States Area Codes
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      State
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Area Codes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(US_STATES_AREA_CODES)
                    .filter(([state]) => state !== "ALL")
                    .sort((a, b) => a[0].localeCompare(b[0]))
                    .map(([state, codes]) => (
                      <tr
                        key={state}
                        className="bg-white border-b hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {state}
                        </td>
                        <td className="px-6 py-4">{codes.join(", ")}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Optional: Summary Statistics */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Total States: {Object.keys(US_STATES_AREA_CODES).length - 1} |
              Total Area Codes:{" "}
              {Object.values(US_STATES_AREA_CODES)
                .filter((codes) => codes.length > 0)
                .reduce((total, codes) => total + codes.length, 0)}
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-lg">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Privacy and Security Policy
                </h2>
                <p className="text-lg text-gray-600">
                  Ensuring your data privacy and security is our top priority
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 hover:bg-purple-100 transition-colors">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-3">
                    Data Protection
                  </h3>
                  <p className="text-gray-700">
                    We do not store or track any generated phone numbers. All
                    data is completely ephemeral and exists only during your
                    session.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 hover:bg-teal-100 transition-colors">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-teal-900 mb-3">
                    No Personal Information
                  </h3>
                  <p className="text-gray-700">
                    Our tool generates completely random numbers. No personal or
                    identifiable information is ever collected or used.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 hover:bg-orange-100 transition-colors">
                  <div className="mb-4">
                    <svg
                      className="w-12 h-12 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-orange-900 mb-3">
                    Transparent Usage
                  </h3>
                  <p className="text-gray-700">
                    We provide complete transparency about how our random number
                    generator works and its intended use cases.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 italic">
                  Last Updated: December 2023
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section className="mt-12">
          <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Get comprehensive answers to the most common questions about
                  our US Phone Number Generator
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-colors group">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer">
                      <span className="text-xl font-semibold text-gray-800 group-open:text-blue-600">
                        Are these real phone numbers?
                      </span>
                      <svg
                        className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="mt-4 space-y-3 text-gray-600">
                      <p>
                        No, these are completely randomly generated phone
                        numbers that do not correspond to any real person,
                        business, or active phone line. Our generator creates
                        fictional phone numbers using authentic US area code
                        structures.
                      </p>
                      <p className="text-sm text-gray-500">
                        These numbers are ideal for testing, development, and
                        privacy protection purposes, ensuring no actual phone
                        numbers are used.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-colors group">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer">
                      <span className="text-xl font-semibold text-gray-800 group-open:text-blue-600">
                        Can I generate numbers for a specific state?
                      </span>
                      <svg
                        className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="mt-4 space-y-3 text-gray-600">
                      <p>
                        Yes, our US Phone Number Generator allows you to select
                        phone numbers from any of the 50 states. You can choose
                        a specific state or opt for nationwide numbers that
                        cover all area codes.
                      </p>
                      <p className="text-sm text-gray-500">
                        This feature provides flexibility for developers,
                        testers, and professionals who need geographically
                        specific phone number simulations.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-colors group">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer">
                      <span className="text-xl font-semibold text-gray-800 group-open:text-blue-600">
                        How many numbers can I generate?
                      </span>
                      <svg
                        className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="mt-4 space-y-3 text-gray-600">
                      <p>
                        Our generator allows you to create up to 50 unique phone
                        numbers in a single request. This batch generation
                        feature is perfect for comprehensive testing, database
                        seeding, and simulation scenarios.
                      </p>
                      <p className="text-sm text-gray-500">
                        The limit ensures performance and prevents potential
                        system overload while providing ample numbers for most
                        professional use cases.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:bg-gray-100 transition-colors group">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer">
                      <span className="text-xl font-semibold text-gray-800 group-open:text-blue-600">
                        Is the generated data secure and private?
                      </span>
                      <svg
                        className="w-6 h-6 text-gray-500 group-open:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="mt-4 space-y-3 text-gray-600">
                      <p>
                        Absolutely. Our US Phone Number Generator creates
                        completely random, non-identifiable numbers. No personal
                        data is stored, collected, or tracked during the
                        generation process.
                      </p>
                      <p className="text-sm text-gray-500">
                        We prioritize user privacy and data protection, making
                        our tool safe for professional and personal use across
                        various applications.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
