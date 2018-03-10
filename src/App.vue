<template>
  <div id="app" data-tid="App">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #1b6f2f;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ddeae0;
  font-weight: 900;
  font-size: 30px;
  margin-top: 60px;
}
.btn {
  margin: 30px auto;
  padding: 12px 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 900;
  color: #1b6f2f;
  background-color: #ddeae0;
}
</style>
