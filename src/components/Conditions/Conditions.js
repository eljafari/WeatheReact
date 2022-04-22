import React from 'react';


const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                    <img src={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}.png`} />
                    
                   <p><strong>{props.responseObj.name}</strong><sup>{props.responseObj.sys.country}</sup></p>
                   <p> <b>{Math.round(props.responseObj.main.temp)}</b> degrees </p>
                   <p> feels_like <b>{Math.round(props.responseObj.main.feels_like)}</b> degrees </p>
                   <p>
                   It is {props.responseObj.weather[0].description}
                   </p>
                   <p>
                      wind Speed is<b> {props.responseObj.wind.speed} </b>
                   </p>


               </div>
           : null
           }
       </div>
   )
}

export default Conditions;