import Calendar from "date-bengali-revised";

export default function getBengaliDateToday() {
  const date = new Date();
  const cal = new Calendar();

  const bengaliDate = cal.fromDate(date);
  return bengaliDate.format("D MMMM Y");
}
