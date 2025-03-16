"use client"

import React, { useState, useEffect, useRef } from 'react';
import countriesData from '../data/countries.json';

const FlagQuiz = () => {
    const [currentCountry, setCurrentCountry] = useState<any>(null);
    const [options, setOptions] = useState<any>([]);
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [timer, setTimer] = useState(30);
    const [totalQuestions, setTotalQuestions] = useState(10);
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [selectedOption, setSelectedOption] = useState<any>('');
    const [timePerQuestion, setTimePerQuestion] = useState(30);
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [selectedRegion, setSelectedRegion] = useState<any>('All');

    const submitButtonRef = useRef<HTMLButtonElement>(null);
    let filteredCountries = countriesData.filter(country => country.independent);

    useEffect(() => {
        loadNextCountry();
    }, []);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    clearInterval(timerInterval);
                    if (submitButtonRef.current) {
                        submitButtonRef.current.click(); // Programmatically click the submit button
                    } // Automatically submit when time is up
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [questionIndex]);

    const loadNextCountry = () => {
        if (filteredCountries.length > 0) {
            
            const randomIndex = Math.floor(Math.random() * filteredCountries.length);
        const country = filteredCountries[randomIndex];

        // Remove the selected country from the array
        filteredCountries.splice(randomIndex, 1);

            setCurrentCountry(country);
            setOptions(generateOptions(country));
            setTimer(timePerQuestion);
        } else {
            setIsModalOpen(true);
            setModalMessage(`Quiz finished! Your score: ${score}`);
        }
    };

    const generateOptions = (correctCountry: any) => {
        const shuffled = filteredCountries.sort(() => 0.5 - Math.random()).slice(0, 3);
        shuffled.push(correctCountry);
        return shuffled.sort(() => 0.5 - Math.random());
    };
 
    const handleSubmit = () => {
        if (selectedOption === currentCountry.name.common) {
            setScore(score + 1);
            setModalMessage(`Your Answer is correct! The country name is ${currentCountry.name.common}.`);
            setIsCorrect(true);
        } else {
            setModalMessage(`Your Answer is incorrect! The country name is ${currentCountry.name.common}.`);
            setIsCorrect(false);
        }

        if(questionIndex < numberOfQuestions) {
            setQuestionsAnswered(questionsAnswered + 1);
        }
        
        setIsModalOpen(true);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const closeModal = () => {
         setIsModalOpen(false);
         console.log(questionIndex);
         console.log(numberOfQuestions);

         if(questionIndex < numberOfQuestions) {
            setQuestionIndex(questionIndex + 1);
            loadNextCountry();
         } else {
            setIsModalOpen(true);
            setModalMessage(`Quiz finished! Your score: ${score}`);
            setQuestionIndex(0);
            setQuestionsAnswered(0);
            setScore(0);
         }
    };

    const handleSettingsChange = () => {
        filteredCountries = countriesData.filter(country => country.independent);

        if (selectedRegion !== 'All') {
            filteredCountries = filteredCountries.filter(country => country.region === selectedRegion);
        }

        setTotalQuestions(numberOfQuestions);
        setQuestionIndex(1);
        setQuestionsAnswered(0);
        setScore(0);
        loadNextCountry();
    };

    useEffect(() => {
        handleSettingsChange();
    }, [numberOfQuestions, timePerQuestion, selectedRegion]);

    return (
        <div className="flex flex-col items-center justify-center p-4  min-h-screen">
            <div className="flex justify-between w-full max-w-md mb-4">
                <div className="p-4 bg-blue-100 rounded-lg shadow-md flex-1 mr-2">
                    <h2 className="text-xl font-bold">Scoreboard</h2>
                    <p className="text-lg">Current Score: <span className="font-semibold text-blue-600">{score}/{questionsAnswered}</span></p>
                </div>
                <div className="p-4 bg-yellow-100 rounded-lg shadow-md flex-1 ml-2">
                    <h2 className="text-xl font-bold">Time Remaining</h2>
                    <p className="text-lg font-semibold text-yellow-600">{timer} seconds</p>
                </div>
            </div>
            <p className="text-lg mb-4">Question {questionsAnswered+1 }/{totalQuestions}</p>
            {currentCountry && (
                <div>
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-6">
                        <img className="w-64 h-auto border-2 border-black rounded-lg mb-4" src={currentCountry.flags.png} alt={currentCountry.name} />
                        <div className="flex flex-col w-full">
                            {options.map((option: any, index: any) => (
                                <div key={index} 
                                    className={`p-2 mb-2 min-w-[200px] text-center bg-slate-200 rounded-lg cursor-pointer transition duration-300 ${selectedOption === option.name.common ? 'bg-green-500' : 'bg-white'} hover:bg-lime-500`} 
                                    onClick={() => handleOptionClick(option.name.common)}>
                                    {option.name.common}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button ref={submitButtonRef} onClick={() => handleSubmit()} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer w-full">Submit</button>
                </div>
            )}
            {!currentCountry && <button onClick={loadNextCountry} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 cursor-pointer">Start Quiz</button>}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className={`bg-${isCorrect ? 'green' : 'red'}-500 p-4 rounded shadow-lg w-full max-w-md mx-4`}> 
                        <p className="text-white text-center">{modalMessage}</p>
                        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">Next</button>
                    </div>
                </div>
            )}
            <div className="mt-28 w-full max-w-md">
                <h2 className="text-xl font-bold mb-2">Settings</h2>
                <div className="mb-4">
                    <label className="block mb-1">Time for Each Question:</label>
                    <select value={timePerQuestion} onChange={(e) => setTimePerQuestion(Number(e.target.value))} className="border rounded p-2 w-full">
                        <option value={10}>10 seconds</option>
                        <option value={20}>20 seconds</option>
                        <option value={30}>30 seconds</option>
                        <option value={60}>1 minute</option>
                        <option value={120}>2 minutes</option>
                        <option value={300}>5 minutes</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Number of Questions:</label>
                    <select value={numberOfQuestions} onChange={(e) => setNumberOfQuestions(Number(e.target.value))} className="border rounded p-2 w-full">
                        {[...Array(filteredCountries.length).keys()].map(i => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Select Region:</label>
                    <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="border rounded p-2 w-full">
                        <option value="All">All</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Americas">Americas</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FlagQuiz