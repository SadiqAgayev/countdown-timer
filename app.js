const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "10 Dec 2022";
// 1 gun 23 saat necese deqiqe necese saniye

function countdown() {
  const newYearDate = new Date(newYears);
  // console.log(newYearDate)
  const currentDate = new Date();
  //   console.log(currentDate)

  const totalSeconds = (currentDate - newYearDate) / 1000;
  //   console.log(totalSeconds);

  const days = Math.floor(totalSeconds / 3600 / 24);
  //   console.log(days)
  const hours = Math.floor(totalSeconds / 3600) % 24;
  //   console.log(hours);
  const mins = Math.floor(totalSeconds / 60) % 60;
  //   console.log(mins);
  const seconds = Math.floor(totalSeconds) % 60;
  //   console.log(seconds)

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

// countdown();

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(() => {
  countdown();
}, 1000);
