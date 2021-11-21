export default function getTimeDifference(date) {
  const creationTime = new Date(date).getTime();

  const currentTime = new Date().getTime();

  const difference = currentTime - creationTime;

  const minutes = Math.trunc(difference / (1000 * 60));

  const hours = Math.trunc(minutes / 60);

  const days = Math.trunc(hours / 24);

  return { days, hours, minutes };
}
