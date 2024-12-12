'use client';

import React, { useState } from 'react';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%';

    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    if (validChars.length === 0) {
      alert('Please select at least one character type');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    }
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password Length (4-32 characters)
        </label>
        <input 
          type="range" 
          min="4" 
          max="32" 
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-center text-xl font-bold mt-2">{length} characters</div>
      </div>

      <div className="mb-6 grid md:grid-cols-2 gap-4">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
            className="mr-2 h-4 w-4"
          />
          <label className="text-gray-700">Uppercase Letters (A-Z)</label>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
            className="mr-2 h-4 w-4"
          />
          <label className="text-gray-700">Lowercase Letters (a-z)</label>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2 h-4 w-4"
          />
          <label className="text-gray-700">Numbers (0-9)</label>
        </div>
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
            className="mr-2 h-4 w-4"
          />
          <label className="text-gray-700">Symbols (!@#$%)</label>
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <button 
          onClick={generatePassword}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Generate Password
        </button>
        <button 
          onClick={copyToClipboard}
          disabled={!password}
          className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Copy Password
        </button>
      </div>

      {password && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Generated Password:</h3>
          <p className="font-mono text-xl text-gray-900 break-all">{password}</p>
        </div>
      )}
    </div>
  );
}