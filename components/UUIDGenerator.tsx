"use client";

import React, { useState, useEffect } from "react";
import {
  v1 as uuidv1,
  v4 as uuidv4,
  v7 as uuidv7,
  validate as uuidValidate,
  version as uuidVersion,
} from "uuid";

type UUIDVersion = 1 | 3 | 4 | 5 | 6 | 7;

export default function UUIDGenerator() {
  // State for different UUID generation and manipulation sections
  const [v4Uuid, setV4Uuid] = useState<string>("");
  const [v7Uuid, setV7Uuid] = useState<string>("");
  const [otherVersionUuid, setOtherVersionUuid] = useState<string>("");
  const [selectedOtherVersion, setSelectedOtherVersion] =
    useState<UUIDVersion>(1);

  // Copied state for different sections
  const [v4Copied, setV4Copied] = useState<boolean>(false);
  const [v7Copied, setV7Copied] = useState<boolean>(false);
  const [otherVersionCopied, setOtherVersionCopied] = useState<boolean>(false);

  // Validation states
  const [uuidToValidate, setUuidToValidate] = useState<string>("");
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    version?: number;
    message: string;
  } | null>(null);

  // Conversion states
  const [sourceUuid, setSourceUuid] = useState<string>("");
  const [sourceVersion, setSourceVersion] = useState<UUIDVersion>(4);
  const [targetVersion, setTargetVersion] = useState<UUIDVersion>(7);
  const [convertedUuid, setConvertedUuid] = useState<string>("");

  // Generate initial UUIDs on component mount
  useEffect(() => {
    generateV4Uuid();
    generateV7Uuid();
  }, []);

  // Utility function to copy UUID to clipboard
  const copyToClipboard = (
    uuid: string,
    setCopiedFn: (copied: boolean) => void
  ) => {
    navigator.clipboard.writeText(uuid);
    setCopiedFn(true);

    // Reset copied state after 2 seconds
    setTimeout(() => setCopiedFn(false), 2000);
  };

  // UUID v4 Generator
  const generateV4Uuid = () => {
    const newUuid = uuidv4();
    setV4Uuid(newUuid);
    setV4Copied(false);
  };

  // UUID v7 Generator
  const generateV7Uuid = () => {
    const newUuid = uuidv7();
    setV7Uuid(newUuid);
    setV7Copied(false);
  };

  // Other Version UUID Generator
  const generateOtherVersionUuid = () => {
    let newUuid = "";
    switch (selectedOtherVersion) {
      case 1:
        newUuid = uuidv1();
        break;
      case 4:
        newUuid = uuidv4();
        break;
      case 7:
        newUuid = uuidv7();
        break;
      default:
        newUuid = uuidv4(); // Fallback to v4
    }
    setOtherVersionUuid(newUuid);
    setOtherVersionCopied(false);
  };

  // UUID Validation
  const validateUuid = () => {
    if (!uuidToValidate) {
      setValidationResult(null);
      return;
    }

    const isValid = uuidValidate(uuidToValidate);
    const version = isValid ? uuidVersion(uuidToValidate) : undefined;

    setValidationResult({
      isValid,
      version,
      message: isValid
        ? `Valid UUID (Version ${version})`
        : "Invalid UUID format",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 p-3 sm:p-6 bg-white shadow-xl rounded-2xl">
      {/* UUID v4 Generator Section */}
      <section className="bg-blue-50 p-4 sm:p-6 rounded-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">
          UUID v4 Generator
        </h2>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={generateV4Uuid}
            className="w-full sm:w-auto flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <span className="mr-2">🔄</span>
            Regenerate
          </button>
          {v4Uuid && (
            <div className="w-full flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                value={v4Uuid}
                readOnly
                className="w-full p-2 border rounded-lg text-sm"
              />
              <button
                onClick={() => copyToClipboard(v4Uuid, setV4Copied)}
                className={`w-full sm:w-auto flex items-center justify-center px-3 py-2 rounded-lg transition text-sm ${
                  v4Copied
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <span className="mr-2">📋</span>
                {v4Copied ? "Copied" : "Copy"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* UUID v7 Generator Section */}
      <section className="bg-green-50 p-4 sm:p-6 rounded-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">
          UUID v7 Generator
        </h2>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={generateV7Uuid}
            className="w-full sm:w-auto flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <span className="mr-2">🔄</span>
            Regenerate
          </button>
          {v7Uuid && (
            <div className="w-full flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                value={v7Uuid}
                readOnly
                className="w-full p-2 border rounded-lg text-sm"
              />
              <button
                onClick={() => copyToClipboard(v7Uuid, setV7Copied)}
                className={`w-full sm:w-auto flex items-center justify-center px-3 py-2 rounded-lg transition text-sm ${
                  v7Copied
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <span className="mr-2">📋</span>
                {v7Copied ? "Copied" : "Copy"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* UUID Validation Section */}
      <section className="bg-purple-50 p-4 sm:p-6 rounded-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800 mb-3 sm:mb-4">
          UUID Validator/ Version Checker
        </h2>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Enter UUID to validate"
            value={uuidToValidate}
            onChange={(e) => setUuidToValidate(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          <button
            onClick={validateUuid}
            className="w-full sm:w-auto bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Validate
          </button>
        </div>
        {validationResult && (
          <div
            className={`mt-2 p-3 rounded-lg text-sm ${
              validationResult.isValid
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {validationResult.message}
          </div>
        )}
      </section>

      {/* Other Version UUID Generator */}
      <section className="bg-orange-50 p-4 sm:p-6 rounded-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-orange-800 mb-3 sm:mb-4">
          Other UUID Version Generator
        </h2>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <select
            value={selectedOtherVersion}
            onChange={(e) =>
              setSelectedOtherVersion(Number(e.target.value) as UUIDVersion)
            }
            className="w-full sm:w-auto p-2 border rounded-lg mb-2 sm:mb-0"
          >
            {([1, 4, 7] as UUIDVersion[]).map((version) => (
              <option key={version} value={version}>
                UUID v{version}
              </option>
            ))}
          </select>
          <button
            onClick={generateOtherVersionUuid}
            className="w-full sm:w-auto flex items-center justify-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            <span className="mr-2">🔄</span>
            Generate
          </button>
          {otherVersionUuid && (
            <div className="w-full flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 mt-2 sm:mt-0">
              <input
                type="text"
                value={otherVersionUuid}
                readOnly
                className="w-full p-2 border rounded-lg text-sm"
              />
              <button
                onClick={() =>
                  copyToClipboard(otherVersionUuid, setOtherVersionCopied)
                }
                className={`w-full sm:w-auto flex items-center justify-center px-3 py-2 rounded-lg transition text-sm ${
                  otherVersionCopied
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <span className="mr-2">📋</span>
                {otherVersionCopied ? "Copied" : "Copy"}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
