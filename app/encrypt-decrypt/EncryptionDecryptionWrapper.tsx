"use client";

import React, { useState } from "react";
import EncryptionTool from "./EncryptionTool"; // Import your existing EncryptionTool component
import DecryptionTool from "./DecryptionTool"; // Import your existing DecryptionTool component

const EncryptionDecryptionWrapper = () => {
  const [mode, setMode] = useState("Encrypt");

  return (
    <div className="w-full">
      {/* Mode Switch */}
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 rounded-l-lg transition ${
            mode === "Encrypt" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setMode("Encrypt")}
        >
          Encrypt
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg transition ${
            mode === "Decrypt" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setMode("Decrypt")}
        >
          Decrypt
        </button>
      </div>

      {/* Render the selected component */}
      {mode === "Encrypt" ? <EncryptionTool /> : <DecryptionTool />}
    </div>
  );
};

export default EncryptionDecryptionWrapper;
