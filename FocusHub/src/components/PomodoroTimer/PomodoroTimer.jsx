import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css'

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className='PomodoroTimer'>
      <h2>Pomodoro Timer</h2>
      <p>{formatTime(time)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setTime(25 * 60)}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;