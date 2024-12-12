"use client";

import React, { useRef, useEffect, useState } from 'react';

var cnt = 1;

export default function CoinFlipWheel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [result, setResult] = useState<'Heads' | 'Tails' | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipProgress, setFlipProgress] = useState(0);
  const [headsImage, setHeadsImage] = useState<HTMLImageElement | null>(null);
  const [tailsImage, setTailsImage] = useState<HTMLImageElement | null>(null);


  const flipCoin = () => {
    // Allow multiple flips by checking if a flip is currently in progress
    if (isFlipping) return;

    setIsFlipping(true);
    setResult(null);
    setFlipProgress(0);

    // Simulate coin flip with a random result after 5 seconds
    setTimeout(() => {
      const randomResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(randomResult);
      setIsFlipping(false);
    }, 2000);
  };

  useEffect(() => {
    // Load images on component mount
    const heads = new Image();
    heads.src = '/heads.png';
    heads.onload = () => setHeadsImage(heads);

    const tails = new Image();
    tails.src = '/tails.png';
    tails.onload = () => setTailsImage(tails);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    canvas.width = 300;
    canvas.height = 300;

    // Coin properties
    const coinRadius = 125;
    let animationFrameId: number;
    const animationDuration = 2000; // 2 seconds
    const startTime = Date.now();

    const drawCoin = (image: HTMLImageElement, perspective: number, options: { 
        overlayText?: string, 
        overlayTextColor?: string, 
        overlayBackgroundColor?: string 
      } = {}) => {
      ctx.save();
      ctx.translate(150, 150);
      
      
      ctx.beginPath();
      ctx.arc(0, 0, coinRadius, 0, Math.PI * 2);
      ctx.clip();
      
      ctx.drawImage(
        image, 
        -coinRadius, 
        -coinRadius, 
        coinRadius * 2, 
        coinRadius * 2
      );

      // Optional overlay
  if (options.overlayText) {
    // Semi-transparent overlay
    ctx.fillStyle = options.overlayBackgroundColor || 'rgba(0, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.arc(0, 0, coinRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Overlay text
    ctx.fillStyle = options.overlayTextColor || 'white';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(options.overlayText, 0, 0);
  }
      
      ctx.restore();
    };

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Default state - draw a default coin if no images or result
      if (!headsImage || !tailsImage) {
        ctx.fillStyle = 'gold';
        ctx.beginPath();
        ctx.arc(150, 150, coinRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('FLIP Image ', 150, 150);
        
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // Coin flipping animation
      if (isFlipping) {
        // Calculate progress based on elapsed time
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);
        
        // Update flip progress
        setFlipProgress(progress);

        // Calculate perspective based on sine wave
        const perspective = Math.abs(Math.cos(Math.PI * flipProgress));
        
        // Alternate between heads and tails during flip
        const currentImage = (cnt % 2 === 0) 
          ? headsImage 
          : tailsImage;

          cnt = cnt + 1;


          if(cnt % 5 === 0) {
            drawCoin(currentImage, cnt);
          }
        
        

         // Continue animation if not complete
         if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          }
      } else {
        // Static coin display based on result
        if (result === 'Heads' && headsImage) {
          drawCoin(headsImage, 1);
        } else if (result === 'Tails' && tailsImage) {
          drawCoin(tailsImage, 1);
        } else if (!result) {
            drawCoin(headsImage, 1, {
                overlayText: 'Press To Flip',
                overlayTextColor: 'white',
                overlayBackgroundColor: 'rgba(0, 0, 0, 0.5)'
              });
        } else {
          // Default coin state
          ctx.fillStyle = 'gold';
          ctx.beginPath();
          ctx.arc(150, 150, coinRadius, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'black';
          ctx.font = '20px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('FLIP', 150, 150);
        }
        cnt = 1;
      }

    };

    // Start animation
    animate();


    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isFlipping, result, flipProgress, headsImage, tailsImage]);

  return (
    <div className="flex flex-col items-center">
      <canvas 
        ref={canvasRef} 
        onClick={flipCoin}
        className="cursor-pointer"
        style={{ width: '300px', height: '300px' }}
      />
        <div className="mt-4 text-2xl font-bold text-blue-700">
          Result: {result || ''}
        </div>

    </div>
  );
}