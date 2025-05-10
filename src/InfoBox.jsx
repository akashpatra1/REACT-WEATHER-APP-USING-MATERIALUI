import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({Info}){
    let image_url="https://images.unsplash.com/photo-1542360663-aa572e4d66cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let hot_url="https://images.unsplash.com/photo-1643632678416-133e2ff59c52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let cold_url="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let rain_url="https://images.unsplash.com/photo-1689222485261-4120a5974ff0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(<div className="InfoBox">
      
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity > 80 ? rain_url : Info.temp > 15 ? hot_url : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city} &nbsp;{Info.humidity > 80 ? <ThunderstormIcon/> : Info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
         <p>FeelsLike - {Info.feels_like}&deg;C</p>
         <p>Humidity - {Info.humidity}%</p>
         <p>Pressure - {Info.pressure} mb</p>
         <p>Tempreture - {Info.temp}&deg;C</p>
         <p>Temp_Min - {Info.temp_min}&deg;C</p>
         <p>Temp_Max - {Info.temp_max}&deg;C</p>
<p>The weather can be described as <i><b>{Info.weather}</b></i> and feelslike <i><b> {Info.feels_like}&deg;C</b></i></p>

        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>);

}