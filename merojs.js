let hour = document.getElementById("hrs");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

//setting up the value for hour minute and second;
function clock() {
  let time = new Date();
  let hourTime = time.getHours();
  let minTime = time.getMinutes();
  let secTime = time.getSeconds();

  var hrsTime = setHour(hourTime);
  hour.innerText = hrsTime;
  minute.innerText = minTime;
  second.innerText = secTime;
}

//setting the clock to change data every 1 sec
setInterval(clock, 1000);

//setting the time less than 12
function setHour(hour) {
  if (hour > 12) {
    hour = hour - 12;
  }
  return hour;
}
