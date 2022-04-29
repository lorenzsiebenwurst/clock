function logTime() {
  const label = document.querySelector("label");
  const hoursClock = document.getElementById("hours");
  const minutesClock = document.getElementById("minutes");
  const secondsClock = document.getElementById("seconds");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  if (seconds % 2 === 0) {
    label.innerText = hours + ":" + minutes + ":" + seconds;
  } else {
    label.innerText = hours + " " + minutes + " " + seconds;
  }
  hoursClock.style.setProperty("--hours", hours * 30 + "deg");
  minutesClock.style.setProperty("--minutes", minutes * 6 + "deg");
  secondsClock.style.setProperty("--seconds", seconds * 6 + "deg");
}
logTime();
setInterval(logTime, 1000);
