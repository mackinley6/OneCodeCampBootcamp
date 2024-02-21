let timer;
let minutes = 0;
let seconds = 0;

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timerDisplay');
const timeInput = document.getElementById('timeInput');

startButton.addEventListener('click', async () => {
    if (timer) {
    clearInterval(timer);
    }
    minutes = parseInt(timeInput.value, 10) || 0;
    seconds = 0;
    updateTimerDisplay();

    timer = setInterval(async () => {
        await decrementTime();
        updateTimerDisplay();

        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          alert('Time is up!');
        }
      }, 1000);
    });

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    updateTimerDisplay();
    });

async function decrementTime() {
    return new Promise(resolve => {
    setTimeout(() => {
        if (seconds > 0) {
         seconds--;
        } else if (minutes > 0) {
        minutes--;
        seconds = 59;
        }
        resolve();
    }, 1000);
    });
}

function updateTimerDisplay() {
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;
    }