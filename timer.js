/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
    this.isActive = false;
    this.intervalId = null;
    this.initTimer();
  }

  start() {
    if (this.isActive) {
      return;
    }

    this.initTimer();
    this.isActive = true;
    const startTime = Date.now();
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const differ = currentTime - startTime;
      const timer = this.getTimeComponents(differ);
      this.onTick(timer);
    }, 1000);
  }

  initTimer() {
    const timer = this.getTimeComponents(0);
    this.onTick(timer);
  }

  stop() {
    if (!this.isActive) {
      return;
    }
    clearInterval(this.intervalId);
    this.isActive = false;
  }

  /*
   * - Приймає час в мілісекундах
   * - Вираховує скільки в них вміщається годин/хвилин/секунд
   * - Повертає об'єкт з властивостями hours, mins, secs
   * - Адська копіпаста з stackoverflow 💩
   */
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  /*
   * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

const timer = new Timer({
  onTick: updateClockface,
});

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));

/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Рисує інтерфейс
 */
function updateClockface({ hours, mins, secs }) {
  clockface.textContent = `${hours}:${mins}:${secs}`;
}

console.log(timer.getTimeComponents(5000000000));
