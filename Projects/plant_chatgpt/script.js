const currentTimeElement = document.getElementById('current-time');
const alarmForm = document.getElementById('alarm-form');
const alarmTimeInput = document.getElementById('alarm-time');
const alarmMessage = document.getElementById('alarm-message');

let alarmTime = null;
let alarmTimeout = null;

function updateCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTimeString = `${hours}:${minutes}:${seconds}`;
    currentTimeElement.textContent = currentTimeString;

    if (alarmTime && currentTimeString === alarmTime) {
        alarmMessage.textContent = 'Wake up! It\'s time!';
        clearTimeout(alarmTimeout);
        alarmTime = null;
    }
}

function setAlarm(event) {
    event.preventDefault();

    const alarmTimeValue = alarmTimeInput.value;
    if (alarmTimeValue) {
        alarmTime = `${alarmTimeValue}:00`;
        alarmMessage.textContent = Alarm set for `${alarmTime}`;
        
        const now = new Date();
        const alarmDate = new Date();
        const [alarmHours, alarmMinutes] = alarmTimeValue.split(':');
        alarmDate.setHours(alarmHours);
        alarmDate.setMinutes(alarmMinutes);
        alarmDate.setSeconds(0);

        if (alarmDate.getTime() < now.getTime()) {
            alarmDate.setDate(alarmDate.getDate() + 1);
        }

        const timeToAlarm = alarmDate.getTime() - now.getTime();
        alarmTimeout = setTimeout(() => {
            alarmMessage.textContent = 'Wake up! It\'s time!';
            alarmTime = null;
        }, timeToAlarm);
    }
}

alarmForm.addEventListener('submit', setAlarm);
setInterval(updateCurrentTime, 1000);