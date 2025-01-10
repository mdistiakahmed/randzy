"use client";

import React, { useState, useRef, useEffect } from "react";

export default function RandomAlphabetWheel() {
  const [generatedAlphabet, setGeneratedAlphabet] = useState<string | null>(
    null
  );
  const [isSpinning, setIsSpinning] = useState(false);
  const [caseType, setCaseType] = useState<"uppercase" | "lowercase" | "mixed">(
    "uppercase"
  );
  const [currentRandomAlphabets, setCurrentRandomAlphabets] = useState<
    string[]
  >([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wheelRef = useRef({
    angle: 0,
    spinSpeed: 0,
    deceleration: 0.98,
  });


  const colors = ["#3369e8", "#009925", "#d50f25", "#EEB211", "#d50f25"];

  const triggerConfetti = () => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: any[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 10,
        speedY: (Math.random() - 0.5) * 10,
        alpha: 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedY += 0.2;
        p.alpha -= 0.02;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        if (p.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      if (particles.length > 0) {
        requestAnimationFrame(animate);
      } else {
        document.body.removeChild(canvas);
      }
    };

    animate();
  };
  // Initialize alphabet history from localStorage
  const [alphabetHistory, setAlphabetHistory] = useState<
    { serial: number; value: string }[]
  >(() => {
    if (typeof window !== "undefined") {
      const savedHistory = localStorage.getItem("randomAlphabetHistory");
      return savedHistory ? JSON.parse(savedHistory) : [];
    }
    return [];
  });

  // Effect to update localStorage whenever alphabetHistory changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "randomAlphabetHistory",
        JSON.stringify(alphabetHistory)
      );
    }
  }, [alphabetHistory]);

  useEffect(() => {
    let animationFrameId: number;
    let alphabetShiftInterval: NodeJS.Timeout;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = Math.min(canvas.offsetWidth, canvas.offsetHeight);
    canvas.width = size;
    canvas.height = size;

    if (isSpinning) {
      alphabetShiftInterval = setInterval(() => {
        const newAlphabets = Array.from({ length: 5 }, () => {
          const randomChar = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
          switch (caseType) {
            case "uppercase":
              return randomChar;
            case "lowercase":
              return randomChar.toLowerCase();
            case "mixed":
              return Math.random() > 0.5
                ? randomChar
                : randomChar.toLowerCase();
          }
        });
        setCurrentRandomAlphabets(newAlphabets);
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
          clearInterval(alphabetShiftInterval);
          setCurrentRandomAlphabets([]);

          const randomChar = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
          const finalAlphabet =
            caseType === "uppercase"
              ? randomChar
              : caseType === "lowercase"
              ? randomChar.toLowerCase()
              : Math.random() > 0.5
              ? randomChar
              : randomChar.toLowerCase();

          setGeneratedAlphabet(finalAlphabet);
          triggerConfetti();

          // Add generated alphabet to history with serial number
          setAlphabetHistory((prev) => [
            { serial: prev.length + 1, value: finalAlphabet },
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
      clearInterval(alphabetShiftInterval);
    };
  }, [isSpinning, caseType]);

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

    // Display alphabet
    ctx.save();
    const fontSize = Math.min(46, width * 0.5);
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.fillStyle = "black";

    if (isSpinning) {
      const displayAlphabet =
        caseType === "uppercase"
          ? String.fromCharCode(65 + Math.floor(Math.random() * 26))
          : caseType === "lowercase"
          ? String.fromCharCode(97 + Math.floor(Math.random() * 26))
          : Math.random() > 0.5
          ? String.fromCharCode(65 + Math.floor(Math.random() * 26))
          : String.fromCharCode(97 + Math.floor(Math.random() * 26));

      ctx.fillText(displayAlphabet, centerX, centerY + 10);
    } else if (generatedAlphabet !== null) {
      ctx.fillText(generatedAlphabet, centerX, centerY + 10);
    }

    ctx.restore();
  };

  const generateAlphabet = () => {
    if (!isSpinning) {
      setGeneratedAlphabet(null);
      setIsSpinning(true);
      wheelRef.current.spinSpeed = Math.random() * 0.3 + 0.7;

      // Send Google Analytics event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_alphabet", {
          event_category: "Random Alphabet Wheel",
          event_label: "Alphabet Generation",
          value: caseType,
        });
      }
    }
  };

  // New function to clear history
  const clearHistory = () => {
    setAlphabetHistory([]);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-between">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
          {/* Case Type Selection Section */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:pr-6">
            <div className="space-y-4">
              <div>
                <div className="flex space-x-2 lg:flex-col lg:space-y-2 lg:space-x-0">
                  {["uppercase", "lowercase", "mixed"].map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setCaseType(type as "uppercase" | "lowercase" | "mixed")
                      }
                      className={`px-4 py-2 text-xs rounded-md transition w-full ${
                        caseType === type
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      disabled={isSpinning}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={generateAlphabet}
                  disabled={isSpinning}
                  className={`
                px-6 py-3 rounded-md transition w-full
                ${
                  isSpinning
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#ef4444] text-white hover:bg-[#972626]"
                }
              `}
                >
                  {isSpinning ? "Spinning..." : "Generate Alphabet"}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="w-full mt-6 lg:px-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Alphabet History</h3>
              <button
                onClick={clearHistory}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Clear History
              </button>
            </div>
            {alphabetHistory.length === 0 ? (
              <p className="text-gray-500 text-center">
                No alphabets generated yet
              </p>
            ) : (
              <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                {alphabetHistory.map((item) => (
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

        {/* Bulk Alphabet Generator Section */}
        <div className="bg-white rounded-lg lg:p-8 mt-12 lg:mt-32">
          <h2 className="text-2xl lg:text-3xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center gap-4">
            <span>🔤</span>Bulk Random Alphabet Generator
          </h2>

          <div className="max-w-2xl mx-auto lg:p-6">
            <div className="grid lg:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Case Type</label>
                <select
                  id="bulkCaseType"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="uppercase">Uppercase</option>
                  <option value="lowercase">Lowercase</option>
                  <option value="mixed">Mixed Case</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Count</label>
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
                      buttonEl.innerHTML = `🔤 Generate ${count} Random Alphabets`;
                    }
                  }}
                />
              </div>
            </div>

            <div className="mb-6">
              <button
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition flex items-center justify-center"
                onClick={() => {
                  const caseTypeEl = document.getElementById(
                    "bulkCaseType"
                  ) as HTMLSelectElement;
                  const countEl = document.getElementById(
                    "bulkCount"
                  ) as HTMLInputElement;
                  const resultEl = document.getElementById(
                    "bulkResult"
                  ) as HTMLTextAreaElement;
                  const buttonEl = document.querySelector(
                    'button[id="bulkGenerateButton"]'
                  ) as HTMLButtonElement;

                  const caseType = caseTypeEl.value as
                    | "uppercase"
                    | "lowercase"
                    | "mixed";
                  let count = parseInt(countEl.value) || 5;
                  if (count <= 0) {
                    count = 5;
                  }

                  const randomAlphabets = Array.from({ length: count }, () => {
                    const randomChar = String.fromCharCode(
                      65 + Math.floor(Math.random() * 26)
                    );
                    switch (caseType) {
                      case "uppercase":
                        return randomChar;
                      case "lowercase":
                        return randomChar.toLowerCase();
                      case "mixed":
                        return Math.random() > 0.5
                          ? randomChar
                          : randomChar.toLowerCase();
                    }
                  });

                  resultEl.value = randomAlphabets.join(", ");

                  // Update button text to show count
                  buttonEl.innerHTML = `Generate ${count} Random Alphabets`;

                  // Send Google Analytics event
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "generate_bulk_alphabets", {
                      event_category: "Random Alphabet Generator",
                      event_label: "Bulk Alphabet Generation",
                      value: `${caseType}-${count}`,
                    });
                  }
                }}
                id="bulkGenerateButton"
              >
                Generate 5 Random Alphabets
              </button>
            </div>

            <div className="relative">
              <textarea
                id="bulkResult"
                readOnly
                placeholder="Your random alphabets will appear here..."
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
                      buttonEl.innerHTML = "✅ Copied";

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
                📋 Copy Alphabets
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-600 text-center">
              💡 Tip: Choose case type and count to customize your random
              alphabet generation
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
