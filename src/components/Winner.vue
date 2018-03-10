<template>
  <div class="winner screen">
  	<div>
    	<img src="../assets/Winner.png" alt="Winner's page">
	    <p>Поздравляем!</p>
	    <p>Ваш итоговый счёт: {{ $route.params.score }}</p>
	  </div>
	  <button class="btn" @click="startGame">Ещё раз</button>
  </div>
</template>

<script>
export default {
  name: 'Winner',
  methods: {
    startGame: function () {
      this.$router.push({ name: 'Game' })
    }
  }

}
</script>

<style scoped>
.winner {
	margin-top: 100px;
}
p {
	margin: 15px;
}
</style>
