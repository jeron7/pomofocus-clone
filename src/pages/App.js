import { useState } from 'react'

import Focus from '../components/Focus';
import { ThemeContext, themes } from '../context/themeContext';

import './App.css';


function App() {

  const [theme, setTheme] = useState(themes.pomodoro)

  return (
    <div className="App" style={{ backgroundColor: theme }}>
      <ThemeContext.Provider value={ theme }>
        <header className="app-header">
          <h2 className="logo">Pomofocus</h2>
          <div className="buttons">
            <button>Report</button>
            <button>Setting</button>
            <button>Login</button>
          </div>
        </header>
        <Focus setTheme={ setTheme } />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
