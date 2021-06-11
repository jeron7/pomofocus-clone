import React, { useState, useEffect } from "react";

import ModeButton from "../ModeButton";
import Tasks from "../Tasks";

import { ThemeContext } from "../../context/themeContext";

import { buttonClickAudio, kichenTimerAudio } from "../../utils/playableAudios";
import constants from "./constants.js";

import "./index.css";

const Focus = ({ setTheme }) => {
  const [message, setMessage] = useState(constants.MODES["Pomodoro"].message);
  const [timerSeconds, setTimerSeconds] = useState(
    constants.POMODORO_MODE_IN_SECONDS
  );
  const [isTicking, setIsTicking] = useState(false);
  const [mode, setMode] = useState("Pomodoro");

  const theme = React.useContext(ThemeContext);

  useEffect(() => {
    let interval = null;
    if (isTicking) {
      changeTitle();
      if (timerSeconds > 0) {
        interval = setInterval(
          decreaseTimerSeconds,
          constants.SECOND_IN_MILISECONDS
        );
      } else {
        toggleIsTicking();
        kichenTimerAudio().play();
      }
    }
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [isTicking, timerSeconds]);

  const changeTitle = () => {
    document.title = `${formatedTimer()} - ${message}`;
  };

  const decreaseTimerSeconds = async () => {
    setTimerSeconds(timerSeconds - 1);
  };

  const formatedTimer = () => {
    const minutes = parseInt(timerSeconds / constants.MINUTE_IN_SECONDS);
    const seconds = timerSeconds % constants.MINUTE_IN_SECONDS;
    const minutesStr = minutes >= 10 ? minutes : "0" + minutes;
    const secondsStr = seconds >= 10 ? seconds : "0" + seconds;

    return minutesStr + ":" + secondsStr;
  };

  const setCurrentMode = (nextMode) => {
    if (nextMode !== mode) {
      const { message, seconds, theme } = constants.MODES[nextMode];
      setTimerSeconds(seconds);
      setMessage(message);
      setMode(nextMode);
      setIsTicking(false);
      setTheme(theme);
    }
  };

  const toggleIsTicking = () => {
    const audio = buttonClickAudio();
    if (timerSeconds > 0) {
      if (audio.paused) audio.play();
      setIsTicking(!isTicking);
    }
  };

  const progressBarPorcentage = () => {
    const currentMode = constants.MODES[mode];
    const porcentage = 100 - (timerSeconds * 100) / currentMode.seconds;

    return `${porcentage}%`;
  };

  return (
    <div className="focus">
      <span
        className="progress-bar"
        style={{ width: progressBarPorcentage() }}
      ></span>
      <div className="timer">
        <div className="buttons">
          <ModeButton currentMode={mode} setFocusMode={setCurrentMode}>
            Pomodoro
          </ModeButton>
          <ModeButton currentMode={mode} setFocusMode={setCurrentMode}>
            Short Break
          </ModeButton>
          <ModeButton currentMode={mode} setFocusMode={setCurrentMode}>
            Long Break
          </ModeButton>
        </div>
        <h1>{formatedTimer()}</h1>
        <button
          style={{ color: theme }}
          className={"toggle " + (isTicking ? "ticking" : "")}
          onClick={toggleIsTicking}
        >
          {!isTicking ? "START" : "STOP"}
        </button>
      </div>
      <p>{message}</p>
      <Tasks />
    </div>
  );
};

export default Focus;
