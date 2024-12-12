'use client';

import React, { useState, useEffect } from 'react';

export default function PinGenerator() {
  const [pin, setPin] = useState<string>('');
  const [pinLength, setPinLength] = useState<number>(4);
  const [copied, setCopied] = useState<boolean>(false);

  const generatePin = () => {
    const newPin = Array.from(
      { length: pinLength }, 
      () => Math.floor(Math.random() * 10)
    ).join('');
    setPin(newPin);
    setCopied(false);
  };

  const copyPin = () => {
    if (pin) {
      navigator.clipboard.writeText(pin);
      setCopied(true);
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    // Generate initial PIN on component mount
    generatePin();
  }, [pinLength]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="pinLength" className="text-gray-700 font-medium">
            PIN Length:
          </label>
          <select 
            id="pinLength" 
            value={pinLength} 
            onChange={(e) => setPinLength(Number(e.target.value))}
            className="form-select px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(length => (
              <option key={length} value={length}>
                {length} Digits
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="bg-gray-100 px-6 py-4 rounded-lg shadow-inner text-center">
          <span className="text-4xl font-bold tracking-widest text-gray-800">
            {pin}
          </span>
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={generatePin}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 shadow-md"
          >
            <span>🔄</span>
            <span>Regenerate</span>
          </button>

          <button 
            onClick={copyPin} 
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition duration-300 shadow-md ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span>📋</span>
            <span>{copied ? 'Copied!' : 'Copy PIN'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}