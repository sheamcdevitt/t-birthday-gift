import React, { useEffect, useState } from 'react';
import { DateTime, Duration } from 'luxon';
import Typography from '@mui/material/Typography';

const Clock = () => {
  const targetDate = '2023-09-16T15:00:00';
  const [remainingTime, setRemainingTime] = useState<Duration>(
    getRemainingTime()
  );

  function getRemainingTime(): Duration {
    const now = DateTime.local();
    const target = DateTime.fromISO(targetDate);
    return target.diff(now);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: Duration): string => {
    return time.toFormat("d' days ' hh.mm.ss");
  };

  return (
    <Typography
      data-text={formatTime(remainingTime)}
      className='glitch layers'
      fontSize={60}
      color='white'
      textAlign='center'
      lineHeight={1}
    >
      {formatTime(remainingTime)}
    </Typography>
  );
};

export default Clock;
