"use client";

import React, { useState } from "react";
import CryptoJS from "crypto-js";

const DecryptionTool = () => {
  const [encryptedText, setEncryptedText] = useState("");
  const [key, setKey] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [algorithm, setAlgorithm] = useState("AES");
  const [copied, setCopied] = useState(false);

  const algorithms = ["AES", "TripleDES", "Rabbit"];

  const decryptText = () => {
    if (!encryptedText || !key) return;
    let decrypted;
    try {
      switch (algorithm) {
        case "AES":
          decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
          break;
        case "TripleDES":
          decrypted = CryptoJS.TripleDES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
          break;
        case "Rabbit":
          decrypted = CryptoJS.Rabbit.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
          break;
        default:
          decrypted = "";
      }
      setDecryptedText(decrypted || "Invalid key or encrypted text");
    } catch (error) {
      setDecryptedText("Decryption failed. Check your key or encrypted text.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decryptedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
        <h2 className="text-md  mb-2">Select Decryption Algorithm</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-2 w-full">
        {algorithms.map((algo) => (
          <div
            key={algo}
            className={`p-2 text-sm text-center rounded-lg cursor-pointer transition duration-300 ${
              algorithm === algo ? "bg-green-500 text-white" : "bg-white border border-gray-300"
            } hover:bg-lime-500`}
            onClick={() => setAlgorithm(algo)}
          >
            {algo}
          </div>
        ))}
      </div>

      <h2 className="text-md  mb-2">Enter Encrypted Text</h2>
      <textarea
        value={encryptedText}
        onChange={(e) => setEncryptedText(e.target.value)}
        placeholder="encrypted text"
        className="p-2 border border-gray-300 rounded w-full h-36 resize-none mb-4"
      />
      <h2 className="text-md mb-2">Enter Decryption Key</h2>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter decryption key"
        className="p-2 border border-gray-300 rounded w-full mb-4"
      />
      <button
        onClick={decryptText}
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 mb-4"
      >
        Decrypt Text using {algorithm}
      </button>
      <h2 className="text-md mb-2">Decrypted Text</h2>
      <div className="flex flex-row items-center gap-4 w-full mb-4">
        <textarea
          value={decryptedText || "Decrypted text will appear here"}
          readOnly
          className="p-2 border border-gray-300 bg-white rounded w-full h-36 resize-none"
        />
        <button
          onClick={copyToClipboard}
          className={`flex max-h-[48px] min-w-24 md:min-w-28 items-center justify-center px-3 py-2 rounded-lg transition text-sm ${
            copied ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <span className="mr-2">📋</span>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      
    </div>
  );
};

export default DecryptionTool;
