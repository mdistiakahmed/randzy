"use client";

import React, { useEffect, useRef, useState } from "react";

export default function WheelOfNames() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);
  const animationIdRef = useRef<number | null>(null);
  const isSpinningRef = useRef(false);
  const isInitialRef = useRef(true);

  const [names, setNames] = useState([
    "Alice",
    "Bob", 
    "Charlie", 
    "Diana", 
    "Jordan"
  ]);
  const [inputName, setInputName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const colors = ["#3369e8", "#009925", "#d50f25", "#EEB211", "#d50f25"];

  const triggerConfetti = () => {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
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
        alpha: 1
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

  const handleAddName = () => {
    if (inputName.trim() && !names.includes(inputName.trim())) {
      setNames([...names, inputName.trim()]);
      setInputName("");
    }
  };

  const handleDeleteName = (index: number) => {
    const newNames = names.filter((_, i) => i !== index);
    setNames(newNames);
  };

  const shuffleNames = () => {
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffled);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;
    canvas.style.cursor = "pointer";

    const radius = canvas.width / 2 - 10;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const segmentAngle = (2 * Math.PI) / names.length;

    const drawWheel = (rotation: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      names.forEach((name, index) => {
        const startAngle = index * segmentAngle + rotation;
        const endAngle = startAngle + segmentAngle;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();

        ctx.fillStyle = colors[index % colors.length];
        ctx.fill();

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + segmentAngle / 2);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff";
        ctx.font = "24px Arial";
        ctx.fillText(name, radius / 2, 0);
        ctx.restore();
      });

      // Draw central circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius / 12, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();

      // Draw marker
      ctx.beginPath();
      ctx.moveTo(canvas.width, centerY);
      ctx.lineTo(canvas.width, centerY + 15);
      ctx.lineTo(canvas.width - 30, centerY);
      ctx.lineTo(canvas.width, centerY - 15);
      ctx.closePath();
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.strokeStyle = "black";
      ctx.stroke();

      // Draw initial text if wheel is not spinning
      if (isInitialRef.current) {
        ctx.save();
        ctx.font = "bold 28px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
        ctx.fillText("Press to Spin", centerX, centerY + 50);
        ctx.restore();
      }
    };

    const spinWheel = () => {
      if (isSpinningRef.current || names.length < 2) return;

      isSpinningRef.current = true;
      isInitialRef.current = false;
      let currentSpeed = 0.5;
      const deceleration = 0.98;

      const animateSpin = () => {
        currentSpeed *= deceleration;
        rotationRef.current += currentSpeed;

        if (currentSpeed < 0.001) {
          isSpinningRef.current = false;

          const finalAngle = rotationRef.current % (2 * Math.PI);
          const index = Math.floor(
            ((2 * Math.PI - finalAngle) % (2 * Math.PI)) / segmentAngle
          );

          triggerConfetti();
          setWinner(names[index]);
          setIsModalOpen(true);
          return;
        }

        drawWheel(rotationRef.current);
        animationIdRef.current = requestAnimationFrame(animateSpin);
      };

      animateSpin();
    };

    const constantSpin = () => {
      if (!isSpinningRef.current && isInitialRef.current) {
        rotationRef.current += 0.005;
        drawWheel(rotationRef.current);
        animationIdRef.current = requestAnimationFrame(constantSpin);
      }
    };

    constantSpin();
    canvas.addEventListener("click", spinWheel);

    return () => {
      canvas.removeEventListener("click", spinWheel);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [names]);

  const removeNameAndClose = () => {
    if (winner) {
      const newNames = names.filter(name => name !== winner);
      setNames(newNames);
      setIsModalOpen(false);
      setWinner(null);
      isInitialRef.current = true;
    }
  };

  return (
    <div className="container mx-auto mt-2 px-4 py-2 flex flex-col lg:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full max-w-md">
        <canvas 
          ref={canvasRef} 
          className="w-full aspect-square rounded-full shadow-lg"
        />
      </div>

      <div className="w-full max-w-md">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <input 
            type="text" 
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddName()}
            placeholder="Enter a name" 
            className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <button 
              onClick={handleAddName}
              disabled={!inputName.trim()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600 w-full sm:w-auto"
            >
              Add
            </button>
            <button 
              onClick={shuffleNames}
              disabled={names.length < 2}
              className="px-4 py-2 bg-green-500 text-white rounded-md disabled:opacity-50 hover:bg-green-600 w-full sm:w-auto"
            >
              Shuffle
            </button>
          </div>
        </div>

        <div className="h-72 overflow-y-auto border rounded-md">
          {names.map((name, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center px-4 py-2 border-b hover:bg-gray-100"
            >
              <span>{name}</span>
              <button 
                onClick={() => handleDeleteName(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-xl w-11/12 max-w-md">
            <h2 className="text-2xl font-bold mb-4">🎉 The Winner is...</h2>
            <p className="text-4xl text-blue-600 mb-6">{winner}</p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={removeNameAndClose}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove Name
              </button>
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  isInitialRef.current = true;
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}