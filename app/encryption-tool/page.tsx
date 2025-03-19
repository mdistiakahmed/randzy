"use client";

import React, { useState } from "react";
import CryptoJS from "crypto-js";



const EncryptionTool = () => {
    const [text, setText] = useState("");
    const [key, setKey] = useState("");
    const [encryptedText, setEncryptedText] = useState("");
    const [algorithm, setAlgorithm] = useState("AES");
  
    const algorithms = ["AES", "TripleDES", "Rabbit"];
  
    const encryptText = () => {
      if (!text || !key) return;
      let encrypted;
      switch (algorithm) {
        case "AES":
          encrypted = CryptoJS.AES.encrypt(text, key).toString();
          break;
        case "TripleDES":
          encrypted = CryptoJS.TripleDES.encrypt(text, key).toString();
          break;
        case "Rabbit":
          encrypted = CryptoJS.Rabbit.encrypt(text, key).toString();
          break;
        default:
          encrypted = "";
      }
      setEncryptedText(encrypted);
    };
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(encryptedText);
    };
  
    return (
      <div className="flex flex-col p-4 bg-gray-100 rounded shadow-md w-full">
        <h2 className="text-lg font-semibold mb-2">Enter Text to Encrypt</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to encrypt"
          className="mb-4 p-2 border border-gray-300 rounded h-24 resize-none"
        />
        <h2 className="text-lg font-semibold mb-2">Enter Encryption Key</h2>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter encryption key"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={encryptText}
          className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Encrypt Text using {algorithm}
        </button>
        <h2 className="text-lg font-semibold mb-2">Encrypted Text</h2>
        <div className="mb-4 p-2 border border-gray-300 bg-white rounded">
          <p className="break-all">
            {encryptedText || "Encrypted text will appear here"}
          </p>
        </div>
        <button
          onClick={copyToClipboard}
          className="mb-4 p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
          disabled={!encryptedText}
        >
          Copy to Clipboard
        </button>
        <h2 className="text-lg font-semibold mb-2">Select Encryption Algorithm</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full">
          {algorithms.map((algo) => (
            <div
              key={algo}
              className={`p-2 text-center rounded-lg cursor-pointer transition duration-300 ${
                algorithm === algo ? "bg-green-500 text-white" : "bg-white border border-gray-300"
              } hover:bg-lime-500`}
              onClick={() => setAlgorithm(algo)}
            >
              {algo}
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default EncryptionTool;