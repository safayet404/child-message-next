import moment from "moment";

// Bangla numerals and units
const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const banglaUnits = {
  minute: "মিনিট",
  hour: "ঘন্টা",
  day: "দিন",
  week: "সপ্তাহ",
  month: "মাস",
};

// Helper function to convert English numbers to Bangla
function toBanglaNumber(number) {
  return number
    .toString()
    .split("")
    .map((digit) => (isNaN(digit) ? digit : banglaNumbers[digit]))
    .join("");
}

export default function getTimeDifference(createdAt, language = "english") {
  const createdAtMoment = moment(createdAt);
  const now = moment();

  // Calculate the difference in various units
  const diffInMinutes = now.diff(createdAtMoment, "minutes");
  if (diffInMinutes < 60) {
    const value =
      language === "bangla" ? toBanglaNumber(diffInMinutes) : diffInMinutes;
    const unit = language === "bangla" ? banglaUnits.minute : "minute";
    return `${value} ${unit}${
      diffInMinutes === 1 ? "" : language === "bangla" ? "" : "s"
    }`;
  }

  const diffInHours = now.diff(createdAtMoment, "hours");
  if (diffInHours < 24) {
    const value =
      language === "bangla" ? toBanglaNumber(diffInHours) : diffInHours;
    const unit = language === "bangla" ? banglaUnits.hour : "hour";
    return `${value} ${unit}${
      diffInHours === 1 ? "" : language === "bangla" ? "" : "s"
    }`;
  }

  const diffInDays = now.diff(createdAtMoment, "days");
  if (diffInDays < 7) {
    const value =
      language === "bangla" ? toBanglaNumber(diffInDays) : diffInDays;
    const unit = language === "bangla" ? banglaUnits.day : "day";
    return `${value} ${unit}${
      diffInDays === 1 ? "" : language === "bangla" ? "" : "s"
    }`;
  }

  const diffInWeeks = now.diff(createdAtMoment, "weeks");
  if (diffInWeeks < 4) {
    const value =
      language === "bangla" ? toBanglaNumber(diffInWeeks) : diffInWeeks;
    const unit = language === "bangla" ? banglaUnits.week : "week";
    return `${value} ${unit}${
      diffInWeeks === 1 ? "" : language === "bangla" ? "" : "s"
    }`;
  }

  const diffInMonths = now.diff(createdAtMoment, "months");
  const value =
    language === "bangla" ? toBanglaNumber(diffInMonths) : diffInMonths;
  const unit = language === "bangla" ? banglaUnits.month : "month";
  return `${value} ${unit}${
    diffInMonths === 1 ? "" : language === "bangla" ? "" : "s"
  }`;
}
