import { useEffect, useState } from "react";

interface propCountDownCp {
  onFinish: () => void;
}

export function CountDownCp(p: propCountDownCp) {
  const [time, setTime] = useState({ minutes: 2, seconds: 0 });

  useEffect(() => {
    const myInterval = setInterval(() => {
      const { minutes, seconds } = time;
      if (minutes === 0 && seconds === 0) {
        clearInterval(myInterval);
        p.onFinish();
      } else {
        if (seconds === 0) {
          setTime({ minutes: minutes - 1, seconds: 59 });
        } else {
          setTime({ minutes, seconds: seconds - 1 });
        }
      }
    }, 1000);
    return () => clearInterval(myInterval);
  }, [time]);
  return (
    <span className="fs-1 text-center text-primary">
      {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
      {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
    </span>
  );
}
