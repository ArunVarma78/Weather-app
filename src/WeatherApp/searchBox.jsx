import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function searchBox({ updateWeatherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "9a6fcac1d7d8f72a153cd63bc7190eef";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResopnse = await response.json();

      let result = {
        city: city,
        feels_like: jsonResopnse.main.feels_like,
        humidity: jsonResopnse.main.humidity,
        temp: jsonResopnse.main.temp,
        weather: jsonResopnse.weather[0].description,
      };

      updateWeatherInfo(result);
      setError(false);
    } catch (err) {
      updateWeatherInfo("");
      setError(true);
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };

  return (
    <Stack>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 1,
          padding: 2,
          width: "21rem",
          borderRadius: 1,
          boxShadow: 1,
          backgroundColor: "white",
        }}
      >
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="outlined"
          size="large"
          sx={{
            margin: 2,
          }}
        >
          Search
        </Button>
      </Box>
      {error && <Alert severity="info">This is an info Alert.</Alert>}
    </Stack>
  );
}
