
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  initialMinutes?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes = 5 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg text-center animate-pulse">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock className="w-6 h-6" />
        <span className="text-lg font-semibold">TEMPO LIMITADO!</span>
      </div>
      <div className="text-4xl font-bold font-mono">
        {formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <p className="text-sm mt-2 opacity-90">Minutos restantes para garantir sua unidade</p>
    </div>
  );
};

export default CountdownTimer;
