export function getDayOfWeek() {
  var today = new Date();
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayOfWeekIndex = today.getDay();
  var dayOfWeek = daysOfWeek[dayOfWeekIndex];

  return dayOfWeek;
}
