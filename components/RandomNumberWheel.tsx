// components/RandomNumberWheel.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';


export default function RandomNumberWheel() {
  const [generatedNumber, setGeneratedNumber] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [currentRandomNumbers, setCurrentRandomNumbers] = useState<number[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wheelRef = useRef({
    angle: 0,
    spinSpeed: 0,
    deceleration: 0.98
  });

  useEffect(() => {
    let animationFrameId: number;
    let numberShiftInterval: NodeJS.Timeout;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
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

  const drawWheel = (ctx: CanvasRenderingContext2D, width: number, height: number, angle: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.4;

    ctx.save();

    // Draw wheel background
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(33, 150, 243, 0.2)';
    ctx.fill();

    // Draw wheel segments
    const segments = 12;
    for (let i = 0; i < segments; i++) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle + (i / segments) * Math.PI * 2);
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, 0, Math.PI * 2 / segments);
      ctx.closePath();
      
      ctx.fillStyle = i % 2 === 0 
        ? 'rgba(33, 150, 243, 0.4)' 
        : 'rgba(33, 150, 243, 0.6)';
      ctx.fill();
      
      ctx.restore();
    }

    // Draw fixed pointer
    ctx.beginPath();
    ctx.moveTo(centerX + radius + 10, centerY);
    ctx.lineTo(centerX + radius + 20, centerY + 10);
    ctx.lineTo(centerX + radius + 20, centerY - 10);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.restore();

    // Display number
    ctx.save();
    const fontSize = Math.min(36, width * 0.1);
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';

    if (isSpinning) {
      const displayNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      ctx.fillText(displayNumber.toString(), centerX, centerY+10);
    } else if (generatedNumber !== null) {
      ctx.fillText(generatedNumber.toString(), centerX, centerY+10);
    }
    
    ctx.restore();
  };

  const generateNumber = () => {
    if (!isSpinning) {
      setGeneratedNumber(null);
      setIsSpinning(true);
      wheelRef.current.spinSpeed = Math.random() * 0.3 + 0.7;

      // Send Google Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_number', {
        'event_category': 'Random Number Wheel',
        'event_label': 'Number Generation',
        'value': min + '-' + max
      });
    }
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between">
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
                ${isSpinning 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'}
              `}
            >
              {isSpinning ? 'Spinning...' : 'Generate Number'}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 flex justify-center">
        <div className="w-full max-w-md aspect-square">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}