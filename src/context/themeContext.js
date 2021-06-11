import React from "react"

export const themes = {
    pomodoro : "#db524d",
    shortBreak: "#468e91",
    longBreak: "#437ea8"
}

export const ThemeContext = React.createContext(
    themes.pomodoro
);