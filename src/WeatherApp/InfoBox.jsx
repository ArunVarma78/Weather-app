import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function InfoBox({ weatherInfo }) {
  return (
    <Card sx={{ width: "23rem" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span className="city">{weatherInfo.city} : </span>
          <span>
            {" "}
            <i>{weatherInfo.temp} &deg;C</i>
          </span>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <p>Feels like : {weatherInfo.feels_like} &deg;C</p>
          <p>weather : {weatherInfo.weather}</p>
          <p>Humidity : {weatherInfo.humidity}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
