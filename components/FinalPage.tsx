"use client";
import React from "react";

interface FinalPageProps {
  scores: { [key: string]: (number | null)[] };
}

const FinalPage: React.FC<FinalPageProps> = ({ scores }) => {
  return (
    <div>
      <h2>Merci d&apos;avoir complété le questionnaire !</h2>
      <h3>Vos scores :</h3>
      {Object.entries(scores).map(([pillar, scoresArray]) => (
        <div key={pillar}>
          <h4>{pillar}</h4>
          <ul>
            {scoresArray.map((score, index) => (
              <li key={index}>
                Question {index + 1} : {score !== null ? score : "Non noté"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FinalPage;
