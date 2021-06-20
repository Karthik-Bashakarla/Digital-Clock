const hours = document.getElementById("hr");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");

const getCurrentTime = () => {
  let date = new Date();
  let localTime = date.toLocaleTimeString();
  if (localTime[0] == "1" || localTime[0] == "2") {
    let [hr1, hr2, , min1, min2, , sec1, sec2] = localTime;
    hours.innerText = hr1 + hr2;
    minutes.innerText = min1 + min2;
    seconds.innerText = sec1 + sec2;
  } else {
    let [hr1, , min1, min2, , sec1, sec2] = date.toLocaleTimeString();
    hours.innerText = hr1;
    minutes.innerText = min1 + min2;
    seconds.innerText = sec1 + sec2;
  }
};

setInterval(getCurrentTime, 1000);

