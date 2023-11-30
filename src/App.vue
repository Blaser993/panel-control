<script setup>

</script>

<template>

  <header class="column">
    <h2>panel control dashboard</h2>     
  </header>
  <main class="row">

    <nav>
      <ul class="column">
        <li><a href="">overview</a></li>
        <li><a href="">consumo</a></li>
        <li><a href="">logs</a></li>
      </ul>
    </nav> 

    <aside>
      content
    </aside>

  </main>
  
  
</template>

<style lang="scss">
@import './assets/css/main.scss';



header{
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  border-bottom: 3px solid;
  text-transform: uppercase;
  justify-content: space-evenly;
  h2{
    margin: 0px;
    padding-top: 0px;
  }
}

main{
  height: 90%;
}

nav{
  width: 20vw;
  min-width: 96px;
  border-right: 3px solid;
}

aside{
  width: 100%;
  background-color: azure;
}


</style>

