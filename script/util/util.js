export function secondsToTime(seconds) {
    seconds = Number(seconds)

    let time = '';
    let seconds_mt;
    if (seconds < 60) {
        time = '00:'
        seconds_mt = seconds;
    }
    else if (seconds >= 60) {
        seconds_mt = seconds % 60;
        const minutes = Math.floor(seconds / 60);
        if (minutes < 10) {
            time = `0${minutes}:`;
        }
        else {
            time = `${minutes}:`;
        }
    }
    seconds_mt = Math.floor(seconds_mt)
    if (seconds_mt < 10) {
        time += `0${seconds_mt}`;
    }
    else {
        time += `${seconds_mt}`;
    }

    return time;
}