import React from "react";
import BMICalculator from "./BMICalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator: Comprehensive Health & Weight Assessment Guide",
  description:
    "Discover your Body Mass Index (BMI) with our advanced calculator. Learn about health risks, nutrition, and body composition. Get personalized insights for a healthier lifestyle.",
  keywords: [
    "BMI calculator",
    "body mass index",
    "health assessment",
    "weight management",
    "nutrition",
    "fitness",
    "body composition",
    "health risks",
  ],
  openGraph: {
    title: "BMI Calculator: Comprehensive Health & Weight Assessment Guide",
    description:
      "Discover your Body Mass Index (BMI) with our advanced calculator. Learn about health risks, nutrition, and body composition. Get personalized insights for a healthier lifestyle.",
    type: "website",
    url: "https://www.randzy.com/bmi-calculator",
    images: [
      {
        url: "/bmi-logo.PNG",
        width: 1200,
        height: 630,
        alt: "BMI Calculator - Health Assessment Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator: Comprehensive Health & Weight Assessment Guide",
    description:
      "Discover your Body Mass Index (BMI) with our advanced calculator. Learn about health risks, nutrition, and body composition. Get personalized insights for a healthier lifestyle.",
    images: ["/bmi-logo.PNG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const BMICalculatorPage = () => {
  return (
    <div className="mx-auto px-4 py-8">
      <section>
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          🏋️ BMI Calculator
        </h1>
        <BMICalculator />
      </section>

      <section className="mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-6 bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-blue-800">
              What is BMI? 📊
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Body Mass Index (BMI) is a simple yet effective screening tool
              that estimates body fat based on your height and weight. It helps
              assess potential health risks associated with weight categories.
            </p>
          </div>

          <div className="mb-6 bg-green-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-green-800">
              BMI Calculation Formula 🧮
            </h2>
            <p className="text-gray-700 leading-relaxed">
              BMI is calculated by dividing your weight (kg) by your height (m)
              squared:
              <br />
              <code className="bg-gray-100 p-1 rounded">
                BMI = weight (kg) / (height (m))²
              </code>
            </p>
          </div>

          <div className="mt-6 bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600">
              ⚠️ Note: BMI is a screening tool, not a diagnostic test. Consult
              healthcare professionals for a comprehensive health assessment.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-6 bg-teal-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-teal-800">
              BMI and Long-Term Health Implications 🩺
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Understanding your Body Mass Index (BMI) is crucial for predicting
              potential long-term health risks. Research shows that maintaining
              a healthy BMI can significantly reduce the likelihood of chronic
              diseases and improve overall quality of life.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-6 bg-orange-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-orange-800">
              Global Health Perspectives on BMI 🌍
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-gray-700">Cultural Variations</h3>
                <p className="text-gray-600">
                  BMI standards can vary across different populations and ethnic
                  groups. What's considered a healthy weight differs based on
                  genetic and environmental factors.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">
                  Global Health Trends
                </h3>
                <p className="text-gray-600">
                  Worldwide obesity rates have tripled since 1975. Understanding
                  and managing BMI is crucial in addressing global health
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-6 bg-pink-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-pink-800">
              Beyond BMI: Holistic Health Assessment 💖
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Body Composition:</strong> Measure of fat, muscle, and
                bone mass
              </li>
              <li>
                <strong>Metabolic Health:</strong> Insulin sensitivity and
                cholesterol levels
              </li>
              <li>
                <strong>Lifestyle Factors:</strong> Diet, exercise, stress
                management
              </li>
              <li>
                <strong>Genetic Predispositions:</strong> Family health history
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              While BMI is a useful screening tool, a comprehensive health
              assessment requires considering multiple factors beyond a single
              metric.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-6 bg-red-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-red-800">
              Nutrition and BMI: A Balanced Approach 🥗
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-gray-700">Balanced Nutrition</h3>
                <p className="text-gray-600">
                  Proper nutrition is key to maintaining a healthy BMI. Focus on
                  whole foods, balanced macronutrients, and portion control.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Dietary Strategies</h3>
                <p className="text-gray-600">
                  Implement sustainable eating habits that support your body's
                  nutritional needs while helping manage weight effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="mb-6  p-4">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
              📋 Frequently Asked Questions About BMI
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-700 mb-2">
                  Does BMI Calculation Depend on Gender? 🚻
                </h3>
                <p className="text-gray-600">
                  The standard BMI formula is the same for both men and women.
                  However, body composition and fat distribution can differ
                  between genders. Athletes and muscular individuals may have a
                  higher BMI due to muscle mass, which doesn't necessarily
                  indicate poor health.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">
                  How Does Age Affect BMI Interpretation? 👵👦
                </h3>
                <p className="text-gray-600">
                  BMI standards can vary slightly with age. For children and
                  teenagers, BMI is age and sex-specific, using percentile
                  charts. For adults, the standard BMI categories remain
                  consistent, but metabolism and body composition naturally
                  change with aging.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">
                  Is BMI Accurate for Athletes and Muscular People? 💪
                </h3>
                <p className="text-gray-600">
                  BMI may not be the most accurate measure for athletes or
                  people with high muscle mass. Muscle is denser than fat, so
                  muscular individuals might have a high BMI despite being very
                  fit. Alternative methods like body fat percentage provide more
                  precise measurements.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">
                  Do Ethnic Differences Impact BMI? 🌐
                </h3>
                <p className="text-gray-600">
                  Different ethnic groups may have different body compositions
                  and health risks at the same BMI. For example, Asian
                  populations might have higher health risks at lower BMI levels
                  compared to other ethnic groups.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">
                  How Often Should I Calculate My BMI? 📅
                </h3>
                <p className="text-gray-600">
                  It's recommended to check your BMI every 3-6 months. However,
                  focus on overall health trends rather than minor fluctuations.
                  Consistent diet, exercise, and lifestyle changes are more
                  important than occasional BMI measurements.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">
                  Can Pregnant Women Use BMI? 🤰
                </h3>
                <p className="text-gray-600">
                  BMI is not recommended during pregnancy. Weight gain is
                  natural and essential during pregnancy. Consult healthcare
                  professionals for appropriate weight management during this
                  period.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">
                  ⚠️ Important Disclaimer
                </h3>
                <p className="text-gray-700">
                  BMI is a screening tool, not a diagnostic method. Always
                  consult healthcare professionals for comprehensive health
                  assessments. Individual health varies, and BMI should be
                  considered alongside other health indicators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BMICalculatorPage;
