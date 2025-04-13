'use client';

import { useState, useEffect } from 'react';

interface FundingProgressProps {
  currentAmount: number;
  goalAmount: number;
  className?: string;
}

export default function FundingProgress({ 
  currentAmount, 
  goalAmount, 
  className = '' 
}: FundingProgressProps) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Calculate percentage with a maximum of 100%
    const calculatedPercentage = Math.min(
      Math.round((currentAmount / goalAmount) * 100),
      100
    );
    
    // Animate the percentage from 0 to calculated value
    let start = 0;
    const increment = calculatedPercentage > 0 ? Math.ceil(calculatedPercentage / 60) : 0;
    const timer = setInterval(() => {
      start += increment;
      if (start >= calculatedPercentage) {
        setPercentage(calculatedPercentage);
        clearInterval(timer);
      } else {
        setPercentage(start);
      }
    }, 20);
    
    return () => clearInterval(timer);
  }, [currentAmount, goalAmount]);

  // Format currency with commas
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className={`bg-blackout-black p-6 inline-block ${className}`}>
      <div className="text-xl font-trench text-neuro-yellow mb-2">FUNDING GOAL</div>
      <div className="w-full bg-asphalt-gray h-4 mb-2">
        <div 
          className="bg-neuro-yellow h-4 transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-white">
        <span>{formatCurrency(currentAmount)} / {formatCurrency(goalAmount)}</span>
        <span>{percentage}%</span>
      </div>
    </div>
  );
}
