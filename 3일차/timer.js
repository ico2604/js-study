

const timerId = setInterval(() => console.log("1초마다 실행"), 1000);

setTimeout(() => clearInterval(timerId), 5000);