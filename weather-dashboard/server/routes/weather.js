const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/weather', async (req, res) => {
  const { city } = req.query;
  
  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const response = await axios.get(url);
    const weatherData = {
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity, 
      windSpeed: response.data.wind.speed
    };

    res.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(404).json({ error: 'City not found or API error' });
  }
});

module.exports = router;