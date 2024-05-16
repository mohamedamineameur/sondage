'use client'
import React, { useState } from "react";
import { Question } from "@/components/Question";

interface PillarProps {
  pillar: string;
  question: string;
  questionIndex: number;
  step: number;
  onSelectRating: (pillar: string, questionIndex: number, rating: number) => void;
  onAnswerSelected: (selected: boolean) => void; 
}

export const Pillar: React.FC<PillarProps> = ({ pillar, question, questionIndex, step, onSelectRating, onAnswerSelected }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
    onSelectRating(pillar, questionIndex, rating);
    onAnswerSelected(true); 
  };

  return (
    <div>
      <h2>{pillar}</h2>
      <Question question={question} step={step} onSelectRating={handleRatingSelect} onAnswerSelected={onAnswerSelected} />
    </div>
  );
};
