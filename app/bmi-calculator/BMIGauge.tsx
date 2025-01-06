import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});


export default function BMIGauge({ bmi }: any) {
  const [bmiValue, setBmiValue] = useState<number>(bmi || 0);


  useEffect(() => {
    setBmiValue(bmi || 0);
      
  }, [bmi]);

  console.log(bmi);
  

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4">
      <GaugeComponent
        type="semicircle"
        arc={{
          width: 0.2,
          padding: 0.005,
          cornerRadius: 1,
          subArcs: [
            {
              limit: 18.5,
              color: "#808080", // Gray for Underweight
              showTick: true,
              tooltip: {
                text: "Underweight",
              },
            },
            {
              limit: 25,
              color: "#4CAF50", // Green for Normal
              showTick: true,
              tooltip: {
                text: "Normal Weight",
              },
            },
            {
              limit: 30,
              color: "#FFC107", // Yellow for Overweight
              showTick: true,
              tooltip: {
                text: "Overweight",
              },
            },
            {
              color: "#F44336", // Red for Obese
              tooltip: {
                text: "Obese",
              },
            },
          ],
        }}
        pointer={{
          color: "#000",
          length: 0.8,
          width: 15,
        }}
        labels={{
          valueLabel: { 
            formatTextValue: (value) => `BMI: ${value.toFixed(1)}`,
          },
          tickLabels: {
            type: "outer",
            defaultTickValueConfig: {
              formatTextValue: (value: any) => value,
              style: { fontSize: 10 },
            },
            ticks: [
              { value: 0 },
              { value: 18.5 },
              { value: 25 },
              { value: 30 },
              { value: 40 }
            ],
          },
        }}
        value={bmiValue}
        minValue={0}
        maxValue={40}
      />
        <p className="text-center text-gray-500 mt-2">
          Your BMI is: {bmiValue.toFixed(1)}
        </p>
    </div>
  );
}