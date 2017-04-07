import axios from 'axios'
const API_KEY = "3708c166659ade50c5d7b6a8d4cef59c"

export const FETCH_WEATHER = "FETCH_WEATHER"

function fetchWeather(cityName) {
  let URL = `http://api.openweathermap.org/data/2.5/\
forecast?q=${cityName},us&appid=${API_KEY}`
  let cityData = axios.get(URL)
  return {
      type: FETCH_WEATHER,
      payload: cityData
  }
}

export { fetchWeather }
