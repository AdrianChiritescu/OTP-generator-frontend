import "./CountDown.css";
import { useEffect, useState } from "react";

const defaultRemainingTime = 30;

function CountDown({ countDownTime }) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTime--);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDownTime]);

  const updateRemainingTime = (countDown) => {
    if (countDown <= 0) {
      setRemainingTime(0);
      return;
    }

    setRemainingTime(countDown);
  };

  return (
    <p className="countDown">
      Expires in <span>{remainingTime}</span>
    </p>
  );
}

export default CountDown;
