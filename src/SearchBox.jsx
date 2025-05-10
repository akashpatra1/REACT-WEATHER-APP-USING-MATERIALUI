import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="1031e82180981b48e6b9fba105594774";

    let getWeatherInfo=async()=>{
        try{
        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
   
        let result={
            city:jsonResponse.name,
            temp:jsonResponse.main.temp,
            temp_min:jsonResponse.main.temp_min,
            temp_max:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            pressure:jsonResponse.main.pressure,
            weather:jsonResponse.weather[0].description,
        };
        console.log(jsonResponse);
        return result;
    }catch(error){
        throw error;
    }
    }

     let handleChange= (evt)=>{
        setCity(evt.target.value);
     }
     let handleSubmit=async (evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        setError(false);
        }catch(error){
         setError(true);
        }
     }
    return(
        <>
        <h2>Search for the weather</h2>
        <form onSubmit={handleSubmit} >
        <TextField id="outlined-basic" label="CityName" variant="outlined" value={city} onChange={handleChange} required />
        <br/>  <br/>
        <Button variant="contained" type="submit">Search</Button>
       {error && <p style={{color:"red"}}>no such details exits!</p>}
        </form>
        </>
    )
}