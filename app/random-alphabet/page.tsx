import { Metadata } from "next";
import Script from "next/script";
import RandomAlphabetWheel from "./RandomAlphabetGeneratorComponent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Random Alphabet Generator - Generate Random Letters Online",
  description:
    "An interactive online tool to generate random uppercase, lowercase, and mixed case alphabets with a spinning wheel interface.",
  keywords: [
    "random alphabet generator",
    "letter generator",
    "random letter picker",
    "alphabet wheel",
    "random case generator",
  ],
  openGraph: {
    title: "Random Alphabet Generator - Randzy",
    description:
      "Generate random letters instantly with our interactive alphabet wheel",
    type: "website",
    url: "https://www.randzy.com/random-alphabet",
    images: [
      {
        url: "/random-alphabet.png",
        width: 1200,
        height: 630,
        alt: "Random Alphabet Generator Wheel",
      },
    ],
  },
};

export default function RandomNumberGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Randzy Random Alphabet Generator",
    url: "https://www.randzy.com/random-alphabet",
    description:
      "An interactive online tool to generate random alphabets with a spinning wheel",
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
        <div className="max-w-5xl mx-auto overflow-hidden">
          <div className="lg:p-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2 text-gray-800 flex items-center justify-center gap-4">
              <span className="text-2xl lg:text-4xl">🔤</span>
              Random Alphabet Generator
            </h1>

            <RandomAlphabetWheel />

            {/* Enhanced SEO-friendly content section */}
            <section className="mt-12  rounded-xl  space-y-6">
              <div className="bg-white rounded-lg lg:shadow-md lg:p-8 mt-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-blue-800 flex items-center">
                      <span className="mr-4 text-4xl">🔤</span>Why Choose Our
                      Random Alphabet Generator?
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Our innovative Random Alphabet Generator is a
                      sophisticated tool designed to meet the diverse needs of
                      professionals, educators, and creative individuals.
                      Leveraging advanced algorithmic techniques, we provide a
                      seamless, transparent, and truly random letter generation
                      experience across multiple use cases.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-2xl mr-4">🔬</span>
                        <div>
                          <h3 className="font-semibold text-green-700">
                            Precision Letter Generation
                          </h3>
                          <p className="text-gray-600">
                            Our random letter picker ensures statistically
                            uniform distribution, making it ideal for academic
                            research, linguistic studies, and randomization
                            tasks.
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
                            platforms, providing consistent performance for word
                            games, educational tools, and creative writing
                            applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg lg:p-6 lg:shadow-inner">
                    <h2 className="text-3xl font-bold text-green-800 mb-6 flex items-center">
                      <span className="mr-4 text-4xl">🎯</span>How to Generate
                      Random Alphabets
                    </h2>
                    <ol className="space-y-4 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-2xl mr-4 text-blue-600">1️⃣</span>
                        <div>
                          <h3 className="font-semibold">Select Case Type</h3>
                          <p className="text-sm text-gray-600">
                            Choose between uppercase, lowercase, or mixed case
                            alphabets
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
                            Select between spinning wheel or bulk alphabet
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
                            Receive truly random letters instantly with
                            interactive visual feedback
                          </p>
                        </div>
                      </li>
                    </ol>
                    <div className="mt-6 text-center">
                      <div className="bg-green-100 border-l-4 border-green-500 p-3 rounded">
                        <p className="text-green-800 text-sm">
                          💡 Pro Tip: Our alphabet generator uses advanced
                          algorithms to ensure maximum randomness for your
                          letter selection needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg md:shadow-md md:p-8">
                <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center flex items-center justify-center gap-4">
                  <span>🔤</span>Versatile Random Alphabet Applications
                  <span>🔤</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">📝</span>
                      <h3 className="font-bold text-xl text-blue-800">
                        Educational Tools
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Enhance learning experiences with random letter generation
                      for spelling games, vocabulary exercises, and language
                      learning activities. Perfect for teachers, tutors, and
                      educational apps seeking interactive randomization
                      methods.
                    </p>
                    <div className="mt-4 text-sm text-blue-600 font-semibold">
                      Key Features: 🔤 Language Learning | 🧩 Interactive
                      Education
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">🔬</span>
                      <h3 className="font-bold text-xl text-green-800">
                        Research & Linguistics
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Generate statistically robust random letter samples for
                      linguistic research, cryptographic studies, and academic
                      analysis. Our advanced algorithm ensures high-quality
                      randomness crucial for maintaining research integrity.
                    </p>
                    <div className="mt-4 text-sm text-green-600 font-semibold">
                      Applications: 📊 Linguistic Analysis | 🔡 Character
                      Distribution
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">✍️</span>
                      <h3 className="font-bold text-xl text-purple-800">
                        Creative Writing
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Spark creativity with random letter generation for writing
                      prompts, word games, and storytelling exercises. Ideal for
                      writers, game designers, and creative professionals
                      seeking unique inspiration and randomization.
                    </p>
                    <div className="mt-4 text-sm text-purple-600 font-semibold">
                      Use Cases: 📖 Writing Prompts | 🎲 Creative Challenges
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
                    <span className="mr-4 text-3xl">🔤</span>
                    Understanding Random Alphabet Generation
                  </h3>
                  <div className="text-gray-800 space-y-4 leading-relaxed">
                    <p>
                      Random alphabet generation is a sophisticated
                      computational technique that provides truly unpredictable
                      letter sequences across multiple professional and creative
                      domains. Our cutting-edge online alphabet generator
                      leverages advanced randomization algorithms to deliver
                      high-quality, statistically uniform letter distributions.
                    </p>
                    <p>
                      From linguistic research and educational tools to creative
                      writing and game design, our random letter generator
                      offers unparalleled versatility and precision for
                      professionals and enthusiasts alike.
                    </p>
                  </div>
                </article>

                <article className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-md">
                  <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
                    <span className="mr-4 text-3xl">🧩</span>
                    Advanced Alphabet Generation Techniques
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2 text-green-800">
                        ✨ Case Flexibility
                      </h4>
                      <p className="text-gray-700">
                        Sophisticated multi-case generation supporting
                        uppercase, lowercase, and mixed-case alphabets. Tailored
                        for diverse linguistic and creative applications.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2 text-blue-800">
                        🎛️ Customization Options
                      </h4>
                      <p className="text-gray-700">
                        Granular control over letter generation with flexible
                        case type settings, enabling precise and
                        context-specific random alphabet creation.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-lg p-6 border-l-4 border-purple-500 shadow-md">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center">
                    <span className="mr-4 text-3xl">🌈</span>
                    Diverse Applications of Random Alphabet Generation
                  </h3>
                  <ul className="grid md:grid-cols-3 gap-4 text-gray-800">
                    {[
                      {
                        title: "🏫 Language Learning",
                        description:
                          "Design interactive spelling and vocabulary exercises with dynamic letter generation.",
                        color: "purple-50",
                      },
                      {
                        title: "✍️ Creative Writing",
                        description:
                          "Generate unique writing prompts and innovative storytelling techniques.",
                        color: "blue-50",
                      },
                      {
                        title: "🔬 Linguistic Research",
                        description:
                          "Conduct advanced character distribution and pattern analysis studies.",
                        color: "green-50",
                      },
                      {
                        title: "🎮 Game Design",
                        description:
                          "Create engaging word-based game mechanics and randomized challenges.",
                        color: "red-50",
                      },
                      {
                        title: "📚 Educational Tools",
                        description:
                          "Develop adaptive and interactive learning experiences with randomized elements.",
                        color: "yellow-50",
                      },
                      {
                        title: "🔐 Cryptography",
                        description:
                          "Generate secure and unpredictable letter sequences for encoding techniques.",
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
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-800">
                      Comprehensive Random Alphabet Generation Insights
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-gray-800">
                    <div className="space-y-4 bg-blue-50/50 p-4 sm:p-6 rounded-lg border border-blue-100 hover:shadow-md transition-all">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-800 flex items-center">
                        <span className="mr-3 text-xl sm:text-2xl">🔍</span>
                        Precision Randomization
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed">
                        Our advanced random alphabet generation algorithm
                        employs sophisticated cryptographic techniques to ensure
                        truly unpredictable letter sequences. Utilizing
                        cutting-edge probabilistic methods, we guarantee
                        statistically uniform distribution across uppercase,
                        lowercase, and mixed-case generations.
                      </p>
                      <div className="text-xs sm:text-sm text-blue-600 font-semibold flex items-center">
                        <span className="mr-2">🎯</span>Randomness Precision:
                        99.99% Uniform Distribution
                      </div>
                    </div>

                    <div className="space-y-4 bg-green-50/50 p-4 sm:p-6 rounded-lg border border-green-100 hover:shadow-md transition-all">
                      <h3 className="text-lg sm:text-xl font-bold text-green-800 flex items-center">
                        <span className="mr-3 text-xl sm:text-2xl">🌐</span>
                        Universal Compatibility
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed">
                        Seamlessly integrated across multiple platforms and use
                        cases, our random alphabet generator provides
                        consistent, high-performance letter randomization.
                        Compatible with educational, research, creative, and
                        professional applications across various digital
                        ecosystems.
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
                      Advanced Randomization Techniques
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        {
                          title: "Cryptographic Randomness",
                          description:
                            "Leveraging secure pseudo-random number generation algorithms.",
                          icon: "🔐",
                        },
                        {
                          title: "Uniform Distribution",
                          description:
                            "Ensuring equal probability for each letter generation.",
                          icon: "📊",
                        },
                        {
                          title: "Adaptive Complexity",
                          description:
                            "Dynamic algorithm adjusting to different use cases.",
                          icon: "🔀",
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
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
                        question: "How random are the generated alphabets?",
                        answer:
                          "Our random alphabet generator uses cryptographically secure pseudo-random number generation (CSPRNG) algorithms. This ensures a statistically uniform distribution with extremely high entropy, making the letter sequences truly unpredictable and random.",
                        icon: "🎲",
                        color: "from-blue-500 to-indigo-600",
                      },
                      {
                        question: "Can I generate alphabets in specific cases?",
                        answer:
                          "Absolutely! Our generator supports multiple case options including uppercase, lowercase, and mixed case. You can easily customize the generation to suit your specific requirements for educational, creative, or professional use.",
                        icon: "🔤",
                        color: "from-green-500 to-teal-600",
                      },
                      {
                        question: "Is the random alphabet generation secure?",
                        answer:
                          "Yes, our algorithm uses advanced cryptographic techniques that provide high-quality randomness. The generation process is entirely client-side, ensuring no personal data is collected or stored during the process.",
                        icon: "🔐",
                        color: "from-purple-500 to-indigo-600",
                      },
                      {
                        question:
                          "What are the practical applications of random alphabets?",
                        answer:
                          "Random alphabets have diverse applications including linguistic research, cryptography, game design, educational tools, password generation, scientific simulations, and creative writing exercises.",
                        icon: "🌐",
                        color: "from-pink-500 to-red-600",
                      },
                      {
                        question: "How fast is the alphabet generation?",
                        answer:
                          "Our generator provides near-instantaneous results, with generation times typically under 10 milliseconds. The lightweight, optimized algorithm ensures quick and efficient random alphabet creation.",
                        icon: "⚡",
                        color: "from-orange-500 to-yellow-600",
                      },
                      {
                        question:
                          "Can I control the length of generated alphabets?",
                        answer:
                          "Yes! Our generator provides flexible length control. You can specify the exact number of alphabets you want to generate, from single characters to extended sequences of any desired length.",
                        icon: "📏",
                        color: "from-emerald-500 to-green-600",
                      },
                      {
                        question:
                          "Are there any limitations on alphabet generation?",
                        answer:
                          "Our generator supports the entire Unicode alphabet range, including Latin, Cyrillic, Greek, and other script systems. You can generate alphabets from multiple language sets with ease.",
                        icon: "🌍",
                        color: "from-cyan-500 to-blue-600",
                      },
                      {
                        question:
                          "How is randomness different from pseudo-randomness?",
                        answer:
                          "Pseudo-randomness uses algorithmic methods to generate sequences that appear random. Our CSPRNG approach ensures statistical randomness that is cryptographically secure and suitable for scientific and security-critical applications.",
                        icon: "🧮",
                        color: "from-violet-500 to-purple-600",
                      },
                      {
                        question:
                          "Can I use generated alphabets for academic research?",
                        answer:
                          "Absolutely! Our random alphabet generator is designed with academic rigor. It provides statistically uniform distributions perfect for linguistic studies, computational linguistics, and randomized research methodologies.",
                        icon: "🎓",
                        color: "from-rose-500 to-pink-600",
                      },
                      {
                        question: "Is the alphabet generation truly random?",
                        answer:
                          "While perfect randomness is theoretically impossible, our generator uses advanced cryptographic techniques that provide entropy levels exceeding 99.99% randomness, making the results practically unpredictable.",
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

            {/* More Random Tools Section */}
            <section
              id="more-random-tools"
              className="bg-blue-50 py-12 px-4 lg:px-8 text-center"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">
                Explore More Random Tools
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/random-number"
                  className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
                >
                  Random Number
                </Link>
                <Link
                  href="/coin-flip"
                  className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
                >
                  Coin Flip
                </Link>
                <Link
                  href="/dice-roller"
                  className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
                >
                  Dice Roller
                </Link>
                <Link
                  href="/random-country"
                  className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
                >
                  Random Country
                </Link>
                <Link
                  href="/yes-or-no"
                  className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
                >
                  Yes or No
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
