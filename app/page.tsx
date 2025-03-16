import React from "react";
import Head from "next/head";
import Link from "next/link";

const toolCategories = [
  {
    name: "Random Generators",
    tools: [
      {
        name: "Number Generator",
        href: "/random-number",
        icon: "🎲",
        description: "Generate random numbers within a specified range",
        color: "bg-blue-50",
        textColor: "text-blue-600",
      },
      {
        name: "Alphabet Generator",
        href: "/random-alphabet",
        icon: "🔤",
        description: "Generate random alphabetic characters",
        color: "bg-orange-50",
        textColor: "text-orange-600",
      },
      {
        name: "Coin Flip",
        href: "/coin-flip",
        icon: "💰",
        description: "Virtual coin toss for quick decisions",
        color: "bg-green-50",
        textColor: "text-green-600",
      },
      {
        name: "Dice Roller",
        href: "/dice-roller",
        icon: "🎳",
        description: "Roll virtual dice with multiple configurations",
        color: "bg-purple-50",
        textColor: "text-purple-600",
      },
      {
        name: "Random Country",
        href: "/random-country",
        icon: "🌍",
        description: "Discover random countries from around the world",
        color: "bg-teal-50",
        textColor: "text-teal-600",
      },
      {
        name: "Yes or No",
        href: "/yes-or-no",
        icon: "🔮",
        description: "Generate random yes or no answers",
        color: "bg-red-50",
        textColor: "text-red-600",
      },
    ],
  },
  {
    name: "Selection Tools",
    tools: [
      {
        name: "Name Picker",
        href: "/random-name",
        icon: "👥",
        description: "Randomly select names from a list",
        color: "bg-orange-50",
        textColor: "text-orange-600",
      },
      {
        name: "Team Generator",
        href: "/team-generator",
        icon: "⚽",
        description: "Create balanced random teams",
        color: "bg-red-50",
        textColor: "text-red-600",
      },
      {
        name: "Phone Number Generator",
        href: "/phone-number-generator",
        icon: "📱",
        description: "Generate random phone numbers",
        color: "bg-pink-50",
        textColor: "text-pink-600",
      },
    ],
  },
  {
    name: "Security Tools",
    tools: [
      {
        name: "Password Generator",
        href: "/password-generator",
        icon: "🔐",
        description: "Create strong, random passwords",
        color: "bg-gray-50",
        textColor: "text-gray-600",
      },
      {
        name: "PIN Generator",
        href: "/pin-generator",
        icon: "🔢",
        description: "Generate secure random PINs",
        color: "bg-emerald-50",
        textColor: "text-emerald-600",
      },
      {
        name: "UUID Generator",
        href: "/uuid-generator",
        icon: "🆔",
        description: "Generate unique universal identifiers",
        color: "bg-indigo-50",
        textColor: "text-indigo-600",
      },
      {
        name: "Random String",
        href: "/random-string",
        icon: "🧩",
        description: "Create random alphanumeric strings",
        color: "bg-cyan-50",
        textColor: "text-cyan-600",
      },
    ],
  },
  {
    name: "Health Tools",
    tools: [
      {
        name: "BMI Calculator",
        href: "/bmi-calculator",
        icon: "⚖️",
        description: "Calculate and understand your Body Mass Index",
        color: "bg-lime-50",
        textColor: "text-lime-600",
      },
      {
        name: "Calorie Calculator",
        href: "/calorie-calculator",
        icon: "🍽️",
        description: "Calculate your daily calorie needs for weight management",
        color: "bg-orange-50",
        textColor: "text-orange-600",
      },
    ],
  },
  {
    name: "Quiz",
    tools: [
      {
        name: "Flag Quiz",
        href: "/flag-quiz",
        icon: "🚩",
        description: "Test your knowledge of flags and countries with our engaging quiz. Learn and have fun!",
        color: "bg-blue-50",
        textColor: "text-blue-600",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* SEO Metadata */}
      <Head>
        <title>Randzy - Random Tools for Every Decision</title>
        <meta
          name="description"
          content="Discover a collection of free random tools for number generation, name picking, group selection, and more. Make decisions easily with Randzy!"
        />
        <meta
          name="keywords"
          content="random tools, number generator, name picker, group selector, decision making"
        />
        <link rel="canonical" href="https://randzy.com" />
      </Head>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Random Tools for Every Decision
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simplify your choices with Randzy&apos;s collection of free,
            easy-to-use random selection tools.
          </p>
        </div>

        {/* Tools Grid */}
        <section className="container mx-auto px-4 py-12">
          {toolCategories.map((category) => (
            <div key={category.name} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={`
                  ${tool.color} 
                  ${tool.textColor}
                  rounded-lg shadow-md 
                  p-6 block 
                  transform transition duration-300 
                  hover:scale-105 
                  hover:shadow-xl
                `}
                    aria-label={tool.name}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{tool.icon}</span>
                      <h3 className="text-xl font-semibold">{tool.name}</h3>
                    </div>
                    <p className="text-sm opacity-70">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>

      {/* Additional SEO Content */}
      <section className="container mx-auto px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Use Randzy Random Tools?
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              In a world full of choices, making decisions can be challenging.
              Randzy provides a comprehensive suite of random selection tools to
              help you overcome decision fatigue and introduce an element of
              fairness and fun into your daily life.
            </p>
            <p>
              Whether you&apos;re a teacher dividing students into groups, a
              team leader assigning tasks, or someone looking to make a quick
              decision, our tools offer a simple, unbiased solution. From
              generating random numbers to picking names and creating random
              groups, we&apos;ve got you covered.
            </p>
            <p>Our tools are:</p>
            <ul className="list-disc list-inside pl-4">
              <li>100% Free to Use</li>
              <li>No Registration Required</li>
              <li>Fast and Easy to Navigate</li>
              <li>Compatible with All Devices</li>
              <li>Secure and Private</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Previous sections remain the same */}

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Practical Applications of Randzy Random Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Education
              </h3>
              <p className="text-gray-600">
                Assign group projects, create random study groups, or select
                students for presentations fairly and transparently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Business
              </h3>
              <p className="text-gray-600">
                Distribute tasks, select team members for special assignments,
                or make unbiased team-building decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Personal Use
              </h3>
              <p className="text-gray-600">
                Make quick decisions, create fair lottery systems, or add an
                element of randomness to daily choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            How Randzy Random Tools Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Tool</h3>
              <p className="text-gray-600">
                Select from our range of random generation tools tailored to
                your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Set Parameters</h3>
              <p className="text-gray-600">
                Customize your random selection with easy-to-use input options.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-gray-600">
                Instantly generate random results with a single click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions About Randzy Random Tools
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                What Makes Randzy Random Tools Unique?
              </h3>
              <p className="text-gray-600">
                Randzy stands out by offering a comprehensive suite of free,
                easy-to-use random generation tools. Unlike other platforms, we
                provide multiple tools in one place, with intuitive interfaces
                and no registration requirements. Our tools are designed to be
                both functional and fun, catering to various personal and
                professional needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Are Randzy Tools Really Free?
              </h3>
              <p className="text-gray-600">
                Absolutely! All Randzy random tools are 100% free to use. We
                believe in providing value without hidden costs. There are no
                subscriptions, no credit card requirements, and no premium
                versions. Our tools are accessible to everyone, anytime,
                anywhere.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Is My Data Secure and Private?
              </h3>
              <p className="text-gray-600">
                Data privacy is our top priority. We do not collect, store, or
                share any personal information. All random generations are
                processed instantly and anonymously. Your interactions with our
                tools are completely confidential and leave no trace.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Can I Use Randzy Tools on Mobile Devices?
              </h3>
              <p className="text-gray-600">
                Yes! Randzy tools are fully responsive and optimized for all
                devices. Whether you&apos;re using a smartphone, tablet, or
                desktop computer, our tools provide a seamless, user-friendly
                experience. No downloads or installations are required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                How Accurate Are the Random Generations?
              </h3>
              <p className="text-gray-600">
                Our random tools use cryptographically secure pseudo-random
                number generators, ensuring true randomness and fairness. Each
                generation is independent and unbiased, making our tools perfect
                for applications requiring genuine random selection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                What Types of Random Tools Do You Offer?
              </h3>
              <p className="text-gray-600">
                Randzy provides a diverse range of random tools including Random
                Number Generator, Name Picker, Group Picker, Coin Flip
                Simulator, and Password Generator. These tools cater to various
                scenarios in education, business, gaming, and personal
                decision-making.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Do You Plan to Add More Tools in the Future?
              </h3>
              <p className="text-gray-600">
                We are continuously expanding our tool collection based on user
                feedback and emerging needs. Our development roadmap includes
                new random generation tools and enhanced features. We welcome
                suggestions from our community to improve and grow Randzy.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for?
              <Link
                href="/contact"
                className="text-blue-600 hover:underline ml-1"
              >
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
