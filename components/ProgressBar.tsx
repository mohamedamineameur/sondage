"use client";
import React from "react";
import styles from "@/components/ProgresseBar.module.css";

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, totalSteps }) => {
  const percentage = Math.min((step / totalSteps) * 100, 100);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
