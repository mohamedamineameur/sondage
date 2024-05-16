"use client";
import React from "react";
import styles from "@/components/Buttons.module.css";

interface ButtonsProps {
  step: number;
  setStep: (step: number) => void;
  totalSteps: number;
  isAnswerSelected: boolean;
}

export const Buttons: React.FC<ButtonsProps> = ({
  step,
  setStep,
  totalSteps,
  isAnswerSelected,
}) => {
  return (
    <div
      className={styles.div}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {step > 0 && step < totalSteps && (
        <button
          className={styles.button}
          style={{ marginRight: "auto" }}
          onClick={() => setStep(step - 1)}
        >
          Précédent
        </button>
      )}
      <div style={{ marginLeft: "auto" }}>
        {step < totalSteps && (
          <button
            className={styles.button}
            onClick={() => setStep(step + 1)}
            disabled={!isAnswerSelected}
          >
            Suivant
          </button>
        )}
        {step === totalSteps && (
          <button className={styles.button} onClick={() => setStep(step + 1)}>
            Terminer
          </button>
        )}
      </div>
    </div>
  );
};
