let startTime, updatedTime, difference, tInterval;
let running = false;
let elapsedTime = 0;
const display = document.getElementById('display');
const lapList = document.getElementById('lap-list');

function formatTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        tInterval = setInterval(updateTime, 1);
    }
}

function updateTime() {
    updatedTime = Date.now();
    difference = updatedTime - startTime;
    elapsedTime = difference;
    display.innerHTML = formatTime(elapsedTime);
}

function pauseTimer() {
    running = false;
    clearInterval(tInterval);
}

function resetTimer() {
    running = false;
    clearInterval(tInterval);
    elapsedTime = 0;
    display.innerHTML = formatTime(elapsedTime);
    lapList.innerHTML = '';
}

function recordLap() {
    if (running) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
