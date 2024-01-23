<script>
export default {
  data() {
    return {
      compName: 'overview',
    };
  },
  methods: {
    setComponent(componentName) {
      this.compName = componentName;
    },
  },
};
</script>

<template>

  <header class="column">
    <h2>panel control dashboard</h2>     
  </header>
  <main class="row">

    <nav>
      <ul class="column">
        <li @click="setComponent('overview')" :class="{ 'active': compName === 'overview' }"><p>overview</p></li>
        <li @click="setComponent('consume')" :class="{ 'active': compName === 'consume' }"><p>consume</p></li>
        <li @click="setComponent('logs')" :class="{ 'active': compName === 'logs' }"><p>logs</p></li>
      </ul>
    </nav> 

    <aside>
      <KeepAlive :max="3">
        <div class="container">
          <component :is="compName"></component>
        </div>
      </KeepAlive>
    </aside>
  </main>
</template>

<style lang="scss">
@import './assets/css/main.scss';

body {
    background: var(--purple);
    font-family: var(--font);
}

header{
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  border-bottom: var(--border);
  text-transform: uppercase;
  justify-content: space-evenly;

  h2{
    margin: 0px;
    padding-top: 0px;
  }
}

main{
  height: 85vh;
}

nav{
  width: 20vw;
  min-width: 96px;
  border-right: var(--border);
  font-weight: 600;
  text-transform: uppercase;
  li{
    line-height: 72px;
    p{
      cursor: pointer;
    }
  }
  li:hover{
    color: var(--yellow)
  }
}
.active{
  background-color: black;
  color: white;
}

aside{
  width: 100%;
  background-color:white;
  overflow: auto;
  padding: 18px ;
  padding-top: 0px;
}

.card{
  width: 100%;

  text-align: left;
  border-radius: 4vmin;
  box-shadow: var(--shadow-1);
  border: var(--border);
  position: relative;
  overflow: visible;
 padding: 6vmin;
  margin: auto;
  text-transform: capitalize;
}


</style>

