// COPYRIGHT YEAR
// function getYear() {
//   var date = new Date();
//   var year = date.getFullYear();
//   document.getElementById("year").innerHTML = year;
// }

// window.onload = getYear();

// COUNTDOWN TIMER
function countDown() {
  const electionDate = new Date("February 19, 2019 00:00:00");
  const now = new Date();
  const timeDiff = electionDate.getTime() - now.getTime();

  let seconds = Math.floor(timeDiff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  const timer = setTimeout(countDown, 1000);

  if (timeDiff <= 0) {
    clearTimeout(timer);
    return (document.getElementById("countdown").innerHTML = "It is Time!!!");
  }

  if (days < 10) {
    document.getElementById("days").innerHTML = `
      <strong>0${days}</strong <br> <span id="days">DAYS</span>
    `;
  } else {
    document.getElementById("days").innerHTML = `
      <strong>${days}</strong <br> <span id="days">DAYS</span>
    `;
  }

  if (hours < 10) {
    document.getElementById("hours").innerHTML = `
    <strong>0${hours}</strong <br> <span id="days">HOURS</span>
    `;
  } else {
    document.getElementById("hours").innerHTML = `
    <strong>${hours}</strong <br> <span id="days">HOURS</span>
    `;
  }

  if (minutes < 10) {
    document.getElementById("min").innerHTML = `
    <strong>0${minutes}</strong <br> <span id="days">MINUTES</span>
    `;
  } else {
    document.getElementById("min").innerHTML = `
    <strong>${minutes}</strong <br> <span id="days">MINUTES</span>
    `;
  }

  if (seconds < 10) {
    document.getElementById("seconds").innerHTML = `
      <strong>0${seconds}</strong <br> <span>SECONDS</span>
      `;
  } else {
    document.getElementById("seconds").innerHTML = `
      <strong>${seconds}</strong <br> <span>SECONDS</span>
      `;
  }

  document.getElementById("day").innerHTML = days;
}

window.onload = countDown();
