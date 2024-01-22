<template lang="">
    <ul class="container">
        <li  v-for="(log, index) in data.logs" :key= "index" class="log row" :class="getStatus(log.type)">
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
    text-align: left;
    background: var(--blue);
    border-radius: 4vmin;
    box-shadow: var(--shadow-1);
    border: var(--border);
    position: relative;
    overflow: visible;
    padding-top:12px;
    padding-bottom: 24px;
    margin: auto;
    text-transform: capitalize;
    margin-bottom: 24px;
    color: white;
    overflow: auto;
    p{
        padding: 0px 24px;
        margin: 0px;
        font-weight: 600;
        font-size: 4vmin;
    }}



.error-log {
  background-color: red;
  color: black;
}

.warning-log {
  background-color: orange;
  color: black;
}


</style>