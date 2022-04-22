import React, {useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/context';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';



const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    const uriEncodedCity = encodeURIComponent(city);
    let [responseObj, setResponseObj] = useState({});
    const Theme= useContext(ThemeContext);


    function getForecast(e) {
        e.preventDefault();
       fetch(`https://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${uriEncodedCity}&appid=b616e8f9b0f5ea6e4561ed1d32ac9fc8`)
       .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
   }

   return (
       <div className={classes.WeatherInfo}  >
           <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.TextInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input 
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>

                <button className={classes.Button} type="submit">Get Forecast</button>

            </form>
            {/* {JSON.stringify(data)} */}
           <Conditions
               responseObj={responseObj}
               />
       </div>
   )
}

export default Forecast;









// const [lat, setLat] = useState([]);
//     const [long, setLong] = useState([]);
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         const fetchData =  () => {
//           navigator.geolocation.getCurrentPosition(function(position) {
//             setLat(position.coords.latitude);
//             setLong(position.coords.longitude);
//           });
    
//             fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=${unit}&appid=b616e8f9b0f5ea6e4561ed1d32ac9fc8`)
//             .then(res => res.json())
//             .then(result => {
//                 setData(result)
//             });
//             }
//             fetchData();
//         }, [lat,long])
