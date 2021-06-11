import { themes } from '../../context/themeContext'

const MINUTE_IN_SECONDS = 60;
const SECOND_IN_MILISECONDS = 1000;

const POMODORO_MODE_IN_SECONDS = 25 * MINUTE_IN_SECONDS;
const SHORT_BREAK_MODE_IN_SECONDS = 5 * MINUTE_IN_SECONDS;
const LONG_BREAK_MODE_IN_SECONDS = 15 * MINUTE_IN_SECONDS;

const MODES = {
    "Pomodoro": {
        message: "Time to work!",
        seconds: POMODORO_MODE_IN_SECONDS,
        theme: themes.pomodoro
    },
    "Short Break": {
        message: "Time for a break!",
        seconds: SHORT_BREAK_MODE_IN_SECONDS,
        theme: themes.shortBreak
    },
    "Long Break": {
        message: "Time for a break!",
        seconds: LONG_BREAK_MODE_IN_SECONDS,
        theme: themes.longBreak
    }
}

const constants = {
    POMODORO_MODE_IN_SECONDS,
    SHORT_BREAK_MODE_IN_SECONDS,
    LONG_BREAK_MODE_IN_SECONDS,
    MINUTE_IN_SECONDS,
    SECOND_IN_MILISECONDS,
    MODES
}

export default constants;