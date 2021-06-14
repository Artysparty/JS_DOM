let days = document.getElementById("days");
let daysBtn = document.getElementById("daysBtn");

let hours = document.getElementById("hours");
let hoursBtn = document.getElementById("hoursBtn");

let minutes = document.getElementById("minutes");
let minutesBtn = document.getElementById("minutesBtn");

let seconds = document.getElementById("seconds");
let secondsBtn = document.getElementById("secondsBtn");

let regEx = /^[0-9]+$/;
const secInDay = 86400;
const minutesInDay = 1440;
const hoursInDay = 24;
const secInHour = 3600;
const minInHour = 60;

daysBtn.addEventListener("click", function () {
  if (regEx.test(days.value)) {
    hours.value = Number(days.value) * hoursInDay;
    minutes.value = Number(days.value) * minutesInDay;
    seconds.value = Number(days.value) * secInDay;
  }
});

hoursBtn.addEventListener("click", function () {
  if (regEx.test(hours.value)) {
    days.value = Number(hours.value) / hoursInDay;
    minutes.value = Number(hours.value) * minInHour;
    seconds.value = Number(hours.value) * secInHour;
  }
});

minutesBtn.addEventListener("click", function () {
  if (regEx.test(minutes.value)) {
    days.value = Number(minutes.value) / minutesInDay;
    hours.value = Number(minutes.value) / minInHour;
    seconds.value = Number(minutes.value) * minInHour;
  }
});

secondsBtn.addEventListener("click", function () {
  if (regEx.test(seconds.value)) {
    days.value = Number(seconds.value) / secInDay;
    hours.value = Number(seconds.value) / secInHour;
    minutes.value = Number(seconds.value) / minInHour;
  }
});
