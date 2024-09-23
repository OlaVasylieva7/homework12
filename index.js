class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.timer = document.querySelector(this.selector);
  
      this.daysSpan = this.timer.querySelector('[data-value="days"]');
      this.hoursSpan = this.timer.querySelector('[data-value="hours"]');
      this.minsSpan = this.timer.querySelector('[data-value="mins"]');
      this.secsSpan = this.timer.querySelector('[data-value="secs"]');
  
      this.startTimer();
    }
  
    startTimer() {
      this.updateTimer(); 
      this.intervalId = setInterval(() => {
        this.updateTimer();
      }, 1000);
    }
  
    updateTimer() {
      const currentTime = new Date();
      const timeDifference = this.targetDate - currentTime;
  
      if (timeDifference <= 0) {
        clearInterval(this.intervalId);
        this.showTime(0, 0, 0, 0);
        return;
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      this.showTime(days, hours, mins, secs);
    }
  
    showTime(days, hours, mins, secs) {
      this.daysSpan.textContent = days;
      this.hoursSpan.textContent = String(hours).padStart(2, '0');
      this.minsSpan.textContent = String(mins).padStart(2, '0');
      this.secsSpan.textContent = String(secs).padStart(2, '0');
    }
  }
  
  new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Oct 10, 2024'),
  });






















