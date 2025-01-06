import React from 'react'
import CalorieCalculator from './CalorieCalculator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calorie Calculator - Personalized Nutrition Insights',
  description: 'Calculate your daily calorie needs based on age, gender, height, weight, and activity level. Get personalized recommendations for weight loss, maintenance, and weight gain.',
  keywords: ['calorie calculator', 'nutrition', 'weight loss', 'weight gain', 'metabolism', 'daily calories'],
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

}



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
        <h2 className="text-2xl font-semibold mb-4">How Our Calorie Calculator Works</h2>
        <p className="mb-4">
          Our calorie calculator takes into account several key factors to estimate your daily calorie needs:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Basal Metabolic Rate (BMR) based on age, gender, height, and weight</li>
          <li>Activity level to adjust calorie expenditure</li>
          <li>Specific goals: weight loss, maintenance, or weight gain</li>
        </ul>
        <p className="mt-4">
          Remember, these are estimates. Individual metabolism varies, and consulting with a nutritionist 
          can provide more personalized advice.
        </p>
      </section>
    </div>
  )
}