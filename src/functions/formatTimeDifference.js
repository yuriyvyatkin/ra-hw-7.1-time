import getNoun from './getNoun';

export default function formatTimeDifference(timeDifference) {
  let result;
  let noun;

  if (timeDifference.days !== 0) {
    noun = getNoun(
      timeDifference.days,
      'день',
      'дня',
      'дней',
    );
    result = timeDifference.days;
  } else if (timeDifference.hours !== 0) {
    noun = getNoun(
      timeDifference.hours,
      'час',
      'часа',
      'часов',
    );
    result = timeDifference.hours;
  } else {
    noun = getNoun(
      timeDifference.minutes,
      'минуту',
      'минуты',
      'минут',
    );
    result = timeDifference.minutes;
  }

  return `${result} ${noun} назад`
}
