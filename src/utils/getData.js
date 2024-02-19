export function getDate() {
  var today = new Date();
  var suffixes = ["th", "st", "nd", "rd"];
  var day = today.getDate();
  var suffix;
  if (day >= 11 && day <= 13) {
    suffix = "th";
  } else {
    suffix = suffixes[day % 10 <= 3 ? day % 10 : 0];
  }
  var formattedDate =
    day +
    suffix +
    " " +
    new Intl.DateTimeFormat("en-US", { month: "short" }).format(today) +
    " '" +
    today.getFullYear().toString().slice(-2);

  return formattedDate;
}
