'use client'
import React, { createContext, useContext, useState } from 'react';

interface ScoreContextType {
  rank: string;
  percentile: string;
  currentScore: string;
  updateScores: (rank: string, percentile: string, score: string) => void;
}

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export function ScoreProvider({ children }: { children: React.ReactNode }) {
  const [rank, setRank] = useState('1');
  const [percentile, setPercentile] = useState('30');
  const [currentScore, setCurrentScore] = useState('10');

  const updateScores = (newRank: string, newPercentile: string, newScore: string) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setCurrentScore(newScore);
  };

  return (
    <ScoreContext.Provider value={{ rank, percentile, currentScore, updateScores }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);
  if (context === undefined) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return context;
} 