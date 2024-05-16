"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { WelcomePage } from "@/components/WelcomePage";
import { Buttons } from "@/components/Buttons";
import { Pillar } from "@/components/Pillar";
import FinalPage from "@/components/FinalPage";
import ProgressBar from "@/components/ProgressBar";
import sondage from "@/Sondage.json";

// Déclarer l'interface pour les questions
interface Questions {
  Stratégie: string[];
  Environnement: string[];
  Social: string[];
  Gouvernance: string[];
}

// Déclarer le type pour sondage.json
const sondageData: Questions = sondage as Questions;

export default function Home() {
  const [step, setStep] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [pillarRatings, setPillarRatings] = useState<{ [key: string]: (number | null)[] }>({});
  const [questions, setQuestions] = useState<Questions | null>(null);

  useEffect(() => {
    setQuestions(sondageData);

    const initialRatings: { [key: string]: (number | null)[] } = {};
    (Object.keys(sondageData) as (keyof Questions)[]).forEach((pillar) => {
      initialRatings[pillar] = Array(sondageData[pillar].length).fill(null);
    });
    setPillarRatings(initialRatings);
  }, []);

  useEffect(() => {
    setAnswerSelected(step === 0);
  }, [step]);

  const handlePillarRatingSelect = (
    pillar: string,
    questionIndex: number,
    rating: number
  ) => {
    setPillarRatings((prevRatings) => ({
      ...prevRatings,
      [pillar]: prevRatings[pillar].map((r, i) =>
        i === questionIndex ? rating : r
      ),
    }));
    setAnswerSelected(true);
  };

  if (!questions) {
    return <div>Loading...</div>;
  }

  const pillars = Object.keys(questions);
  const totalSteps = pillars.reduce(
    (acc, pillar) => acc + (questions[pillar as keyof Questions]?.length || 0),
    0
  );

  const isWithinValidRange = step > 0 && step <= totalSteps;
  const currentPillarIndex = isWithinValidRange
    ? Math.floor((step - 1) / (questions[pillars[0] as keyof Questions]?.length || 1))
    : 0;
  const currentQuestionIndex = isWithinValidRange
    ? (step - 1) % (questions[pillars[0] as keyof Questions]?.length || 1)
    : 0;

  return (
    <main className={styles.main}>
      <h1>Maturity Assessment Tool</h1>
      
      <span>
      {step > 0 && <ProgressBar step={step} totalSteps={totalSteps + 1} />}
        {step === 0 && <WelcomePage />}
        {isWithinValidRange && questions[pillars[currentPillarIndex] as keyof Questions] && (
          <Pillar
            pillar={pillars[currentPillarIndex]}
            question={
              questions[pillars[currentPillarIndex] as keyof Questions][currentQuestionIndex]
            }
            questionIndex={currentQuestionIndex}
            step={step}
            onSelectRating={handlePillarRatingSelect}
            onAnswerSelected={setAnswerSelected} // Passer la fonction setAnswerSelected
          />
        )}
        {step > totalSteps && <FinalPage scores={pillarRatings} />}
        <Buttons
          step={step}
          setStep={setStep}
          totalSteps={totalSteps + 1}
          isAnswerSelected={answerSelected}
        />
      </span>
    </main>
  );
}
