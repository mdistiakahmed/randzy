"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const toolCategories = [
  {
    name: "Random Generators",
    items: [
      {
        name: "Number Generator",
        href: "/random-number",
        icon: "🎲",
        description: "Generate random numbers within a specified range",
      },
      {
        name: "Coin Flip",
        href: "/coin-flip",
        icon: "💰",
        description: "Virtual coin toss for quick decisions",
      },
      {
        name: "Dice Roller",
        href: "/dice-roller",
        icon: "🎳",
        description: "Roll virtual dice with multiple configurations",
      },
      {
        name: "Random Country",
        href: "/random-country",
        icon: "🌍",
        description: "Discover random countries from around the world",
      },
    ],
  },
  {
    name: "Selection Tools",
    items: [
      {
        name: "Name Picker",
        href: "/random-name",
        icon: "👥",
        description: "Randomly select names from a list",
      },
      {
        name: "Team Generator",
        href: "/team-generator",
        icon: "⚽",
        description: "Create balanced random teams",
      },
      {
        name: "Phone Number Generator",
        href: "/phone-number-generator",
        icon: "📱",
        description: "Generate random phone numbers",
      },
    ],
  },
  {
    name: "Security Tools",
    items: [
      {
        name: "Password Generator",
        href: "/password-generator",
        icon: "🔐",
        description: "Create strong, random passwords",
      },
      {
        name: "PIN Generator",
        href: "/pin-generator",
        icon: "🔢",
        description: "Generate secure random PINs",
      },
      {
        name: "UUID Generator",
        href: "/uuid-generator",
        icon: "🆔",
        description: "Generate unique universal identifiers",
      },
      {
        name: "Random String",
        href: "/random-string",
        icon: "🧩",
        description: "Create random alphanumeric strings",
      },
    ],
  },
  {
    name: "Health Tools",
    items: [
      {
        name: "BMI Calculator",
        href: "/bmi-calculator",
        icon: "⚖️",
        description: "Calculate and understand your Body Mass Index",
      },
      {
        name: "Calorie Calculator",
        href: "/calorie-calculator",
        icon: "🍽️",
        description: "Calculate your daily calorie needs for weight management",
      },
    ],
  },
];

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<
    string | null
  >(null);

  return (
    <nav className="fixed top-0 left-0 right-0  bg-white shadow-md z-50">
      <div className="container mx-auto px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.PNG"
            alt="Randzy Logo"
            width={100}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center space-x-4 relative"
          onMouseLeave={() => {
            // Delay to allow mouse to move to dropdown
            setTimeout(() => setActiveCategory(null), 100);
          }}
        >
          {toolCategories.map((category, index) => (
            <div
              key={category.name}
              className="relative group"
              onMouseEnter={() => setActiveCategory(category.name)}
            >
              <button className="text-gray-700 hover:text-blue-600 transition">
                {category.name}
              </button>

              <div
                className={`
                  absolute top-full 
                  ${index >= toolCategories.length - 2 ? "right-0" : "left-0"}
                  mt-2 w-64 
                  bg-white shadow-lg rounded-lg border 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 
                  ${
                    activeCategory === category.name
                      ? "opacity-100 visible"
                      : ""
                  }
                `}
                onMouseEnter={() => setActiveCategory(category.name)}
              >
                {category.items.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                  >
                    <span className="mr-2 text-xl">{tool.icon}</span>
                    <div>
                      <div className="font-semibold">{tool.name}</div>
                      <div className="text-xs text-gray-500">
                        {tool.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          {toolCategories.map((category) => (
            <div key={category.name} className="border-b">
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center"
                onClick={() =>
                  setActiveMobileCategory(
                    activeMobileCategory === category.name
                      ? null
                      : category.name
                  )
                }
              >
                {category.name}
                <span>
                  {activeMobileCategory === category.name ? "▼" : "►"}
                </span>
              </button>

              {activeMobileCategory === category.name && (
                <div className="bg-gray-50">
                  {category.items.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="block px-4 py-3 border-t flex items-center hover:bg-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-2 text-xl">{tool.icon}</span>
                      <div>
                        <div className="font-semibold">{tool.name}</div>
                        <div className="text-xs text-gray-500">
                          {tool.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
