"use client";

import React, { useState, useEffect } from "react";
import BMIGauge from "./BMIGauge";

export default function BMICalculator() {
  // State for unit systems
  const [heightUnit, setHeightUnit] = useState<"metric" | "imperial">("metric");
  const [weightUnit, setWeightUnit] = useState<"metric" | "imperial">("metric");

  // State for input values
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  // State for calculated BMI
  const [bmi, setBMI] = useState<number | null>(null);

  // Unit conversion and BMI calculation functions
  const calculateBMI = () => {
    let heightInMeters: number;
    let weightInKg: number;

    // Convert height based on selected unit
    if (heightUnit === "metric") {
      // Metric: cm to meters
      heightInMeters = parseFloat(height) / 100;
    } else {
      // Imperial: feet and inches to meters
      const [feet, inches] = height.split(",").map(parseFloat);
      heightInMeters = (feet * 12 + inches) * 0.0254;
    }

    // Convert weight based on selected unit
    if (weightUnit === "metric") {
      // Metric: kg
      weightInKg = parseFloat(weight);
    } else {
      // Imperial: lbs to kg
      weightInKg = parseFloat(weight) * 0.453592;
    }

    // Calculate BMI
    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBMI(calculatedBMI);

      // Send Google Analytics event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "calculate_bmi", {
          event_category: "BMI Calculator",
          event_label: "BMI Calculation",
          value: height + "-" + weight,
        });
      }
    }
  };

  return (
    <div className=" mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="lg:w-1/2">
          {/* Height Input with Unit Switch */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Height
            </label>
            <div className="flex items-center space-x-2 w-full">
              {/* Unit Switch */}
              <div className="flex rounded-md shadow-sm w-1/3">
                <button
                  type="button"
                  className={`px-4 py-2 border ${
                    heightUnit === "metric"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  } border-gray-300 rounded-l-md`}
                  onClick={() => setHeightUnit("metric")}
                >
                  cm
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 border ${
                    heightUnit === "imperial"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  } border-gray-300 rounded-r-md`}
                  onClick={() => setHeightUnit("imperial")}
                >
                  ft, in
                </button>
              </div>

              {/* Height Input */}
              {heightUnit === "metric" ? (
                <div className="flex space-x-2 w-2/3">
                  <input
                    type="number"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="flex-1 block w-full shadow-sm px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              ) : (
                <div className="flex space-x-2 w-2/3">
                  <input
                    type="number"
                    placeholder="Feet"
                    value={height.split(",")[0] || ""}
                    onChange={(e) =>
                      setHeight(
                        `${e.target.value},${height.split(",")[1] || ""}`
                      )
                    }
                    className="w-1/2 shadow-sm px-3 py-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="number"
                    placeholder="Inches"
                    value={height.split(",")[1] || ""}
                    onChange={(e) =>
                      setHeight(
                        `${height.split(",")[0] || ""},${e.target.value}`
                      )
                    }
                    className="w-1/2  shadow-sm px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Weight Input with Unit Switch */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Weight
            </label>
            <div className="flex items-center space-x-2 ">
              {/* Unit Switch */}
              <div className="flex rounded-md shadow-sm w-1/3">
                <button
                  type="button"
                  className={`px-4 py-2 border ${
                    weightUnit === "metric"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  } border-gray-300 rounded-l-md`}
                  onClick={() => setWeightUnit("metric")}
                >
                  kg
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 border ${
                    weightUnit === "imperial"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  } border-gray-300 rounded-r-md`}
                  onClick={() => setWeightUnit("imperial")}
                >
                  lbs
                </button>
              </div>

              {/* Weight Input */}
              <div className="w-2/3">
                <input
                  type="number"
                  placeholder={`Weight (${
                    weightUnit === "metric" ? "kg" : "lbs"
                  })`}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="flex-1 block w-full shadow-sm px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="mb-4">
            <button
              onClick={calculateBMI}
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Calculate BMI
            </button>
          </div>
        </div>

        {/* BMI Gauge */}
        <div className="lg:w-1/2">
          <BMIGauge bmi={bmi} />
        </div>
      </div>
    </div>
  );
}
