"use client";

import React, { useState, useRef, useEffect } from "react";

export default function YesOrNoComponent() {
  const [generatedAlphabet, setGeneratedAlphabet] = useState<string | null>(
    null
  );
  const [isSpinning, setIsSpinning] = useState(false);


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
      const savedHistory = localStorage.getItem("yesOrNoHistory");
      return savedHistory ? JSON.parse(savedHistory) : [];
    }
    return [];
  });

  // Effect to update localStorage whenever alphabetHistory changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "yesOrNoHistory",
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


    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, size, size);

      if (isSpinning) {
        wheelRef.current.angle += wheelRef.current.spinSpeed;
        wheelRef.current.spinSpeed *= wheelRef.current.deceleration;

        if (Math.abs(wheelRef.current.spinSpeed) < 0.01) {
          setIsSpinning(false);

          const finalAlphabet = Math.random() <= 0.5 ? "Yes" : "No";

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
    };
  }, [isSpinning]);

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
      const displayResult = Math.random() <= 0.5 ? "Yes" : "No";
      ctx.fillText(displayResult, centerX, centerY + 10);
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
        window.gtag("event", "yes_or_no", {
          event_category: "Yes or No Wheel",
          event_label: "Yes or No Generation",
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
            <div>

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
                  {isSpinning ? "Spinning..." : "Spin"}
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
              <h3 className="text-lg font-semibold">History</h3>
              <button
                onClick={clearHistory}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Clear History
              </button>
            </div>
            {alphabetHistory.length === 0 ? (
              <p className="text-gray-500 text-center">
                You have not spun the wheel yet.
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

      </div>
    </>
  );
}
