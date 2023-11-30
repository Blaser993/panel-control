<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="container-full">
    <h1>panel control </h1>     
  </nav>
  
</template>

<style lang="scss">
@import './assets/css/main.scss';

nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid;
  box-shadow: 0px 1px 2px;

  span{
    font-size: 24px;
  }

  ul :first-child{
    flex-grow: 5;
    cursor: default;

    :hover{
      cursor: pointer;
      color: currentColor;
    }
  }

  li{
    flex-grow: 2;
    cursor: pointer;
  }
}

</style>

