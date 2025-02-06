export default function getEnglishDateInBangla(date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    yearMatch: "numeric",
  };

  return new Intl.DateTimeFormat("bn-BD", options)
    .format(date)
    .replace(/,/g, "");
}
