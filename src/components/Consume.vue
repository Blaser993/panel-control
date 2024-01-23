<template lang="">
  <div>

    <h2>Weather Information API</h2>
    <div class="card row" v-if="weatherData">
      <ul class='col-6'>
        <li>
          <h1>{{weatherData.name}}</h1>
          <h1>{{ ((weatherData.main.temp-32)/1,8) }}°C</h1>
        </li>
        <li>
          <h1>{{ weatherData.weather[0].description }}</h1>
        </li>
      </ul>
      
   
        <figure class="col-6 hole">         
          <img  :src="getIcon(weatherData.weather[0].icon)" alt="weather">
        </figure>

      <div class="col-12 hole row">
        <div class="box" v-for="(digit, index) in counter" :key="index">
          <h1>{{ digit }}</h1>
        </div>
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
      count: 98,
    };
  },

  computed: {
    // Calcola le cifre del contatore come array di stringhe
    counter() {
      return this.count.toString().split('');
    },
  },

  mounted() {
  this.fetchWeatherData();
  
  // Avvia un intervallo che aumenta il contatore ogni tot tempo
  this.interval = setInterval(() => {
    this.count++;
  }, 2600);
  },

  methods: {
    async fetchWeatherData() {
      const latitude =  41.8933203;
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

<style lang="scss" scoped >
    
:-webkit-any( aside, nav, section) h1 {
font-size: 4vmin;
margin: 0;
display: inline-block;
margin-right:48px;
}



.card{
  row-gap: 2vmin;
  justify-content: space-between;
  flex-wrap: wrap;
  background:var(--yellow);
  padding: 2vmin;
  ul{
  width:50% ;
}
  figure{
    width: 200px;
    margin-right: 0;
    align-self: flex-end;
    img{
      display: inline-block;
      transform: scale(2);
      padding: 1vmin;
      padding-bottom: 0;
      margin: 0 30%;
    }
  }
}

.hole{
  background-color: white;
  justify-content: end;
  padding: 12px;
  line-height:4vmin;
  border-radius: 2vmin;
  box-shadow: inset var(--shadow-2);
  padding-top: 2vmin;
}

.box{
  margin-top: 1.5vmin;
  font-weight: 800;
  padding: 12px;
  border-radius: 5px;
  h1{
    margin: 0;
    font-size: 4vmin;
  }
}
</style>


