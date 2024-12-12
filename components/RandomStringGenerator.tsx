"use client";

import React, { useState, useCallback } from 'react';

export default function RandomStringGenerator() {
  const [randomStrings, setRandomStrings] = useState<string[]>([]);
  const [length, setLength] = useState<number>(10);
  const [lines, setLines] = useState<number>(10);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [wordBySeparation, setWordBySeparation] = useState<boolean>(false);
  const [newLinePerString, setNewLinePerString] = useState<boolean>(true);

  const generateRandomString = useCallback(() => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%';

    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (charSet.length === 0) {
      alert('Please select at least one character type');
      return;
    }

    const generateSingleString = () => {
      if (wordBySeparation) {
        // Generate a "sentence-like" string with precise length control
    const words: string[] = [];
    let currentLength = 0;

    while (currentLength < length) {
      // Determine remaining length
      const remainingLength = length - currentLength;
      
      // Calculate word length, ensuring it doesn't exceed remaining length
      const wordLength = Math.min(
        Math.max(1, Math.floor(Math.random() * 5) + 1), 
        remainingLength
      );

      // Generate word
      const word = Array.from(crypto.getRandomValues(new Uint32Array(wordLength)))
        .map((x) => charSet[x % charSet.length])
        .join('');

      words.push(word);
      currentLength += word.length + (words.length > 1 ? 1 : 0); // Account for space
    }

    // Trim or adjust the last word if necessary
    if (words.length > 1) {
      const totalLength = words.reduce((sum, word) => sum + word.length, words.length - 1);
      if (totalLength > length) {
        const lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord.slice(0, length - (totalLength - lastWord.length));
      }
    }

    return words.join(' ').slice(0, length);
      } else {
        // Generate a standard random string
        return Array.from(crypto.getRandomValues(new Uint32Array(length)))
          .map((x) => charSet[x % charSet.length])
          .join('');
      }
    };

    const generatedStrings = Array.from({ length: lines }, () => generateSingleString());

    setRandomStrings(generatedStrings);
  }, [length, lines, includeUppercase, includeLowercase, includeNumbers, includeSymbols, wordBySeparation]);

  const copyToClipboard = useCallback(() => {
    if (randomStrings.length > 0) {
      const stringsToCopy = newLinePerString 
        ? randomStrings.join('\n') 
        : randomStrings.join(' ');
      
      try {
        navigator.clipboard.writeText(stringsToCopy);
        setCopied(true);
        
        // Reset copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        alert('Failed to copy');
        console.error('Copy failed', err);
      }
    }
  }, [randomStrings, newLinePerString]);

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-gray-700">String Length</label>
          <input
            type="number"
            min="1"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-20 p-1 border rounded text-center"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Number of Strings</label>
          <input
            type="number"
            min="1"
            value={lines}
            onChange={(e) => setLines(Number(e.target.value))}
            className="w-20 p-1 border rounded text-center"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <span>Uppercase(A-Z)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          <span>Lowercase(a-z)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <span>Numbers(0-9)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          <span>Symbols(!@#$%)</span>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={wordBySeparation}
            onChange={() => setWordBySeparation(!wordBySeparation)}
          />
          <span>Word-by-Word</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={newLinePerString}
            onChange={() => setNewLinePerString(!newLinePerString)}
          />
          <span>New Line per String</span>
        </label>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={generateRandomString}
          className="w-full mr-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate Strings
        </button>
        <button
          onClick={copyToClipboard}
          disabled={randomStrings.length === 0}
          className={`w-full ml-2 p-2 rounded ${
            copied 
              ? 'bg-green-700 text-white' 
              : 'bg-green-500 text-white hover:bg-green-600'
          } disabled:opacity-50`}
        >
          {copied ? 'Copied!' : 'Copy Strings'}
        </button>
      </div>

      {randomStrings.length > 0 && (
  <div className="mt-4 p-3 bg-gray-100 rounded overflow-x-auto">
    {newLinePerString ? (
      randomStrings.map((str, index) => (
        <div key={index} className="text-sm text-gray-700 break-all">
          {str}
        </div>
      ))
    ) : (
      <div className="text-sm text-gray-700 break-all">
        {randomStrings.join(' ')}
      </div>
    )}
  </div>
)}
    </div>
  );
}