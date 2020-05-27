import React, { useState} from 'react';
import './App.css';
import Title from './Component/Title';
import Forms from './Component/Forms';
import Weather from './Component/Weather';

function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState(undefined);
  const [humidity, setHumidity ] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const API_KEY = '2adaafd71f35a36f3fbde7055cb90027';

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    setTemp(data.main.temp);
    setHumidity(data.main.humidity);
    setDescription(data.weather[0].description);
    })
  }

  const onButton = (e) =>{
    fetchWeather();
  }
  const citySearch = (e) =>{
    setCity(e.target.value)
  }
  const countrySearch = (e) => {
    setCountry(e.target.value)
  }
  return (
    <div className="App">
      <Title/>
      <Forms onButton={onButton} city = {city} country = {country} countrySearch = {countrySearch} citySearch = {citySearch}/>
      <Weather city ={city} country = {country} temp = {temp} humidity = {humidity} description = {description}/>
    </div>
  );
}

export default App;
