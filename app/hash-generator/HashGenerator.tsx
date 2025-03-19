"use client";

import React, { useState } from "react";
import CryptoJS from "crypto-js";
import CRC32 from "crc-32";

const HashGenerator = () => {
  const [inputString, setInputString] = useState("");
  const [hashValue, setHashValue] = useState("");
  const [algorithm, setAlgorithm] = useState("SHA-256");
  const [v4Copied, setV4Copied] = useState(false);

  const algorithms = [
    "MD5",
    "SHA-1",
    "SHA-256",
    "SHA-512",
    "SHA-224",
    "SHA-384",
    "HmacSHA1",
    "HmacSHA256",
    "HmacSHA512",
    "CRC32",
  ];

  const calculateHash = () => {
    let hash;
    switch (algorithm) {
      case "MD5":
        hash = CryptoJS.MD5(inputString).toString();
        break;
      case "SHA-1":
        hash = CryptoJS.SHA1(inputString).toString();
        break;
      case "SHA-256":
        hash = CryptoJS.SHA256(inputString).toString();
        break;
      case "SHA-512":
        hash = CryptoJS.SHA512(inputString).toString();
        break;
      case "SHA-224":
        hash = CryptoJS.SHA224(inputString).toString();
        break;
      case "SHA-384":
        hash = CryptoJS.SHA384(inputString).toString();
        break;
      case "HmacSHA1":
        hash = CryptoJS.HmacSHA1(inputString, "secret key").toString();
        break;
      case "HmacSHA256":
        hash = CryptoJS.HmacSHA256(inputString, "secret key").toString();
        break;
      case "HmacSHA512":
        hash = CryptoJS.HmacSHA512(inputString, "secret key").toString();
        break;
      case "CRC32":
        hash = CRC32.str(inputString) >>> 0; // Ensures unsigned 32-bit integer
        hash = hash.toString(16).toUpperCase(); // Convert to hexadecimal
        break;
      default:
        hash = "";
    }
    setHashValue(hash);
  };

  const copyToClipboard = (text: any, setCopied: any) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded shadow-md w-full">
      <h2 className="text-lg font-semibold mb-2">Enter Your String</h2>
      <div className="flex flex-row items-center gap-4 w-full mb-4">
        <textarea
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          placeholder="Enter text to hash"
          className="p-2 border border-gray-300 rounded w-full h-36 resize-none"
        />
        <button
          onClick={calculateHash}
          className="p-2 max-h-[72px] min-w-24 md:min-w-28 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Calculate Hash
        </button>
      </div>
      <h2 className="text-lg font-semibold mb-2">Hash Value</h2>
      <div className="flex flex-row items-center gap-4 w-full mb-4">
        <textarea
          value={hashValue || "Hash result will appear here"}
          readOnly
          className="p-2 border border-gray-300 bg-white rounded w-full h-36 resize-none"
        />
        <button
          onClick={() => copyToClipboard(hashValue, setV4Copied)}
          className={`flex max-h-[48px] min-w-24 md:min-w-28 items-center justify-center px-3 py-2 rounded-lg transition text-sm ${
            v4Copied
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <span className="mr-2">📋</span>
          {v4Copied ? "Copied" : "Copy"}
        </button>
      </div>
      <h2 className="text-lg font-semibold mb-2">Select Algorithm</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full">
        {algorithms.map((algo) => (
          <div
            key={algo}
            className={`p-2 text-center rounded-lg cursor-pointer transition duration-300 ${
              algorithm === algo
                ? "bg-green-500 text-white"
                : "bg-white border border-gray-300"
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

export default HashGenerator;
