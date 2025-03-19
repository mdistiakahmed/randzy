"use client";

import React, { useState } from "react";
import CryptoJS from "crypto-js";

const EncryptionTool = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [algorithm, setAlgorithm] = useState("AES");
  const [copied, setCopied] = useState(false);

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
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-md mb-2">Select Encryption Algorithm</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2  mb-2">
        {algorithms.map((algo) => (
          <div
            key={algo}
            className={`p-2 text-center text-sm rounded-lg cursor-pointer transition duration-300 ${
              algorithm === algo ? "bg-green-500 text-white" : "bg-white border border-gray-300"
            } hover:bg-lime-500`}
            onClick={() => setAlgorithm(algo)}
          >
            {algo}
          </div>
        ))}
      </div>

      <h2 className="text-lg mb-2">Enter Text to Encrypt</h2>
      <div className="flex flex-row items-center gap-4 w-full mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="text to encrypt"
          className="p-2 border border-gray-300 rounded w-full h-36 resize-none"
        />
        <button
          onClick={encryptText}
          className="p-2 max-h-[72px] min-w-24 md:min-w-28 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Encrypt
        </button>
      </div>

      <h2 className="text-lg mb-2">Enter Encryption Key</h2>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="encryption key"
        className="p-2 border border-gray-300 rounded w-full mb-4"
      />

      <h2 className="text-lg mb-2">Encrypted Text</h2>
      <div className="flex flex-row items-center gap-4 w-full mb-4">
        <textarea
          value={encryptedText || "Encrypted text will appear here"}
          readOnly
          className="p-2 border border-gray-300 bg-white rounded w-full h-36 resize-none"
        />
        <button
          onClick={copyToClipboard}
          className={`flex max-h-[48px] min-w-24 md:min-w-28 items-center justify-center px-3 py-2 rounded-lg transition text-sm ${
            copied
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <span className="mr-2">📋</span>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default EncryptionTool;
