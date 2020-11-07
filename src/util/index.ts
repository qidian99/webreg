import * as moment_ from 'moment';
const moment = moment_;


export const timeStringMap = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
export const getCourseTimeString: (time: Array<number>) => Array<string> = (time) => {
  const res: Array<string> = [];
  time.forEach(date => timeStringMap[date]);
  return res;
}

export const CALENDAR_TIMES = [
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
  '9pm',
  '10pm',
];


export const DATE_PREFIX = '2020-10-20T';

export const calcDuration = (start: string, end: string) => moment.duration(
  moment(end).diff(moment(start)),
).asMinutes();

// height
export const calcRowSpan = (startTime: string, endTime: string, datePrefix = DATE_PREFIX) => {
  // Calculate the duration of class in minutes
  const classDuration = calcDuration(startTime, endTime);
  // The earlist class starts from 8am in the morning
  const classStart = calcDuration(`${datePrefix}08:00:00`, startTime);
  // Calculate the offset in multiple of ten minutes
  const rowStart = Math.floor(classStart / 10) + 1;
  // grid-row-start / grid-row-end
  return `${rowStart}/${rowStart + Math.floor(classDuration / 10)}`;
};

export const calcColSpan = (dayOfWeek: number) => `${dayOfWeek}/${dayOfWeek + 1}`;

export const calculateCardPosition = (
  startTime: string,
  endTime: string,
  dayOfWeek = 1,
  datePrefix = DATE_PREFIX,
) => ({
  gridRow: calcRowSpan(
    datePrefix + startTime,
    datePrefix + endTime,
    datePrefix,
  ),
  gridColumn: calcColSpan(dayOfWeek),
});
