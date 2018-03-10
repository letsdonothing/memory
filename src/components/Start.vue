<template>
  <div class="start screen">
    <div>
      <img src="../assets/Start.png" alt="Start page">
      <p>MEMORY GAME</p>
    </div>
    <button class="btn" @click="startGame">Начать игру</button>
  </div>
</template>

<script>
import Router from 'vue-router'

export default {
  name: 'Start',
  data () {
    return {
      
    }
  },
  methods: {
    startGame: function () {
      this.$router.push({ name: 'Game' })
    }
  }
}
</script>

<style scoped>
img {
  margin: auto;
}

.start {
  margin-top: 100px;
}
</style>
