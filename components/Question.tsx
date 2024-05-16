"use client";
import React, { useState, useEffect } from "react";

interface QuestionProps {
  question: string;
  step: number;
  onSelectRating: (rating: number) => void;
  onAnswerSelected: (selected: boolean) => void; // New prop to notify if an answer is selected
}

export const Question: React.FC<QuestionProps> = ({
  question,
  step,
  onSelectRating,
  onAnswerSelected,
}) => {
  const [rating, setRating] = useState<number | null>(null);

  useEffect(() => {
    setRating(null);
    onAnswerSelected(false);
  }, [step, onAnswerSelected]);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    onSelectRating(newRating);
    onAnswerSelected(true);
  };

  return (
    <fieldset>
      <legend>
        {question} Veuillez noter votre réponse sur une échelle de 1 à 5.
      </legend>

      <div>
        <input
          type="radio"
          id={`rating1-${step}`}
          name={`rating-${step}`}
          value="1"
          checked={rating === 1}
          onChange={() => handleRatingChange(1)}
        />
        <label htmlFor={`rating1-${step}`}>1</label>
      </div>

      <div>
        <input
          type="radio"
          id={`rating2-${step}`}
          name={`rating-${step}`}
          value="2"
          checked={rating === 2}
          onChange={() => handleRatingChange(2)}
        />
        <label htmlFor={`rating2-${step}`}>2</label>
      </div>

      <div>
        <input
          type="radio"
          id={`rating3-${step}`}
          name={`rating-${step}`}
          value="3"
          checked={rating === 3}
          onChange={() => handleRatingChange(3)}
        />
        <label htmlFor={`rating3-${step}`}>3</label>
      </div>

      <div>
        <input
          type="radio"
          id={`rating4-${step}`}
          name={`rating-${step}`}
          value="4"
          checked={rating === 4}
          onChange={() => handleRatingChange(4)}
        />
        <label htmlFor={`rating4-${step}`}>4</label>
      </div>

      <div>
        <input
          type="radio"
          id={`rating5-${step}`}
          name={`rating-${step}`}
          value="5"
          checked={rating === 5}
          onChange={() => handleRatingChange(5)}
        />
        <label htmlFor={`rating5-${step}`}>5</label>
      </div>
    </fieldset>
  );
};
