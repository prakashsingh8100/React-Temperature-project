import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL = "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-jplenio-1118873.jpg&fm=jpg";

    let COLD_URL ="https://media.istockphoto.com/id/1289450784/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.jpg?s=2048x2048&w=is&k=20&c=yLKNr7g8G-xzeWQEEkcKAUax2z8V9Gj-twX8Kxt635g=";
    let HOT_URL ="https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.webp?b=1&s=170667a&w=0&k=20&c=8Q7_a7VqFHYU2vtvTzm1f14ADvWnBYJYrkMplD-IDMU=";
    let RAIN_URL ="https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.jpg?s=2048x2048&w=is&k=20&c=ayW8lRlZMaeQloY80kSiRvCwsEjv0cyELwzDW5hqfaY=" ;

    return (
        <div className="InfoBox">
         <div className="cardContainer">   
            <Card sx={{ maxWidth: 445 }}>
                <CardMedia
                    sx={{ height: 290 , width: 500}}
                    image={info.humidity > 100 
                        ? RAIN_URL 
                        : info.temp > 15
                        ? HOT_URL :
                         COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>Temprature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>FeelsLike = {info.feelsLike}&deg;C</div>
                        <div>TempMax = {info.tempMax}</div>
                        <div>TempMin = {info.tempMin}</div>
                    </Typography>
                </CardContent>

              </Card>
            </div> 
        </div>
    );
}
