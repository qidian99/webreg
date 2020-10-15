export const timeStringMap = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
export const getCourseTimeString: (time: Array<number>) => Array<string> = (time) => {
  const res: Array<string> = [];
  time.forEach(date => timeStringMap[date]);
  return res;
}
