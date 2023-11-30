<template lang="">
    <div class='grid'>
        <div class="card div1">
            <p class="title">ReanuKeeves</p>
            <p class="value">Full Stack Developer</p>
        </div>
        <div class="card div2">
            <p class="title">ReanuKeeves</p>
            <p class="value">Full Stack Developer</p>
        </div>
        <div class="card div3">
            <p class="title">ReanuKeeves</p>
            <p class="value">Full Stack Developer</p>
        </div>
        <div class="card div4">
            <p class="title">ReanuKeeves</p>
            <p class="value">Full Stack Developer</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
body {
    background: var(--purple);
    font-family: var(--font);
}

.grid {
  margin: 12px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
}

.card {
    width: 100%;
    text-align: left;
    background: var(--green);
    border-radius: 4vmin;
    box-shadow: var(--shadow-1);
    border: var(--border);
    position: relative;
    overflow: visible;
    padding: 12px 0;
    margin: auto;

    .div1 { grid-area: 1 / 1 / 2 / 2; }
    .div2 { grid-area: 1 / 2 / 2 / 3; }
    .div3 { grid-area: 2 / 1 / 3 / 2; }
    .div4 { grid-area: 2 / 2 / 3 / 3; }

}

.title {
  text-align: center;
  font-weight: 600;
}
.value {
  margin: auto;
  text-align: center;

}
</style>