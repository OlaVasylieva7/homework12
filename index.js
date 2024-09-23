function createCountdownTimer({ selector, targetDate }) {

  const timer = document.querySelector(selector);

  const daysEl = timer.querySelector('[data-value="days"]');
  const hoursEl = timer.querySelector('[data-value="hours"]');
  const minsEl = timer.querySelector('[data-value="mins"]');
  const secsEl = timer.querySelector('[data-value="secs"]');

  function startTimer() {
    updateTimer();
    const intervalId = setInterval(() => {
      updateTimer(intervalId);
    }, 1000);
  }

  function updateTimer(intervalId) {
    const currentTime = new Date();
    const timeDifference = targetDate - currentTime;

    if (timeDifference <= 0) {
      clearInterval(intervalId);
      showTime(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeDifference % (1000 * 60)) / 1000);

    showTime(days, hours, mins, secs);
  }

  function showTime(days, hours, mins, secs) {
    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  startTimer();
}

createCountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 10, 2024'),
});
