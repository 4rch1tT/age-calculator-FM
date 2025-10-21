const button = document.getElementById("btn");

const ageForm = document.getElementById("age-form");

const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");

const yearError = document.getElementById("year-error");
const monthError = document.getElementById("month-error");
const dayError = document.getElementById("day-error");

const yearsOutput = document.getElementById("years");
const monthsOutput = document.getElementById("months");
const daysOutput = document.getElementById("days");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  let isValid = true;

  if (!yearInput.value) {
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearError.innerText = "this field is required";
    isValid = false;
  }
  if (!monthInput.value) {
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthError.innerText = "this field is required";
    isValid = false;
  }
  if (!dayInput.value) {
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayError.innerText = "this field is required";
    isValid = false;
  }

  if (yearInput.value > year) {
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearError.innerText = "Must be in the past";
    isValid = false;
  }
  if (monthInput.value > 12) {
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthError.innerText = "Must be a valid month";
    isValid = false;
  }
  if (dayInput.value > 31) {
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayError.innerText = "Must be a valid day";
    isValid = false;
  }

  return isValid;
}

ageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validate()) {
    if (dayInput.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearInput.value;

    daysOutput.innerHTML = d;
    monthsOutput.innerHTML = m;
    yearsOutput.innerHTML = y;
  }
});
