"use client";

import React, { useState, useRef, useEffect } from "react";

const SUITS = ["♠", "♥", "♦", "♣"];
const RANKS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

interface Card {
  suit: string;
  rank: string;
}

export default function RandomCardsPage() {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateRandomCard = () => {
    const randomSuit = SUITS[Math.floor(Math.random() * SUITS.length)];
    const randomRank = RANKS[Math.floor(Math.random() * RANKS.length)];
    setCurrentCard({ suit: randomSuit, rank: randomRank });
  };

  // Define all cards
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["♠", "♥", "♦", "♣"];

  // Function to generate a random card
  const getRandomCard = () => {
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    return { rank, suit };
  };

  // Shuffle animation
  const shuffleCards = () => {
    let shuffleInterval: any;
    const startTime = Date.now();

    shuffleInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime >= 2000) {
        // Stop shuffling after 2 seconds
        clearInterval(shuffleInterval);
        const finalCard = getRandomCard();
        drawCard(finalCard); // Display the final card
      } else {
        // Keep shuffling
        const randomCard = getRandomCard();
        drawCard(randomCard); // Display a random card
      }
    }, 100); // Change card every 100ms
  };

  const drawFaceCard = (ctx: CanvasRenderingContext2D, card: Card, x: number, y: number, cardWidth: number, cardHeight: number) => {
    // Common face card drawing parameters
    ctx.fillStyle = card.suit === '♥' || card.suit === '♦' ? 'red' : 'black';
    
    // Draw face card figure
    ctx.save();
    ctx.translate(x + cardWidth / 2, y + cardHeight / 2);
    
    // Head
    ctx.beginPath();
    ctx.fillStyle = 'beige';
    ctx.arc(0, -80, 50, 0, Math.PI * 2);
    ctx.fill();
    
    // Face details
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(0, -80, 45, 0, Math.PI * 2);
    ctx.stroke();
    
    // Eyes
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(-20, -90, 5, 0, Math.PI * 2);
    ctx.arc(20, -90, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Crown/Accessories based on card rank
    ctx.fillStyle = card.suit === '♥' || card.suit === '♦' ? 'red' : 'black';
    ctx.beginPath();
    switch(card.rank) {
      case 'J':
        // Jack's cap
        ctx.moveTo(-40, -130);
        ctx.lineTo(40, -130);
        ctx.lineTo(20, -150);
        ctx.lineTo(-20, -150);
        ctx.closePath();
        break;
      case 'Q':
        // Queen's crown
        ctx.moveTo(-30, -160);
        ctx.lineTo(30, -160);
        ctx.lineTo(40, -140);
        ctx.lineTo(-40, -140);
        ctx.closePath();
        break;
      case 'K':
        // King's crown
        ctx.moveTo(0, -160);
        ctx.lineTo(-30, -140);
        ctx.lineTo(30, -140);
        ctx.closePath();
        break;
      case 'A':
        // Ace's simple symbol
        ctx.font = 'bold 60px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('A', 0, -50);
        break;
    }
    ctx.fill();
    
    // Body
    ctx.fillStyle = card.suit === '♥' || card.suit === '♦' ? 'red' : 'black';
    ctx.beginPath();
    ctx.moveTo(0, -30);
    ctx.lineTo(-40, 80);
    ctx.lineTo(40, 80);
    ctx.closePath();
    ctx.fill();
    
    // Suit in body
    ctx.fillStyle = 'white';
    ctx.font = 'bold 30px Georgia';
    ctx.textAlign = 'center';
    ctx.fillText(card.suit, 0, 50);
    
    ctx.restore();
  };

  const drawCard = (card: Card) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cardWidth = 250;
    const cardHeight = 350;
    const x = (canvas.width - cardWidth) / 2;
    const y = (canvas.height - cardHeight) / 2;

    // Card background with gradient
    const gradient = ctx.createLinearGradient(
      x,
      y,
      x + cardWidth,
      y + cardHeight
    );
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(1, "#e4e4e4");
    ctx.fillStyle = gradient;

    // Rounded corners
    ctx.beginPath();
    ctx.moveTo(x + 15, y);
    ctx.lineTo(x + cardWidth - 15, y);
    ctx.quadraticCurveTo(x + cardWidth, y, x + cardWidth, y + 15);
    ctx.lineTo(x + cardWidth, y + cardHeight - 15);
    ctx.quadraticCurveTo(
      x + cardWidth,
      y + cardHeight,
      x + cardWidth - 15,
      y + cardHeight
    );
    ctx.lineTo(x + 15, y + cardHeight);
    ctx.quadraticCurveTo(x, y + cardHeight, x, y + cardHeight - 15);
    ctx.lineTo(x, y + 15);
    ctx.quadraticCurveTo(x, y, x + 15, y);
    ctx.closePath();
    ctx.fill();

    // Border
    ctx.strokeStyle = "#cccccc";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Text color
    const color = card.suit === "♥" || card.suit === "♦" ? "red" : "black";
    ctx.fillStyle = color;

    // Top-left rank and suit
    ctx.font = "bold 24px Georgia";
    ctx.textAlign = "left";
    ctx.fillText(card.rank, x + 15, y + 40);
    ctx.fillText(card.suit, x + 15, y + 70);

    // Special handling for face cards and ace
    if (["A", "J", "K", "Q"].includes(card.rank)) {
      drawFaceCard(ctx, card, x, y, cardWidth, cardHeight);
    } else {
      // Regular cards - draw multiple suit symbols
      ctx.font = "bold 40px Georgia";
      const suitPositions = [
        { x: cardWidth / 4, y: cardHeight / 3 },
        { x: cardWidth * 3 / 4, y: cardHeight * 2 / 3 }
      ];

      suitPositions.forEach(pos => {
        ctx.fillText(
          card.suit, 
          x + pos.x, 
          y + pos.y
        );
      });
    }

    // Bottom-right rank and suit (rotated correctly and properly aligned)
    ctx.save();
    ctx.translate(x + cardWidth - 20, y + cardHeight - 20);
    ctx.rotate(Math.PI);
    ctx.textAlign = "left";
    ctx.font = "bold 24px Georgia";
    ctx.fillText(card.rank, 0, 0);
    ctx.fillText(card.suit, 0, 30);
    ctx.restore();
  };

  useEffect(() => {
    if (currentCard) drawCard(currentCard);
  }, [currentCard]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 to-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Random Card Generator
      </h1>
      <canvas
        ref={canvasRef}
        width="400"
        height="550"
        className="mb-6 border-2 border-gray-400 shadow-lg"
      />
      <button
        onClick={shuffleCards}
        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow transition"
      >
        Draw a Random Card
      </button>
    </div>
  );
}
