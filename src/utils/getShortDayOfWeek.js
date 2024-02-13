export function getShortDayOfWeek(dateString) {
  const year = dateString.split('-')[0];
  const month = dateString.split('-')[1];
  const day = dateString.split('-')[2];
  const date = new Date(year, month - 1, day);

  return date.toLocaleString('en-US', { weekday: 'short' });
}