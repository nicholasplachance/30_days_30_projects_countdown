const countDown = () => {
  const countDate = new Date("August 28, 2021 00:00:00").getTime();
  const currentTime = new Date().getTime();
  const gap = countDate - currentTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  console.log(textHour, textMinute, textSecond);

  document.querySelector(".days").innerText = textDay;
  document.querySelector(".hours").innerText = textHour;
  document.querySelector(".minutes").innerText = textMinute;
  document.querySelector(".seconds").innerText = textSecond;
};

setInterval(countDown, 1000);
