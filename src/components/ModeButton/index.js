import './index.css'

const ModeButton = ({ currentMode, setFocusMode, children }) => {

    const mode = children;

    const wasCurrentMode = () => {
        return currentMode === mode ? "selected" : "unselected"
    }

    return (
        <button className={ wasCurrentMode() } onClick={ () => setFocusMode( mode ) }>
            { children }
        </button>
    )
}

export default ModeButton;