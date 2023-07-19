import dayjs from "dayjs";

const padWithZeros = (number, minLength) => {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
};

const getRemainingSeconds = (nowdayJs, timestampDayjs) => {
  const seconds = timestampDayjs.diff(nowdayJs, "seconds") % 60;
  return padWithZeros(seconds, 2);
};

const getRemainingMinutes = (nowdayJs, timestampDayjs) => {
  const minutes = timestampDayjs.diff(nowdayJs, "minutes") % 60;
  return padWithZeros(minutes, 2);
};

const getRemainingHours = (nowdayJs, timestampDayjs) => {
  const hours = timestampDayjs.diff(nowdayJs, "hours") % 24;
  return padWithZeros(hours, 2);
};

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const nowdayJs = dayjs();
  if (timestampDayjs.isBefore(nowdayJs)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
    };
  }
  return {
    seconds: getRemainingSeconds(nowdayJs, timestampDayjs),
    minutes: getRemainingMinutes(nowdayJs, timestampDayjs),
    hours: getRemainingHours(nowdayJs, timestampDayjs),
  };
}

export default getRemainingTimeUntilMsTimestamp;
