// components/RandomNumberWheel.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";

export default function RandomNumberWheel() {
  const [generatedNumber, setGeneratedNumber] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [currentRandomNumbers, setCurrentRandomNumbers] = useState<number[]>(
    []
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wheelRef = useRef({
    angle: 0,
    spinSpeed: 0,
    deceleration: 0.98,
  });

  // Initialize number history from localStorage
  const [numberHistory, setNumberHistory] = useState<
    { serial: number; value: number }[]
  >(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      const savedHistory = localStorage.getItem("randomNumberHistory");
      return savedHistory ? JSON.parse(savedHistory) : [];
    }
    return [];
  });

  // Effect to update localStorage whenever numberHistory changes
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "randomNumberHistory",
        JSON.stringify(numberHistory)
      );
    }
  }, [numberHistory]);

  useEffect(() => {
    let animationFrameId: number;
    let numberShiftInterval: NodeJS.Timeout;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = Math.min(canvas.offsetWidth, canvas.offsetHeight);
    canvas.width = size;
    canvas.height = size;

    if (isSpinning) {
      numberShiftInterval = setInterval(() => {
        const newNumbers = Array.from(
          { length: 5 },
          () => Math.floor(Math.random() * (max - min + 1)) + min
        );
        setCurrentRandomNumbers(newNumbers);
      }, 100);
    }

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, size, size);

      if (isSpinning) {
        wheelRef.current.angle += wheelRef.current.spinSpeed;
        wheelRef.current.spinSpeed *= wheelRef.current.deceleration;

        if (Math.abs(wheelRef.current.spinSpeed) < 0.01) {
          setIsSpinning(false);
          clearInterval(numberShiftInterval);
          setCurrentRandomNumbers([]);
          const finalNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          setGeneratedNumber(finalNumber);
          // Add generated number to history with serial number
          setNumberHistory((prev) => [
            { serial: prev.length + 1, value: finalNumber },
            ...prev,
          ]);
        }
      }

      drawWheel(ctx, size, size, wheelRef.current.angle);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(numberShiftInterval);
    };
  }, [isSpinning, min, max]);

  const drawWheel = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    angle: number
  ) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.4;

    ctx.save();

    // Draw wheel background
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(33, 150, 243, 0.2)";
    ctx.fill();

    // Draw wheel segments
    const segments = 12;
    for (let i = 0; i < segments; i++) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle + (i / segments) * Math.PI * 2);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, 0, (Math.PI * 2) / segments);
      ctx.closePath();

      ctx.fillStyle =
        i % 2 === 0 ? "rgba(33, 150, 243, 0.4)" : "rgba(33, 150, 243, 0.6)";
      ctx.fill();

      ctx.restore();
    }

    // Draw fixed pointer
    ctx.beginPath();
    ctx.moveTo(centerX + radius + 10, centerY);
    ctx.lineTo(centerX + radius + 20, centerY + 10);
    ctx.lineTo(centerX + radius + 20, centerY - 10);
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.restore();

    // Display number
    ctx.save();
    const fontSize = Math.min(36, width * 0.1);
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.fillStyle = "black";

    if (isSpinning) {
      const displayNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      ctx.fillText(displayNumber.toString(), centerX, centerY + 10);
    } else if (generatedNumber !== null) {
      ctx.fillText(generatedNumber.toString(), centerX, centerY + 10);
    }

    ctx.restore();
  };

  const generateNumber = () => {
    if (!isSpinning) {
      setGeneratedNumber(null);
      setIsSpinning(true);
      wheelRef.current.spinSpeed = Math.random() * 0.3 + 0.7;

      // Send Google Analytics event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_number", {
          event_category: "Random Number Wheel",
          event_label: "Number Generation",
          value: min + "-" + max,
        });
      }
    }
  };

  // New function to clear history
  const clearHistory = () => {
    setNumberHistory([]);
  };

  return (
    <div className="w-full flex flex-col items-center justify-between">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        {/* New Number Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Minimum Number</label>
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md"
                disabled={isSpinning}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Maximum Number</label>
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md"
                disabled={isSpinning}
              />
            </div>

            <div className="text-center">
              <button
                onClick={generateNumber}
                disabled={isSpinning}
                className={`
                px-6 py-3 rounded-md transition w-full
                ${
                  isSpinning
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }
              `}
              >
                {isSpinning ? "Spinning..." : "Generate Number"}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex justify-center">
          <div className="w-full max-w-md aspect-square">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* New History Section */}
      <div className="w-full mt-6 md:px-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Number History</h3>
            <button
              onClick={clearHistory}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
            >
              Clear History
            </button>
          </div>
          {numberHistory.length === 0 ? (
            <p className="text-gray-500 text-center">
              No numbers generated yet
            </p>
          ) : (
            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
              {numberHistory.map((item) => (
                <div
                  key={item.serial}
                  className="bg-white p-2 rounded-md text-center shadow-sm flex justify-between items-center"
                >
                  <span className="font-bold text-gray-600 w-1/4">
                    Spin #{item.serial}
                  </span>
                  <span className="text-xl font-semibold w-3/4">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Multiple Random Numbers Generator Section */}
      <div className="bg-white rounded-lg md:shadow-md md:p-8 mt-12">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center gap-4">
          <span>🎲</span>Bulk Random Number Generator
        </h2>

        <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Min Number</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Min (e.g., 1)"
                id="bulkMin"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Max Number</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Max (e.g., 100)"
                id="bulkMax"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Count
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Count (e.g., 5)"
                id="bulkCount"
                onChange={(e) => {
                  const buttonEl = document.querySelector(
                    'button[id="bulkGenerateButton"]'
                  ) as HTMLButtonElement;
                  
                  const count = parseInt(e.target.value) || 0;
                  
                  if (count > 0) {
                    buttonEl.innerHTML = `🎲 Generate ${count} Random Numbers`;
                  }
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <button
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition flex items-center justify-center"
              onClick={() => {
                const minEl = document.getElementById(
                  "bulkMin"
                ) as HTMLInputElement;
                const maxEl = document.getElementById(
                  "bulkMax"
                ) as HTMLInputElement;
                const countEl = document.getElementById(
                  "bulkCount"
                ) as HTMLInputElement;
                const resultEl = document.getElementById(
                  "bulkResult"
                ) as HTMLTextAreaElement;
                const buttonEl = document.querySelector(
                  'button[id="bulkGenerateButton"]'
                ) as HTMLButtonElement;

                const min = parseInt(minEl.value) || 1;
                const max = parseInt(maxEl.value) || 100;
                let count = parseInt(countEl.value) || 5;
                if(count <= 0) {
                  count = 5
                }

                const randomNumbers = Array.from(
                  { length: count },
                  () => Math.floor(Math.random() * (max - min + 1)) + min
                );

                resultEl.value = randomNumbers.join(", ");

                // Update button text to show count
                buttonEl.innerHTML = `🎲 Generate ${count} Random Numbers`;

                // Send Google Analytics event
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "generate_bulk_numbers", {
                    event_category: "Random Number Generator",
                    event_label: "Bulk Number Generation",
                    value: `${min}-${max}-${count}`,
                  });
                }
              }}
              id="bulkGenerateButton"
            >
              🎲 Generate 5 Random Numbers
            </button>
          </div>

          <div className="relative">
            <textarea
              id="bulkResult"
              readOnly
              placeholder="Your random numbers will appear here..."
              className="w-full h-40 p-4 border rounded-md bg-white resize-none"
            />
                        <button
              className="absolute bottom-2 right-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition flex items-center"
              onClick={(e) => {
                const resultEl = document.getElementById(
                  "bulkResult"
                ) as HTMLTextAreaElement;
                const buttonEl = e.currentTarget;
                
                // Store original button content
                const originalContent = buttonEl.innerHTML;
                
                navigator.clipboard
                  .writeText(resultEl.value)
                  .then(() => {
                    // Change button to show copied state
                    buttonEl.innerHTML = '✅ Copied';
                    
                    // Revert back to original state after 2 seconds
                    setTimeout(() => {
                      buttonEl.innerHTML = originalContent;
                    }, 2000);
                  })
                  .catch((err) => {
                    console.error("Failed to copy: ", err);
                  });
              }}
            >
              📋 Copy Numbers
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-600 text-center">
            💡 Tip: Adjust min, max, and count to customize your random number
            generation
          </div>
        </div>
      </div>
    </div>
  );
}
