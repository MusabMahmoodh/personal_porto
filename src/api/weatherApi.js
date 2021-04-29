import axios from "axios";

const options = {
  method: "GET",
  url: "https://weatherbit-v1-mashape.p.rapidapi.com/alerts",
  params: { lat: "38.5", lon: "-78.5" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_WEATHER_API_KEY,
    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
  },
};

export const fetchWeather = () => {
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
