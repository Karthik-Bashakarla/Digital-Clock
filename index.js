const hours = document.getElementById("hr");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");

const getCurrentTime = () => {
  let date = new Date();
  let [hr1, hr2, , min1, min2, , sec1, sec2] = date.toLocaleTimeString();
  hours.innerText = hr1 + hr2;
  minutes.innerText = min1 + min2;
  seconds.innerText = sec1 + sec2;
};

setInterval(getCurrentTime, 1000);
