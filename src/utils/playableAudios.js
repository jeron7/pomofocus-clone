const BUTTON_CLICK_URL = './sound/button-click.mp3'; 
const KICHEN_TIMER_URL = './sound/kichen-timer.mp3';
const AUDIO_VOLUME = 0.4; 

export const buttonClickAudio = () => {
    const audio = new Audio(BUTTON_CLICK_URL);
    audio.volume = AUDIO_VOLUME;
    return audio;
}

export const kichenTimerAudio = () => {
    const audio = new Audio(KICHEN_TIMER_URL);
    audio.volume = AUDIO_VOLUME;
    return audio;
}