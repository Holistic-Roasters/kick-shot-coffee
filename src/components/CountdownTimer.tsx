'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export default function CountdownTimer({ targetDate, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Set up interval to update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex justify-center gap-4 md:gap-8 ${className}`}>
      <div className="bg-blackout-black p-4 md:p-6 w-20 md:w-28">
        <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">{timeLeft.days}</div>
        <div className="text-sm text-white">DAYS</div>
      </div>
      <div className="bg-blackout-black p-4 md:p-6 w-20 md:w-28">
        <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">{timeLeft.hours}</div>
        <div className="text-sm text-white">HOURS</div>
      </div>
      <div className="bg-blackout-black p-4 md:p-6 w-20 md:w-28">
        <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">{timeLeft.minutes}</div>
        <div className="text-sm text-white">MINUTES</div>
      </div>
      <div className="bg-blackout-black p-4 md:p-6 w-20 md:w-28">
        <div className="text-3xl md:text-4xl font-trench text-neuro-yellow">{timeLeft.seconds}</div>
        <div className="text-sm text-white">SECONDS</div>
      </div>
    </div>
  );
}
