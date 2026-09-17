import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 41,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const totalSeconds =
          prevTime.days * 86400 +
          prevTime.hours * 3600 +
          prevTime.minutes * 60 +
          prevTime.seconds -
          1;

        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: Math.floor(totalSeconds / 86400),
          hours: Math.floor((totalSeconds % 86400) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val) => String(val).padStart(2, "0");

  const accessibleTimerLabel = `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds remaining`;

  return (
    <section
      className="timer"
      role="timer"
      aria-live="off"
      aria-label={accessibleTimerLabel}
    >
      <div className="timer__container">
        {Object.entries(time).map(([key, value]) => (
          <div className="timer__item" key={key}>
            <div className="timer__card" aria-hidden="true">
              <span className="timer__card-half timer__card-half--top">
                {formatTime(value)}
              </span>
              <span className="timer__card-half timer__card-half--bottom">
                {formatTime(value)}
              </span>
            </div>
            <span className="timer__label">{key.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timer;
