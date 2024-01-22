<template lang="">
    <div class='grid'>        
        <div class="card power">
            <p class="title">power production</p>
            <p class="value">{{data['power-production']}} kW</p>
        </div>

        <div class="card month">
            <p class="title">today energy</p>
            <p class="value">{{data['today-energy']}} kWh</p>
        </div>

        <div class="card today">
            <p class="title">month energy</p>
            <p class="value">{{data['month-energy']}} kWh</p>
        </div>

        <div class="card left-time">
            <p class="title">left time energy</p>
            <p class="value">{{data['left-time-energy']}} kWh</p>
        </div>
    </div>
</template>

<script>
import data from '../data.json';
export default{
    data(){
        return{
            data: data,
        }
    }
}
</script>


<style lang="scss" scoped>


.grid {
  margin: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 48px;
  grid-row-gap: 48px;
}

.card {
    width: 100%;
    aspect-ratio: 2/1;
    text-align: left;
    background: var(--green);
    border-radius: 4vmin;
    box-shadow: var(--shadow-1);
    border: var(--border);
    position: relative;
    overflow: visible;
    padding-top:12px;
    padding-bottom: 24px;
    margin: auto;
    text-transform: capitalize;

    .power { grid-area: 1 / 1 / 2 / 2; }
    .month { grid-area: 1 / 2 / 2 / 3; }
    .today { grid-area: 2 / 1 / 3 / 2; }
    .left-time { grid-area: 2 / 2 / 3 / 3; }
}

.title {
  text-align: center;
  font-weight: 600;
  font-size: 4vmin;
}
.value {
  margin: auto;
  text-align: center;
    font-size: 4vmin;
}
</style>