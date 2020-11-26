import moment from 'moment';

export const checkTimeDifference = (startTime) => {
  let endTime = new Date().toLocaleTimeString();
  return moment.duration(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss")));
}