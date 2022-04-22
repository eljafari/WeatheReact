import './App.css';
import Forecast from "./components/Forecast/Forecast";
import { ThemeContext, Theme } from './contexts/context';
import {useContext, useState} from "react";
import Home from './components/Home';
import { AppBar, InputLabel, Switch, Toolbar } from '@mui/material';

function App() {
      // const theme= useContext(ThemeContext);
    const [appTheme,setTheme]=useState(Theme.light)

    const SwitchTheme=()=>{
      appTheme==Theme.dark ? 
        setTheme(Theme.light) : setTheme(Theme.dark)
    }
  return (
    
    <ThemeContext.Provider value={appTheme}>
      <AppBar position="static" color="secondary">
        <Toolbar style={{ display: "flex", justifyContent:"flex-end"}}>
            <InputLabel>
            Switch Theme
            </InputLabel>
            <Switch defaultChecked onChange= {SwitchTheme}/>
        </Toolbar>
      </AppBar>
      <Home/>
    </ThemeContext.Provider>
      
  );
}

export default App;
