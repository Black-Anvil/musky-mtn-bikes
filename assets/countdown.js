class CountDownTimer extends HTMLElement {
  constructor() {
    super();

    //Grab required elements
    this.countdownText = this.querySelector('.countdown-text');

    this.daysContainer = this.querySelector('.days');
    this.hoursContainer = this.querySelector('.hours');
    this.minutesContainer = this.querySelector('.minutes');
    this.secondsContainer = this.querySelector('.seconds');

    // Set Date
    this.endDateString = this.querySelector('.countdown-timer').dataset.endDate;
    this.endDate = new Date(this.endDateString).getTime();

    // Start timer
    this.interval = setInterval(this.handleTick.bind(this), 1000);
  }

  handleTick() {
    //logic and update elements
    const now = new Date().getTime();
    const timeRemaining = this.endDate - now;

    if (timeRemaining <= 0) {
        clearInterval(this.interval);
        this.countdownText.innerText = this.countdownText.dataset.finalText;
        return;
    }

    const msInDay = 1000 * 60 * 60 * 24;
    const msInHour = 1000 * 60 * 60;
    const msInMinute = 1000 * 60;

    const daysRemaining = Math.floor(timeRemaining / msInDay);
    const hoursRemaining = Math.floor((timeRemaining % msInDay) / msInHour);
    const minutesRemaining = Math.floor((timeRemaining % msInHour) / msInMinute);
    const secondsRemaining = Math.floor((timeRemaining % msInMinute) / 1000);

    this.daysContainer.innerText = `${daysRemaining}d `;
    this.hoursContainer.innerText = `${hoursRemaining}h `;
    this.minutesContainer.innerText = `${minutesRemaining}m `;
    this.secondsContainer.innerText = `${secondsRemaining}s `;
  }

}

customElements.define("countdown-timer", CountDownTimer);
