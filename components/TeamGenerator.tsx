"use client";

import React, { useState } from "react";

export default function TeamGenerator() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [inputParticipant, setInputParticipant] = useState("");
  const [teamCount, setTeamCount] = useState(2);
  const [generatedTeams, setGeneratedTeams] = useState<string[][]>([]);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleAddParticipant = () => {
    if (
      inputParticipant.trim() &&
      !participants.includes(inputParticipant.trim())
    ) {
      setParticipants([...participants, inputParticipant.trim()]);
      setInputParticipant("");
    }
  };

  const handleDeleteParticipant = (index: number) => {
    const newParticipants = participants.filter((_, i) => i !== index);
    setParticipants(newParticipants);
  };

  const generateTeams = () => {
    if (participants.length < teamCount) {
      alert("Not enough participants to create teams");
      return;
    }

    // Shuffle participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);

    // Distribute participants evenly
    const teams: string[][] = Array.from({ length: teamCount }, () => []);
    shuffled.forEach((participant, index) => {
      teams[index % teamCount].push(participant);
    });

    setGeneratedTeams(teams);
    setIsGenerated(true);
  };

  const resetTeams = () => {
    setGeneratedTeams([]);
    setIsGenerated(false);
  };

  return (
    <div className="container mx-auto mt-2 px-4 py-2 flex flex-col lg:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full max-w-md">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <input
            type="text"
            value={inputParticipant}
            onChange={(e) => setInputParticipant(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddParticipant()}
            placeholder="Enter a participant name"
            className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleAddParticipant}
              disabled={!inputParticipant.trim()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600 w-full sm:w-auto"
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <label className="text-gray-700">Number of Teams:</label>
          <input
            type="number"
            min="2"
            max="10"
            value={teamCount}
            onChange={(e) => setTeamCount(Number(e.target.value))}
            className="w-20 px-2 py-1 border rounded-md"
          />
        </div>

        <div className="h-72 overflow-y-auto border rounded-md">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-2 border-b hover:bg-gray-100"
            >
              <span>{participant}</span>
              <button
                onClick={() => handleDeleteParticipant(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 flex space-x-4">
          <button
            onClick={generateTeams}
            disabled={participants.length < teamCount}
            className="px-4 py-2 bg-green-500 text-white rounded-md disabled:opacity-50 hover:bg-green-600 w-full"
          >
            Generate Teams
          </button>
          {isGenerated && (
            <button
              onClick={resetTeams}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 w-full"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {isGenerated && (
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            Generated Teams
          </h2>
          {generatedTeams.map((team, teamIndex) => (
            <div key={teamIndex} className="mb-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                Team {teamIndex + 1}
              </h3>
              <ul className="list-disc list-inside">
                {team.map((participant, participantIndex) => (
                  <li key={participantIndex} className="text-gray-700">
                    {participant}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
