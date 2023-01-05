
let IDLE_TIMEOUT = 30;
let _idleSecondsCounter = 0;

document.onclick = function() {
    _idleSecondsCounter = 0;
};

document.onmousemove = function() {
    _idleSecondsCounter = 0;
};
document.onkeyup = function() {
    _idleSecondsCounter = 0;
};


_idleSecondsCounter = window.setInterval(CheckIdleTime, 1000);

function CheckIdleTime() {
     _idleSecondsCounter++;
    if (_idleSecondsCounter >= IDLE_TIMEOUT) {
        window.clearInterval(_idleSecondsCounter);
        alert("Время истекло!");
        _idleSecondsCounter = 0;
    }
}

export default CheckIdleTime