export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration! / 60 / 60);
  const minutes = Math.floor(duration! / 60) - hours * 60;
  const seconds = duration! % 60;
  let secondsToString: string;
  if (seconds < 10) {
    secondsToString = '0' + seconds;
  } else {
    secondsToString = seconds.toString();
  }

  const formattedHMS =
    hours === 0
      ? minutes.toString().padStart(2, '0') + ':' + secondsToString
      : hours +
        ':' +
        minutes.toString().padStart(2, '0') +
        ':' +
        secondsToString;

  return formattedHMS;
};

export const formatTime = (time: string) => {
  if (time.length === 1) {
    return 0 + time;
  } else {
    return time;
  }
};

export const convertUTCDateToLocalDate = (date: Date) => {
  var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  var offset = date.getTimezoneOffset() / 60;
  var hours = date.getHours();

  newDate.setHours(hours - offset);

  return newDate;
};

export const getElapsedTime = (date: number): string => {
  const now = new Date();
  const diff = now.getTime() - date;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (years > 0) {
    return years === 1 ? `${years} year before` : `${years} years before`;
  } else if (months > 0) {
    return months === 1 ? `${months} month before` : `${months} months before`;
  } else if (days > 0) {
    return days === 1 ? `${days} day before` : `${days} days before`;
  } else if (hours > 0) {
    return hours === 1 ? `${hours} hour before` : `${hours} hours before`;
  } else if (minutes > 0) {
    return minutes === 1
      ? `${minutes} minute before`
      : `${minutes} minutes before`;
  } else {
    return 'few seconds ago';
  }
};

export const convertUnit = (num: number): string => {
  const thousand = Math.floor(num / 1000);
  const million = Math.floor(thousand / 1000);
  if (million > 0) {
    return `${million}M`;
  } else if (thousand > 0) {
    return `${thousand}K`;
  } else {
    return num.toString();
  }
};
