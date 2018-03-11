<template>
  <div v-if="isOpen" class="card" 
  		:style="{ color: this.stats.color, fontSize: fontSize }" data-tid="Card">
  	<div class="left-top">
  		{{ this.stats.rank }}
  	</div>
  	<div class="img right-top">
  		<img :src="src" alt="Suit">
  	</div>
 		<div class="img center">
 			<img :src="src" alt="Suit">
 		</div>
  	<div class="img left-bottom">
  		<img :src="src" alt="Suit">
  	</div>
  	<div class="right-bottom">
  		{{ this.stats.rank }}
  	</div>
  </div>
  <div v-else class="closed card" @click="open" data-tid="Card-flipped">
  	<img src="@/assets/back.png" alt="Suit">
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['stats'],
  data () {
    return {
    	isOpen: true
    }
  },
  computed: {
  	src: function () {
  		return require('@/assets/' + this.stats.suit + '.png')
  	},
  	fontSize: function () {
  		return ((this.stats.rank === '10') ? '14px' : '16px')
  	}
  },
  mounted () {
  	this.start()
  	var self = this
  	this.$root.$on('fail', function (cards) {
  		if (self.stats.id === cards.first ||
  				self.stats.id === cards.second) {
  			window.setTimeout(function() {
  				self.isOpen = false
  			}, 1000)
  		}
  	})
  },
  methods: {
  	start: function () {
  		var self = this
  		window.setTimeout(function () {
  			self.isOpen = false
  		}, 5000)
  	},
  	open: function () {
  		this.isOpen = true
  		this.$emit('cardIsOpen', this.stats)
  	}
  }
}
</script>

<style scoped>
div {
	display: inline;
	text-align: center;
	position: relative;
	overflow: hidden;
}
.card {
	background-color: #fff;
	height: 150px;
	width: 100px;
	margin: 15px;
	border-radius: 10px;
	float: left;
	color: #221e20;
	font-size: 12px;
}
.closed {
	width: 90px;
	height: 140px;
	border: 5px solid #fff;
	border-radius: 10px;
}
.img {
	height: 15px;
	width: 15px;
}
.left-top {
	float: left;
	width: 15px;
	height: 15px;
	margin-top: 9px;
	margin-left: 10px;
}
.right-bottom {
	float: right;
	width: 15px;
	height: 15px;
	margin-top: 74px;
	margin-right: 11px;
}
.center {
	margin: auto;
	top: calc(50% - 25px);
	width: 50px;
	height: 50px;
	display: -webkit-box;
}
.right-top {
	float: right;
	margin-top: 10px;
	margin-right: 10px;
	display: -webkit-box;
}
.left-bottom {
	float: left;
	margin-top: 75px;
	margin-left: 10px;
	display: -webkit-box;
}

img {
	/*position: absolute;*/
	height: 100%;
	width: 100%;
}
</style>
