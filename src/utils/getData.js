export function getDate() {
  var today = new Date();
  var suffixes = ["th", "st", "nd", "rd"];
  var day = today.getDate();
  var suffix =
    suffixes[(day - 1) % 10 == 3 && day != 13 ? 0 : (day - 1) % 10];
  var formattedDate =
    day +
    suffix +
    " " +
    new Intl.DateTimeFormat("en-US", { month: "short" }).format(today) +
    " '" +
    today.getFullYear().toString().slice(-2);

  return formattedDate;
}
