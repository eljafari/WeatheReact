import Forecast from './Forecast/Forecast'
import React, {useContext } from 'react';
import { ThemeContext } from '../contexts/context';



export default function Home() {
    const theme= useContext(ThemeContext);
    

  return (
    <div style={theme}>
        <div className="App" >
        <header className="App-header" >
          <h1>React Weather App</h1>
        </header>
        <main>
          <Forecast  />
        </main>
        <footer >
          Page created by Elham
        </footer>
      </div>
    </div>
  )
}
