import { Metadata } from "next";
import Script from "next/script";
import YesOrNoComponent from "./YesOrNoComponent";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Yes or No Generator - Make Instant Decisions Online",
  description:
    "An interactive online tool to generate instant yes or no answers with a spinning wheel, perfect for decision-making and adding spontaneity to choices.",
  keywords: [
    "yes or no generator",
      "yes or no random generator​", 
      "magic yes or no generator​", 
      "generator yes or no​", 
      "random choice generator"
  ],
  openGraph: {
    title: "Yes or No Generator - Randzy",
    description:
      "Instantly generate unbiased yes or no answers with our interactive decision wheel",
    type: "website",
    url: "https://www.randzy.com/yes-or-no",
    images: [
      {
        url: "/yes-or-no-generator.png",
        width: 1200,
        height: 630,
        alt: "Yes or No Choice",
      },
    ],
  },
};
export default function RandomNumberGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Randzy Yes or No Generator",
    url: "https://www.randzy.com/yes-or-no",
    description:
      "An interactive online tool to generate instant yes or no answers with a spinning wheel, perfect for decision-making and adding spontaneity to choices",
    applicationCategory: "Decision Making Utility",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    keywords: [
      "yes or no generator",
      "yes or no random generator​", 
      "magic yes or no generator​", 
      "generator yes or no​", 
      "random choice generator"
    ],
    featureList: [
      "Instant yes or no responses",
      "50/50 probability",
      "Cryptographically secure randomization",
      "Cross-platform compatibility"
    ]
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
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="lg:p-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2 text-gray-800 flex items-center justify-center gap-4">
              <span className="text-2xl lg:text-4xl">🔮</span>
              Yes or No Generator
            </h1>

            <YesOrNoComponent />

            {/* Enhanced SEO-friendly content section */}
            <section className="mt-12  rounded-xl  space-y-6">
              <div className="bg-white rounded-lg lg:shadow-md lg:p-8 mt-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-blue-800 flex items-center">
                      <span className="mr-4 text-4xl">🔮</span>Why Choose Our
                      Yes or No Generator?
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Our innovative Yes or No Generator is a powerful
                      decision-making tool designed to provide instant, unbiased
                      answers to your most pressing questions. Utilizing
                      advanced randomization algorithms, we offer a fun,
                      transparent, and truly random yes-or-no response generator
                      that helps you break through decision-making paralysis.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-2xl mr-4">🎲</span>
                        <div>
                          <h3 className="font-semibold text-green-700">
                            Instant Decision Making
                          </h3>
                          <p className="text-gray-600">
                            Our yes-no generator provides immediate, unbiased
                            answers with a 50/50 probability, perfect for
                            resolving quick dilemmas and breaking decision
                            deadlocks.
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
                            platforms, providing a consistent and fun
                            decision-making tool for games, brainstorming, and
                            personal choices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg lg:p-6 lg:shadow-inner">
                    <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
                      <span className="mr-4 text-4xl">🎯</span>How to Use the
                      Yes or No Generator
                    </h2>
                    <ol className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-2xl mr-4 text-blue-600">1️⃣</span>
                        <div>
                          <h3 className="font-semibold">Ask Your Question</h3>
                          <p className="text-sm text-gray-600">
                            Think of a yes-or-no question you need help deciding
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-4 text-green-600">2️⃣</span>
                        <div>
                          <h3 className="font-semibold">Spin the Wheel</h3>
                          <p className="text-sm text-gray-600">
                            Click the spin button to generate a random yes or no
                            response
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="text-2xl mr-4 text-purple-600">
                          3️⃣
                        </span>
                        <div>
                          <h3 className="font-semibold">Get Your Answer</h3>
                          <p className="text-sm text-gray-600">
                            Receive an instant, unbiased decision to help guide
                            your choice
                          </p>
                        </div>
                      </li>
                    </ol>
                    <div className="mt-6 text-center">
                      <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-green-800 text-sm">
                          💡 Pro Tip: Our yes-no generator uses advanced
                          randomization to provide truly unpredictable answers
                          for decision-making fun.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg md:shadow-md md:p-8">
                <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center flex items-center justify-center gap-4">
                  <span>🔮</span>Versatile Yes or No Generator Applications
                  <span>🔮</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🎮</span>
                      <h3 className="font-bold text-xl text-blue-800">
                        Gaming & Entertainment
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Add excitement to party games, decision-making challenges,
                      and interactive experiences with our instant yes-or-no
                      generator. Perfect for breaking ties, creating spontaneous
                      game rules, and adding an element of randomness to social
                      gatherings.
                    </p>
                    <div className="mt-4 text-sm text-blue-600 font-semibold">
                      Key Features: 🎲 Game Mechanics | 🤔 Quick Decisions
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🧠</span>
                      <h3 className="font-bold text-xl text-green-800">
                        Personal Decision Making
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Overcome decision paralysis and reduce mental fatigue by
                      using our yes-no generator for everyday choices. From
                      trivial dilemmas to important life decisions, get an
                      unbiased, random perspective to help guide your choices.
                    </p>
                    <div className="mt-4 text-sm text-green-600 font-semibold">
                      Applications: 🤷 Choice Assistance | 🌈 Unbiased Guidance
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">💡</span>
                      <h3 className="font-bold text-xl text-purple-800">
                        Creative Problem Solving
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Break creative blocks and explore new decision-making
                      approaches. Use the yes-no generator as a tool for
                      brainstorming, random idea selection, and introducing an
                      element of chance into problem-solving processes.
                    </p>
                    <div className="mt-4 text-sm text-purple-600 font-semibold">
                      Use Cases: 🚀 Innovation | 🎨 Creative Thinking
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 italic">
                  Remember, true randomness is just a spin away!
                </p>
              </div>

              <div className="mt-12 space-y-8 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-soft">
                <article className="bg-white rounded-lg p-6 border-l-4 border-indigo-500 shadow-md">
                  <h3 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center">
                    <span className="mr-4 text-3xl">🔮</span>
                    Understanding the Yes or No Generator
                  </h3>
                  <div className="text-gray-800 space-y-4 leading-relaxed">
                    <p>
                      Our Yes or No Generator is an innovative decision-making
                      tool that leverages advanced randomization algorithms to
                      provide instant, unbiased responses. By utilizing a true
                      50/50 probability mechanism, we offer a unique solution
                      for breaking through decision-making challenges across
                      various contexts.
                    </p>
                    <p>
                      Whether you&apos;re seeking quick guidance, adding spontaneity
                      to games, or looking for an impartial perspective, our
                      generator provides a simple yet powerful way to make
                      decisions with a touch of randomness.
                    </p>
                  </div>
                </article>

                <article className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-md">
                  <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                    <span className="mr-4 text-3xl">🎲</span>
                    Advanced Randomization Techniques
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2 text-green-800">
                        ✨ True Randomness
                      </h4>
                      <p className="text-gray-700">
                        Utilizing cryptographically secure random number
                        generation to ensure completely unbiased yes or no
                        responses.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2 text-blue-800">
                        🌈 Instant Decision Making
                      </h4>
                      <p className="text-gray-700">
                        Provides immediate, unpredictable answers to help
                        overcome decision paralysis and add an element of
                        chance.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-lg p-6 border-l-4 border-purple-500 shadow-md">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
                    <span className="mr-4 text-3xl">🌈</span>
                    Diverse Applications of Yes or No Generator
                  </h3>
                  <ul className="grid md:grid-cols-3 gap-4 text-gray-800">
                    {[
                      {
                        title: "🎮 Party Games",
                        description:
                          "Add excitement and randomness to social gatherings and group activities.",
                        color: "purple-50",
                      },
                      {
                        title: "🤔 Personal Decisions",
                        description:
                          "Break through indecision for everyday choices and minor dilemmas.",
                        color: "blue-50",
                      },
                      {
                        title: "💡 Creative Brainstorming",
                        description:
                          "Introduce randomness to problem-solving and idea generation processes.",
                        color: "green-50",
                      },
                      {
                        title: "🧠 Mental Flexibility",
                        description:
                          "Challenge decision-making patterns and explore alternative perspectives.",
                        color: "red-50",
                      },
                      {
                        title: "📊 Team Building",
                        description:
                          "Create fun, random decision-making exercises in professional settings.",
                        color: "yellow-50",
                      },
                      {
                        title: "🎲 Spontaneity Boost",
                        description:
                          "Add an element of chance and excitement to daily life and group interactions.",
                        color: "indigo-50",
                      },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className={`bg-${item.color} p-4 rounded-lg hover:shadow-md transition-all`}
                      >
                        <strong className="block mb-2 text-lg">
                          {item.title}
                        </strong>
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className="mt-12 space-y-8 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-4 sm:p-8 rounded-2xl shadow-2xl">
                <article className="bg-white/80 backdrop-blur-lg rounded-xl border border-gray-100 p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-center mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mb-4 sm:mb-0 sm:mr-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 sm:h-8 sm:w-8 text-white"
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
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800">
                      Comprehensive Yes or No Generator Insights
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-gray-800">
                    <div className="space-y-4 bg-blue-50/50 p-4 sm:p-6 rounded-lg border border-blue-100 hover:shadow-md transition-all">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-800 flex items-center">
                        <span className="mr-3 text-xl sm:text-2xl">🎲</span>
                        True Randomness
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed">
                        Our yes-no generator employs advanced cryptographic
                        techniques to ensure completely unbiased and
                        unpredictable responses. Using sophisticated random
                        number generation, we guarantee a genuine 50/50
                        probability for each outcome.
                      </p>
                      <div className="text-xs sm:text-sm text-blue-600 font-semibold flex items-center">
                        <span className="mr-2">🎯</span>Randomness Precision:
                        50% Yes, 50% No
                      </div>
                    </div>

                    <div className="space-y-4 bg-green-50/50 p-4 sm:p-6 rounded-lg border border-green-100 hover:shadow-md transition-all">
                      <h3 className="text-lg sm:text-xl font-bold text-green-800 flex items-center">
                        <span className="mr-3 text-xl sm:text-2xl">🌐</span>
                        Universal Compatibility
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed">
                        Seamlessly integrated across multiple platforms and use
                        cases, our yes-no generator provides consistent,
                        high-performance decision-making support. Compatible
                        with personal, professional, and entertainment
                        applications.
                      </p>
                      <div className="text-xs sm:text-sm text-green-600 font-semibold flex items-center">
                        <span className="mr-2">✅</span>Cross-Platform Support:
                        Web, Mobile, Desktop
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 bg-purple-50/50 p-4 sm:p-6 rounded-lg border border-purple-100">
                    <h3 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 flex items-center">
                      <span className="mr-4 text-2xl sm:text-3xl">🧠</span>
                      Advanced Decision-Making Techniques
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        {
                          title: "Instant Responses",
                          description:
                            "Providing immediate yes or no answers to break decision paralysis.",
                          icon: "⚡",
                        },
                        {
                          title: "Unbiased Mechanism",
                          description:
                            "Ensuring true 50/50 probability without external influences.",
                          icon: "🔀",
                        },
                        {
                          title: "Contextual Flexibility",
                          description:
                            "Adaptable for various decision-making scenarios.",
                          icon: "🌈",
                        },
                      ].map((technique, index) => (
                        <div
                          key={index}
                          className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
                        >
                          <div className="flex items-center mb-2">
                            <span className="text-xl sm:text-2xl mr-3">
                              {technique.icon}
                            </span>
                            <h4 className="text-sm sm:text-base font-semibold text-gray-800">
                              {technique.title}
                            </h4>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {technique.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </div>

              <div className="mt-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 sm:p-8 rounded-3xl shadow-xl">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mr-4 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 sm:h-8 sm:w-8 text-white"
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
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-800">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        question: "How random are the yes or no responses?",
                        answer:
                          "Our yes-no generator uses advanced cryptographically secure random number generation to ensure a truly unbiased 50/50 probability. Each response is generated independently, providing a completely random outcome.",
                        icon: "🎲",
                        color: "from-blue-500 to-indigo-600",
                      },
                      {
                        question:
                          "Can I use the generator for serious decisions?",
                        answer:
                          "While our generator is fun and provides an unbiased perspective, it should not be used for critical life-changing decisions. It's best used for light-hearted situations, breaking decision deadlocks, or adding spontaneity to choices.",
                        icon: "🤔",
                        color: "from-green-500 to-teal-600",
                      },
                      {
                        question: "Is the yes-no generation secure?",
                        answer:
                          "Yes, the generation process is entirely client-side and uses cryptographically secure random number generation. No personal data is collected or stored during the process.",
                        icon: "🔐",
                        color: "from-purple-500 to-indigo-600",
                      },
                      {
                        question:
                          "What are the practical applications of a yes-no generator?",
                        answer:
                          "Our generator is versatile - great for party games, breaking decision paralysis, creative brainstorming, team-building exercises, and adding an element of randomness to everyday choices.",
                        icon: "🌐",
                        color: "from-pink-500 to-red-600",
                      },
                      {
                        question:
                          "How quickly does the generator produce a response?",
                        answer:
                          "The yes-no generator provides instant results, typically generating a response in milliseconds. It's designed for quick, spontaneous decision-making.",
                        icon: "⚡",
                        color: "from-orange-500 to-yellow-600",
                      },
                      {
                        question: "Can I reset or regenerate a response?",
                        answer:
                          "Absolutely! You can spin the wheel multiple times to get different responses. Each spin is completely independent and provides a fresh, random yes or no answer.",
                        icon: "🔄",
                        color: "from-emerald-500 to-green-600",
                      },
                      {
                        question: "Are there any limitations to the generator?",
                        answer:
                          "The generator is designed for simple yes-or-no questions. It provides a 50/50 chance response and is meant to be a fun, lighthearted tool for decision-making.",
                        icon: "🌈",
                        color: "from-cyan-500 to-blue-600",
                      },
                      {
                        question: "How is this different from flipping a coin?",
                        answer:
                          "While similar in principle, our digital generator uses advanced cryptographic techniques for randomness, ensuring a more sophisticated and truly random approach compared to a physical coin flip.",
                        icon: "🧮",
                        color: "from-violet-500 to-purple-600",
                      },
                      {
                        question: "Can I use the generator on mobile devices?",
                        answer:
                          "Yes! The yes-no generator is fully responsive and works seamlessly across desktop, tablet, and mobile devices, providing a consistent experience everywhere.",
                        icon: "📱",
                        color: "from-rose-500 to-pink-600",
                      },
                      {
                        question: "Is the generator truly random?",
                        answer:
                          "Our generator uses cryptographically secure pseudo-random number generation, providing a level of randomness that is statistically indistinguishable from true randomness.",
                        icon: "🔮",
                        color: "from-amber-500 to-orange-600",
                      },
                    ].map((faq, index) => (
                      <div
                        key={index}
                        className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div
                          className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${faq.color} transform origin-top transition-transform duration-300 group-hover:scale-y-110`}
                        ></div>
                        <div className="p-6 pl-8">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl mr-4 opacity-80">
                              {faq.icon}
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                              {faq.question}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
                    <p className="text-sm sm:text-base text-blue-800 flex items-center justify-center">
                      <span className="mr-3 text-2xl">💡</span>
                      <Link
                        href="/contact"
                        className="text-blue-600 hover:underline"
                      >
                        Can&apos;t find your question? Reach out to our support
                        team for personalized assistance!
                      </Link>
                    </p>
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
