import React from "react";
import CalorieCalculator from "./CalorieCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calorie Calculator - Personalized Nutrition Insights",
  description:
    "Calculate your daily calorie needs based on age, gender, height, weight, and activity level. Get personalized recommendations for weight loss, maintenance, and weight gain.",
  keywords: [
    "calorie calculator",
    "nutrition",
    "weight loss",
    "weight gain",
    "metabolism",
    "daily calories",
  ],
  openGraph: {
    title: "Calorie Calculator: Personalized Nutrition Insights",
    description:
      "Calculate your daily calorie needs based on age, gender, height, weight, and activity level. Get personalized recommendations for weight loss, maintenance, and weight gain.",
    type: "website",
    url: "https://www.randzy.com/calorie-calculator",
    images: [
      {
        url: "/calorie.png",
        width: 1200,
        height: 630,
        alt: "Calorie Calculator - Health Assessment Tool",
      },
    ],
  },
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Calorie Calculator
        </h1>
      </section>

      <CalorieCalculator />

      <section className="mt-12 max-w-2xl mx-auto text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">
          How Our Calorie Calculator Works
        </h2>
        <p className="mb-4">
          Our calorie calculator takes into account several key factors to
          estimate your daily calorie needs:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Basal Metabolic Rate (BMR) based on age, gender, height, and weight
          </li>
          <li>Activity level to adjust calorie expenditure</li>
          <li>Specific goals: weight loss, maintenance, or weight gain</li>
        </ul>
        <p className="mt-4">
          Remember, these are estimates. Individual metabolism varies, and
          consulting with a nutritionist can provide more personalized advice.
        </p>
      </section>

      <section className="mt-12 max-w-2xl mx-auto text-gray-700 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Understanding Calorie Intake and Nutrition
        </h2>
        <div className="space-y-4">
          <p>
            Calories are the fundamental unit of energy in nutrition, playing a
            crucial role in maintaining, losing, or gaining weight. Our
            comprehensive calorie calculator is designed to provide you with
            personalized insights into your daily energy requirements.
          </p>
          <p>
            Every individual has unique nutritional needs based on factors like
            age, gender, physical characteristics, and activity level. By
            accurately calculating your daily calorie needs, you can make
            informed decisions about diet and exercise, whether your goal is
            weight management, muscle building, or overall health optimization.
          </p>
          <h3 className="text-xl font-semibold mt-6 text-gray-800">
            Key Factors in Calorie Calculation
          </h3>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              Basal Metabolic Rate (BMR): The calories your body burns at rest
            </li>
            <li>
              Physical Activity Level: Additional calories burned through
              exercise and daily movements
            </li>
            <li>
              Body Composition: Muscle mass and body fat percentage impact
              metabolism
            </li>
            <li>
              Age and Gender: Metabolic rates change throughout life stages
            </li>
          </ul>
          <p className="mt-4 italic text-gray-600">
            Note: While our calculator provides a scientifically-based estimate,
            individual metabolic variations exist. For personalized nutrition
            plans, consult with a registered dietitian or nutritionist.
          </p>
        </div>
      </section>

      <section className="mt-12 max-w-3xl mx-auto text-gray-700 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100/50">
        <div className="flex items-center mb-6">
          <span className="text-4xl mr-4">🔬</span>
          <h2 className="text-3xl font-bold text-blue-900 tracking-tight">
            Nutrition Science Meets Personalization
          </h2>
        </div>

        <div className="space-y-5">
          <div className="flex items-start space-x-4">
            <span className="text-2xl mt-1">⚖️</span>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Precision Calorie Insights
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Calories are more than just numbers—they&apos;re the fundamental
                energy currency of nutrition. Our advanced calculator goes
                beyond simple calculations, providing a holistic view of your
                metabolic profile with scientifically-backed precision.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-2xl mt-1">🧬</span>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Personalized Metabolic Mapping
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every body is unique. We analyze multiple critical factors
                including age, gender, body composition, and activity level to
                create a tailored nutritional blueprint that adapts to your
                individual physiological needs.
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
              <span className="mr-3">📊</span>Key Metabolic Factors
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">✦</span> Basal Metabolic Rate (BMR): Your
                body&apos;s energy at complete rest
              </li>
              <li className="flex items-center">
                <span className="mr-2">✦</span> Physical Activity Level:
                Calories burned through movement
              </li>
              <li className="flex items-center">
                <span className="mr-2">✦</span> Body Composition: Muscle-to-fat
                ratio impact
              </li>
              <li className="flex items-center">
                <span className="mr-2">✦</span> Hormonal and Genetic Influences
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50/50 border border-yellow-100 p-4 rounded-lg text-center">
            <p className="text-yellow-900 italic flex items-center justify-center">
              <span className="mr-3">🩺</span>
              Professional Guidance Recommended: Individual metabolic variations
              exist. Consult a registered dietitian for personalized nutrition
              strategies.
              <span className="ml-3">🍎</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
