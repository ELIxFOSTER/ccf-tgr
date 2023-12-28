import React, { useState, useEffect } from 'react';
import './Countdown.css'

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference > 0) {
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      };
    } else {
      return {
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  return (
    <div className='countdown-wrapper'>
      <div id='countdown-box-one'>
        <div>{timeLeft.hours}</div>
        <div>Hours</div>
      </div>
      <div>:</div>
      <div id='countdown-box-two'>
        <div>{timeLeft.minutes}</div>
        <div>Minutes</div>
      </div>
      <div>:</div>
      <div id='countdown-box-three'>
        <div>{timeLeft.seconds}</div>
        <div>Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
