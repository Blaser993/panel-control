<template lang="">
    <ul class="container">
        <li class="card log row"  v-for="(log, index) in data.logs" :key= "index" :class="getStatus(log.type)">
            <p class="col col-12">{{log.date}} - {{log.text}} - {{log.type}}</p>
        </li>
    </ul>
</template>


<script>
import data from '../data.json';
export default{
    data(){
        return{
            data: data,
        }
    },
    methods: {
    getStatus(logType) {
      // Restituisci una classe CSS in base al tipo di log
      switch (logType) {
        case 'info':
          return 'info-log';
        case 'error':
          return 'error-log';
        case 'warning':
          return 'warning-log';
        default:
          return 'default-log';
      }
    },
}}
</script>

<style lang="scss" scoped>
.log {
    width: 100%;
    margin-bottom: 24px;
    background: var(--blue);
    color: white;

    p{
        padding: 0px 24px;
        margin: 0px;
        font-weight: 600;
        font-size: 3vmin;
    }
}

.error-log {
  background-color: red;
  color: black;
}

.warning-log {
  background-color: orange;
  color: black;
}


</style>