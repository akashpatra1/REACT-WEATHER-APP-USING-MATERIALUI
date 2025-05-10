import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox";
import {useState} from "react";
export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]=useState({
        city:"London",
        weather:"Haze",
        feels_like: 36.24,
        humidity:30,
        pressure:1002,
        temp:36.05,
        temp_max:36.05,
        temp_min:36.05,
    });
    let updateInfo =(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <br/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}