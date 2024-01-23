<template lang="">
  <div>

    <h2>Weather Information API</h2>
    <div class="card" v-if="weatherData">
      <p>Temperature: {{ ((weatherData.main.temp-32)/1,8) }} °C</p>
      <p>Description: {{ weatherData.weather[0].description }}</p>
      <img :src="getIcon(weatherData.weather[0].icon)" alt="weather">

      <div class="counter">
        <h1>{{ count }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      weatherData: null,
      count: 2395,
    };
  },
  mounted() {
    this.fetchWeatherData();
    this.interval = setInterval(() => {
      this.count++;
    }, 2600);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    async fetchWeatherData() {
      const latitude = 41.8933203;
      const longitude = 12.4829321;
      const apiKey = '77a5b271362ea786b052fdfba7a97c9f';
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
        this.weatherData = response.data;
      } catch (error) {
        console.error('Errore nella richiesta API:', error);
      }
    },
    getIcon(iconCode) {
      return `https://openweathermap.org/img/w/${iconCode}.png`;
    },
  },
};
</script>

<style lang="scss" >
    
    .card{
        background:rgb(217, 216, 216);
        padding: 12px;
    }
</style>


