import FlagQuiz from "@/components/FlagQuiz";
import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "🌍 Flag & Country Quiz | Test Your Global Geography Knowledge",
  description:
    "Challenge your knowledge with our Flag & Country Quiz. Guess flags and countries from around the world. Fun and educational for all ages. Start your global adventure!",
  keywords: [
    "flag quiz",
    "country quiz",
    "guess the flag",
    "guess the country",
    "world flags",
    "national flags",
    "geography quiz",
    "educational game",
    "trivia quiz",
    "learn flags",
    "learn countries",
  ],
  alternates: {
    canonical: "https://www.randzy.com/flag-quiz", // Replace with your website URL
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
    title: "🌍 Flag & Country Quiz - Test Your Geography Skills",
    description:
      "Test your knowledge of flags and countries with our engaging quiz. Learn and have fun!",
    type: "website",
    locale: "en_US",
    siteName: "Randzy", // Replace with your site name
    images: [
      {
        url: "/flag-country-quiz.PNG", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Flag and Country Quiz - Test Your Global Knowledge!",
      },
    ],
    url: `https://www.randzy.com/flag-quiz`, // Replace with your website URL
  },
  twitter: {
    card: "summary_large_image",
    title: "🌍 Flag & Country Quiz",
    description:
      "Test your knowledge of flags and countries with our engaging quiz.",
    images: ["/flag-country-quiz.PNG"], // Replace with your image URL
  },
};

const FlagQuizPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Flag & Country Quiz: Test Your Global Knowledge",
    url: "https://www.randzy.com/flag-quiz", // Replace with your website URL
    description:
      "Challenge your geography skills with our interactive Flag & Country Quiz. Guess flags and countries from around the world. Perfect for learning and fun!",
    applicationCategory: "EducationalGame", // Or "EducationalApplication" if more formal
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    keywords:
      "flag quiz, country quiz, guess the flag, guess the country, geography quiz, world flags, national flags, countries of the world, educational game, trivia", // Add relevant keywords
    about: {
      "@type": "Thing",
      name: "Global Geography",
      description:
        "Test and improve your knowledge of global geography, including flags and countries.",
    },
    featureList: [
      "Extensive database of over 200 national flags and countries.",
      "Interactive and engaging gameplay with immediate feedback.",
      "Randomized question sequencing for a fresh challenge every time.",
      "Mobile-friendly design for playing on any device.",
      "Educational content enhancing global awareness.",
      "Progress tracking and scoring to monitor improvement.",
      "Regular content updates to keep information current.",
      "Accessible for all skill levels, from beginners to experts.",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Geography Enthusiasts, Students, Trivia Lovers",
    },
    educationalAlignment: [
      {
        "@type": "EducationalAlignment",
        educationalFramework: "General Knowledge",
        targetDescription: "Understanding of flags and countries worldwide.",
        targetName: "Global Geography",
      },
    ],
    isAccessibleForFree: true,
    potentialAction: {
      "@type": "PlayAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.randzy.com/flag-quiz", // Replace with your website URL
      },
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
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2 text-gray-800 flex items-center justify-center gap-4">
            <span className="text-2xl lg:text-4xl">🌍</span>
            Guess the Flag & Country Quiz!
          </h1>

          <FlagQuiz />

          <section className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Table of Contents
            </h2>
            <nav className="space-y-2">
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#overview">Overview</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#how-to-play">How to Play</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#features">Features of Our Flag & Country Quiz</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#why-play">Why Play Our Guess the Flag Quiz?</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#tips">Tips to Improve Your Country Quiz Score</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#faq">Frequently Asked Questions</a>
              </div>
              <div className="text-lg font-semibold hover:text-blue-600 transition-colors duration-300">
                <a href="#resources">Related Resources & Further Reading</a>
              </div>
            </nav>
          </section>

          <section id="overview" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              Test Your Knowledge with the Ultimate Flag & Country Quiz
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              Embark on a captivating journey around the globe with our engaging{" "}
              <strong>Flag Quiz</strong> and <strong>Country Quiz</strong>.
              Ideal for geography enthusiasts and casual learners alike, our
              quizzes offer a fun and educational way to test your knowledge.
              Challenge yourself to <strong>guess the flag</strong> of nations
              far and wide, or dive into the details of global geography by
              attempting to <strong>guess the country</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Our platform provides an <strong>interactive gameplay</strong>{" "}
              experience, complete with stunning visuals and a continuously
              updated database of flags and country names. Whether you&apos;re
              aiming to improve your general knowledge or simply seeking a
              stimulating mental exercise, our quizzes are designed to deliver.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Are you ready to see how well you know the world? Dive into our{" "}
              <strong>flag quiz</strong> and <strong>country quiz</strong>{" "}
              challenges and discover a world of facts and fun. Perfect for
              students, travelers, and trivia lovers, our quizzes make learning
              about global flags and countries enjoyable and accessible.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Looking for a fun and educational activity? Our{" "}
              <strong>guess the flag</strong> and{" "}
              <strong>guess the country</strong> games are perfect for
              individuals and groups. Challenge your friends and family, or test
              your own skills in a solo adventure. With our intuitive interface
              and diverse range of questions, you&apos;ll be entertained and
              enlightened with every round.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Enhance your global awareness and master the art of identifying
              flags and countries. Play our <strong>Flag Quiz</strong> and{" "}
              <strong>Country Quiz</strong> today and take your geographical
              knowledge to new heights!
            </p>
          </section>

          <section id="how-to-play" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              How to Play the Flag & Country Quiz: Your Guide to Global
              Discovery
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              Dive into the exciting world of geography with our user-friendly{" "}
              <strong>flag quiz</strong> and <strong>country quiz</strong>.
              Getting started is simple and fun, designed for players of all
              ages and skill levels. Here&apos;s your step-by-step guide to
              mastering our quizzes:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed mx-auto mt-4">
              <li>
                <strong>Visual or Textual Clues:</strong> You&apos;ll be
                presented with either a vibrant flag image or a country name on
                your screen.
              </li>
              <li>
                <strong>Multiple-Choice Options:</strong> Below the image or
                name, you&apos;ll find a selection of multiple-choice answers.
                Choose the one you believe is correct.
              </li>
              <li>
                <strong>Strategic Selection:</strong> Take your time to consider
                each option. Accuracy is key to scoring high!
              </li>
              <li>
                <strong>Instant Feedback:</strong> After selecting your answer,
                you&apos;ll receive immediate feedback. Learn as you play and
                track your progress.
              </li>
              <li>
                <strong>Aim for High Scores:</strong> Each correct answer adds
                to your score. Challenge yourself to identify all flags and
                countries correctly to achieve the highest possible score.
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Whether you&apos;re looking to enhance your geographical
              knowledge, engage in a friendly competition, or simply enjoy a fun
              learning experience, our <strong>guess the country</strong> and{" "}
              <strong>guess the flag</strong> games provide an engaging and
              educational platform.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Our quizzes are designed to be intuitive and accessible, ensuring
              that everyone can participate and enjoy the challenge of
              identifying flags and countries from around the globe. Start your
              journey of discovery today and see how much you know!
            </p>
          </section>

          <section id="features" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              Key Features of Our Flag & Country Quiz: Enhancing Your Global
              Knowledge
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Extensive Flag and Country Database
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our quiz features a comprehensive database of over 200
                  national flags and all recognized countries, ensuring a broad
                  and thorough learning experience. Explore the world&apos;s
                  flags and nations in detail.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Interactive and Engaging Gameplay
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Experience dynamic gameplay with immediate feedback, making
                  learning both effective and enjoyable. Our interactive design
                  keeps you engaged and motivated to improve your{" "}
                  <strong>flag quiz</strong> and <strong>country quiz</strong>{" "}
                  skills.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Randomized Question Sequencing
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Enjoy a fresh challenge every time you play. Our randomized
                  question sequencing ensures that no two quizzes are the same,
                  providing continuous learning and testing your ability to{" "}
                  <strong>guess the flag</strong> and{" "}
                  <strong>guess the country</strong>.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Mobile-Friendly Design
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our quizzes are fully optimized for mobile devices, allowing
                  you to play anytime, anywhere. Enjoy a seamless experience on
                  your smartphone or tablet, making learning on the go easy and
                  convenient.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Educational and Informative Content
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Beyond just testing your knowledge, our quizzes provide
                  educational insights into the cultural and geographical
                  significance of flags and countries, enhancing your overall
                  global awareness.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Progress Tracking and Scoring
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Monitor your progress and track your scores to see how your
                  geographical knowledge improves over time. Compete with
                  yourself and others to achieve the highest scores and enhance
                  your learning experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Regular Content Updates
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We continuously update our database to include the latest
                  flags and country information, ensuring that your knowledge
                  remains current and accurate. Stay up-to-date with global
                  changes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Accessible for All Skill Levels
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our quizzes are designed to be accessible and engaging for
                  everyone, from beginners to advanced geography enthusiasts.
                  Enjoy a user-friendly experience that caters to all skill
                  levels.
                </p>
              </div>
            </div>
          </section>

          <section id="why-play" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              Why Play Our Flag & Country Quiz: Unlock a World of Knowledge
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto">
              Our engaging <strong>flag quiz</strong> and{" "}
              <strong>country quiz</strong> offer more than just entertainment;
              they provide a comprehensive and enjoyable way to expand your
              understanding of global geography. Discover why our quizzes are a
              valuable tool for learning and fun:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed mx-auto mt-4">
              <li>
                <strong>Educational Enrichment:</strong> Delve into the diverse
                world of nations and their symbols, enhancing your geographical
                literacy.
              </li>
              <li>
                <strong>Interactive Engagement:</strong> Experience dynamic
                gameplay with immediate feedback, making learning both effective
                and enjoyable.
              </li>
              <li>
                <strong>Cognitive Challenge:</strong> Sharpen your memory and
                spatial reasoning skills while testing your knowledge of flags
                and countries.
              </li>
              <li>
                <strong>Global Competition:</strong> Join a community of players
                worldwide and compare your scores, adding a competitive edge to
                your learning.
              </li>
              <li>
                <strong>Cultural Awareness:</strong> Gain insights into the
                cultural significance of flags and the diverse landscapes of
                countries around the globe.
              </li>
              <li>
                <strong>Accessible Learning:</strong> Our quizzes are designed
                for all ages and skill levels, making geographical education
                accessible to everyone.
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mx-auto mt-6">
              Ready to <strong>guess the flag</strong>, identify countries, and
              embark on a journey of global discovery? Challenge yourself, learn
              new facts, and see how many nations you can recognize. Start
              playing now and unlock a world of knowledge!
            </p>
          </section>

          <section id="tips" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              Tips to Improve Your Country Quiz Score: Master Global Geography
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Familiarize Yourself with Flag Colors and Symbols
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Many flags share common colors and symbols. Understanding
                  these patterns can significantly improve your ability to{" "}
                  <strong>guess the flag</strong> correctly. Pay attention to
                  recurring elements and their cultural significance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Study Geographical Locations and Regions
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Knowing the geographical location of countries can provide
                  crucial clues. Grouping countries by region and understanding
                  their proximity can help you narrow down your choices when you{" "}
                  <strong>guess the country</strong>.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Practice Regularly with Our Quizzes
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Consistent practice is key to improving your scores. Utilize
                  our <strong>flag quiz</strong> and{" "}
                  <strong>country quiz</strong> regularly to reinforce your
                  knowledge and identify areas for improvement. The more you
                  play, the better you&apos;ll become!
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Use Visual Aids and Maps
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Visual aids such as world maps and flag charts can be
                  invaluable learning tools. Refer to them frequently to
                  reinforce your memory of flag designs and country locations.
                  Visual learning enhances retention.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Learn Capital Cities and Key Landmarks
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Knowing capital cities and famous landmarks can provide
                  additional context when identifying countries. These key
                  details often appear in quiz questions, giving you an edge.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Focus on Specific Regions at a Time
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Instead of trying to learn everything at once, focus on
                  specific regions. Mastering one region at a time allows for
                  deeper understanding and better retention, improving your
                  overall <strong>geographical knowledge</strong>.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Utilize Online Resources and Encyclopedias
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Supplement your quiz practice with online resources and
                  encyclopedias. They provide detailed information about flags,
                  countries, and their histories, enhancing your learning
                  experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Review Incorrect Answers and Learn from Mistakes
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Pay close attention to your incorrect answers and use them as
                  learning opportunities. Understand why you got them wrong and
                  reinforce the correct information to avoid repeating mistakes.
                </p>
              </div>
            </div>
          </section>

          <section id="faq" className="py-16 px-2 lg:px-8 text-left">
            <h2 className="text-xl lg:text-2xl font-bold text-blue-900 mb-6 leading-tight mx-auto">
              Frequently Asked Questions About Our Flag & Country Quizzes: Your
              Ultimate Guide
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  How extensive is the flag database in your quiz?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our quiz boasts an extensive collection of over 200 national
                  flags, encompassing every recognized country worldwide. This
                  ensures a comprehensive and educational experience for all
                  users aiming to master their flag recognition skills.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Can I replay the quizzes to improve my geographical knowledge?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Absolutely! You&apos;re welcome to play our{" "}
                  <strong>flag quiz</strong> and <strong>country quiz</strong>{" "}
                  as many times as you&apos;d like. The questions are
                  intelligently randomized with each playthrough, offering a
                  fresh and challenging experience every time, and aiding in
                  solidifying your global knowledge and geographical expertise.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  What is the cost to access your flag and country quizzes?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our <strong>guess the flag</strong> and{" "}
                  <strong>guess the country</strong> games are completely free
                  and readily accessible. We believe in making geographical
                  education available to everyone without any financial
                  barriers, promoting global awareness.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Are the quizzes suitable for all age groups and skill levels?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Yes, our quizzes are designed to be inclusive and engaging for
                  players of all ages and skill levels. Whether you&apos;re a
                  beginner or a seasoned geography enthusiast, you&apos;ll find
                  our quizzes both enjoyable and educational, fostering a love
                  for learning about the world.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  How often is the quiz content updated?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We regularly update our quiz content to ensure accuracy and
                  relevance. This includes adding new flags and countries as
                  they are recognized, keeping your geographical knowledge
                  current.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Can I play the quiz on mobile devices?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Yes, our <strong>flag quiz</strong> and{" "}
                  <strong>country quiz</strong> are fully optimized for mobile
                  devices, allowing you to <strong>guess the flag</strong> or{" "}
                  <strong>guess the country</strong> on the go. Enjoy a seamless
                  experience on any smartphone or tablet.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Are there any tips for improving my score?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To improve your score, focus on learning the common colors and
                  symbols used in flags, and familiarize yourself with the
                  geographical locations of countries. Regular practice with our{" "}
                  <strong>flag quiz</strong> and <strong>country quiz</strong>{" "}
                  will significantly enhance your recognition skills.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Does the quiz provide any educational resources or further
                  reading?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  While our primary focus is on the quiz experience, we
                  encourage users to explore external resources like
                  encyclopedias and geographical websites to deepen their
                  understanding of flags and countries. Learning is a continuous
                  journey!
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Related Resources and Further Reading
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Geography Learning Resources */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Geography Learning Resources
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <a
                        href="https://www.nationalgeographic.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        National Geographic: Countries & Cultures
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cia.gov/the-world-factbook/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        CIA World Factbook: Country Data & Flags
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Interactive Quizzes & Games */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    Interactive Quizzes & Games
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <a
                        href="https://www.sporcle.com/games/category/geography"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors"
                      >
                        Sporcle: Geography & Flag Quizzes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://geoguessr.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors"
                      >
                        GeoGuessr: Test Your Geography Skills
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Technical & Academic Resources */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">
                    Technical & Academic Resources
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <a
                        href="https://en.wikipedia.org/wiki/List_of_sovereign_states"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-600 transition-colors"
                      >
                        Wikipedia: List of Sovereign States & Flags
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.un.org/en/about-us/member-states"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-600 transition-colors"
                      >
                        United Nations: Member Countries
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Closing Quote */}
              <div className="mt-10 text-center bg-blue-100 p-6 rounded-lg">
                <p className="text-gray-800 text-lg italic">
                  &quot;Explore the world one flag at a time!&quot;
                </p>
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
                href="/random-alphabet"
                className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
              >
                Random Alphabet
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
    </>
  );
};

export default FlagQuizPage;
