import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./CountdownUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
};

function Countdown({ countdownTimestampMs }) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  const updateRemainingTime = (countdown) => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  return (
    <div className="flex justify-center gap-5">
      <div>
        <span className="countdown font-mono text-blue text-4xl mr-1">
          <span style={{ "--value": remainingTime.hours }}></span>
        </span>
        heures
      </div>
      <div>
        <span className="countdown font-mono text-blue text-4xl mr-1">
          <span style={{ "--value": remainingTime.minutes }}></span>
        </span>
        minutes
      </div>
      <div>
        <span className="countdown font-mono text-blue text-4xl mr-1">
          <span style={{ "--value": remainingTime.seconds }}></span>
        </span>
        secondes
      </div>
    </div>
  );
}

Countdown.propTypes = {
  countdownTimestampMs: PropTypes.instanceOf(Date),
};

Countdown.defaultProps = {
  countdownTimestampMs: "",
};

export default Countdown;
