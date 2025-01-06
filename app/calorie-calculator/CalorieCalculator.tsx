'use client';

import React, { useState, useEffect } from 'react';

export default function CalorieCalculator() {
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('170');
  const [heightUnit, setHeightUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState<string>('70');
  const [weightUnit, setWeightUnit] = useState<'metric' | 'imperial'>('metric');
  const [activityLevel, setActivityLevel] = useState<number>(1.2);
  const [calories, setCalories] = useState<{
    loseFast: number;
    loseSlow: number;
    loseSuperSlow: number;
    maintain: number;
    gainSuperSlow: number;
    gainSlow: number;
    gainFast: number;
  } | null>(null);

  const convertHeight = () => {
    if (heightUnit === 'metric') return parseFloat(height);
    
    const [feet, inches] = height.split(',').map(Number);
    return Math.round((feet * 30.48 + (inches || 0) * 2.54));
  };

  const convertWeight = () => {
    if (weightUnit === 'metric') return parseFloat(weight);
    
    return Math.round(parseFloat(weight) * 0.453592);
  };

  const calculateCalories = () => {
    // Mifflin-St Jeor Equation for Basal Metabolic Rate (BMR)
    const convertedHeight = convertHeight();
    const convertedWeight = convertWeight();
    
    const bmr = gender === 'male'
      ? 88.362 + (13.397 * convertedWeight) + (4.799 * convertedHeight) - (5.677 * age)
      : 447.593 + (9.247 * convertedWeight) + (3.098 * convertedHeight) - (4.330 * age);

    // Adjust for activity level
    const maintenanceCalories = Math.round(bmr * activityLevel);

    // Calculate different calorie scenarios
    setCalories({
      loseFast: maintenanceCalories - 1000,  // 2 lb per week
      loseSlow: maintenanceCalories - 500,   // 1 lb per week
      loseSuperSlow: maintenanceCalories - 250,  // 0.5 lb per week
      maintain: maintenanceCalories,
      gainSuperSlow: maintenanceCalories + 250,  // 0.5 lb per week
      gainSlow: maintenanceCalories + 500,   // 1 lb per week
      gainFast: maintenanceCalories + 1000   // 2 lb per week
    });
  };

  // Calculate calories on initial render and when key parameters change
  useEffect(() => {
    calculateCalories();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-6 bg-white rounded-lg shadow-md flex flex-col lg:flex-row">
      {/* Input Section */}
      <div className="w-full lg:w-1/2 lg:pr-6">
        
        <div className="space-y-4">
          {/* Age and Gender in same row */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-2">Age</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full p-2 border rounded"
                min={10}
                max={100}
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-2">Gender</label>
              <select 
                value={gender} 
                onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                className="w-full p-2 border rounded"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* Height with Unit Switch */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
            <div className="flex items-center space-x-2">
              <div className="flex rounded-md shadow-sm w-auto">
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
                  className={`px-4 py-2 whitespace-nowrap border ${
                    heightUnit === "imperial"
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  } border-gray-300 rounded-r-md`}
                  onClick={() => setHeightUnit("imperial")}
                >
                  ft, in
                </button>
              </div>

              {heightUnit === "metric" ? (
                <input
                  type="number"
                  placeholder="Height (cm)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="flex-1 block w-full shadow-sm px-3 py-2 border border-gray-300 rounded-md"
                />
              ) : (
                <div className="flex space-x-2 w-full">
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
                    className="w-1/2 shadow-sm px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Weight with Unit Switch */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
            <div className="flex items-center space-x-2">
              <div className="flex rounded-md shadow-sm w-auto">
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

              {weightUnit === "metric" ? (
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="flex-1 block w-full shadow-sm px-3 py-2 border border-gray-300 rounded-md"
                />
              ) : (
                <input
                  type="number"
                  placeholder="Weight (lbs)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="flex-1 block w-full shadow-sm px-3 py-2 border border-gray-300 rounded-md"
                />
              )}
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="block mb-2">Activity Level</label>
            <select 
              value={activityLevel} 
              onChange={(e) => setActivityLevel(Number(e.target.value))}
              className="w-full p-2 border rounded"
            >
              <option value={1.2}>Sedentary (little to no exercise)</option>
              <option value={1.375}>Lightly active (light exercise 1-3 days/week)</option>
              <option value={1.55}>Moderately active (moderate exercise 3-5 days/week)</option>
              <option value={1.725}>Very active (hard exercise 6-7 days/week)</option>
              <option value={1.9}>Extra active (very hard exercise & physical job)</option>
            </select>
          </div>

          {/* Calculate Button */}
          <button 
            onClick={calculateCalories}
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition font-bold"
          >
            Recalculate Daily Calories
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full lg:w-1/2 lg:pl-6 lg:border-l mt-6 lg:mt-0">
        <h2 className="text-xl font-bold mb-4 text-center">Calorie Recommendations</h2>
        {calories && (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <span className="mr-2">🔻</span> Weight Loss
              </h3>
              <p className="text-green-600 text-lg">{calories.loseFast} calories/day</p>
              <p className="text-sm text-gray-600">Lose 2 lb per week</p>
              <p className="text-green-600 text-lg">{calories.loseSlow} calories/day</p>
              <p className="text-sm text-gray-600">Lose 1 lb per week</p>
              <p className="text-green-600 text-lg">{calories.loseSuperSlow} calories/day</p>
              <p className="text-sm text-gray-600">Lose 0.5 lb per week</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <span className="mr-2">⚖️</span> Maintenance Calories
              </h3>
              <p className="text-blue-600 text-lg">{calories.maintain} calories/day</p>
              <p className="text-sm text-gray-600">To maintain current weight</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center">
                <span className="mr-2">🔺</span> Weight Gain
              </h3>
              <p className="text-red-600 text-lg">{calories.gainSlow} calories/day</p>
              <p className="text-sm text-gray-600">Gain 1 lb per week</p>
              <p className="text-red-600 text-lg">{calories.gainFast} calories/day</p>
              <p className="text-sm text-gray-600">Gain 2 lb per week</p>
              <p className="text-red-600 text-lg">{calories.gainSuperSlow} calories/day</p>
              <p className="text-sm text-gray-600">Gain 0.5 lb per week</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}