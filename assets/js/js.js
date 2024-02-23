const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const btn = document.querySelector(".check-btn");
const errorDay = document.querySelector(".error-msg-day");
const errorMonth = document.querySelector(".error-msg-month");
const errorYear = document.querySelector(".error-msg-year");

const today = new Date();
document.querySelector(".check-btn").addEventListener("click", () => {
  // getting the input from the user and chaning it into numbers
  const day = parseInt(dayInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const year = parseInt(yearInput.value, 10);
  let isLeapYear;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  let maxDaysInMonth;
  if (isLeapYear) {
    maxDaysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
  const isDayValid = day > 0 && day <= maxDaysInMonth[month - 1];
  const isMonthValid = month > 0 && month < 13;
  // checking if the year is correct
  const currentYear = new Date().getFullYear();
  const isYearValid = year > 0 && year <= currentYear;

  if (!isDayValid || !isMonthValid || !isYearValid) {
    if (!isDayValid) {
      dayInput.classList.add("active");
      errorDay.classList.add("active");
    } else {
      dayInput.classList.remove("active");
      errorDay.classList.remove("active");
    }

    if (!isMonthValid) {
      monthInput.classList.add("active");
      errorMonth.classList.add("active");
    } else {
      monthInput.classList.remove("active");
      errorMonth.classList.remove("active");
    }

    if (!isYearValid) {
      yearInput.classList.add("active");
      errorYear.classList.add("active");
    } else {
      yearInput.classList.remove("active");
      errorYear.classList.remove("active");
    }
  } else {
    dayInput.classList.remove("active");
    errorDay.classList.remove("active");
    monthInput.classList.remove("active");
    errorMonth.classList.remove("active");
    yearInput.classList.remove("active");
    errorYear.classList.remove("active");
    // checking how old the user is
    const userBirthDate = new Date(year, month - 1, day);
    const today = new Date();
    const userAgeInMilliseconds = today - userBirthDate;

    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    const millisecondsInMonth = millisecondsInYear / 12;

    const userAgeInYears = Math.floor(
      userAgeInMilliseconds / millisecondsInYear
    );
    const userAgeInMonths = Math.floor(
      (userAgeInMilliseconds % millisecondsInYear) / millisecondsInMonth
    );
    const userAgeInDays = Math.floor(
      (userAgeInMilliseconds % millisecondsInMonth) / (1000 * 60 * 60 * 24)
    );

    const yearElement = document.querySelector(".year-nr");
    const monthElement = document.querySelector(".month-nr");
    const dayElement = document.querySelector(".day-nr");

    yearElement.textContent = userAgeInYears;
    monthElement.textContent = userAgeInMonths;
    dayElement.textContent = userAgeInDays;
  }
});
