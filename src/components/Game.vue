<template>
  <div class="game screen">
  	<div class="head">
	  	<a class="restart" @click="restart">Начать заново</a>
	  	<span class="score">Очки: {{ score }}</span>
  	</div>
  	<div class="playground">
    	<Card v-for="card in cards" :stats="card" @cardIsOpen="move(card)"/>
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'Game',
  components: {
  	Card
  },
  data () {
    return {
    	cards: [],
      suits: [
      	'club',
      	'heart',
      	'spade',
      	'diamond'
      ],
      colors: [ '#1e181a', '#f30015' ],
      rangs: [
      	'2', '3', '4', '5', '6', '7', '8',
      	'9', '10', 'J', 'Q', 'K', 'A'
      ],
      openedCard: null,
      openedPairs: 0,
      score: 0
    }
  },
  mounted () {
  	this.start()
  },
  watch: {
  	openedPairs: function (val) {
  		if (val === 9) {
  			this.$router.push({ name: 'Winner', params: { score: this.score } })
  		}
  	}
  },
  methods: {
  	start: function () {
  		for (var i = 0; i < 9; i++) {
  			let rand = Math.floor(Math.random() * 4)
        let rank = Math.floor(Math.random() * 13)
  			this.cards.push({
          'id': '0' + i,
          'suit': this.suits[rand],
          'color': this.colors[rand % 2],
          'rank': this.rangs[rank]
        })
  			this.cards.push({
          'id': '1' + i,
          'suit': this.suits[rand],
          'color': this.colors[rand % 2],
          'rank': this.rangs[rank]
        })
  			this.cards.sort(this.cmpRandom)
  		}
  	},
  	cmpRandom: function () {
  		return Math.random() - 0.5
  	},
  	restart: function () {
  		this.$router.go({ name: 'Game' })
  	},
  	move: function (card) {
	  	if (this.openedCard) {
	  		if (JSON.stringify(this.openedCard).substr(11) === 
	  				JSON.stringify(card).substr(11)) {
	  			this.score += (9 - this.openedPairs) * 42
	  			this.openedPairs++
	  			this.openedCard = null
	  		} else {
	  			this.$root.$emit('fail', 
	  				{
	  					'first': this.openedCard.id,
	  					'second': card.id
	  				})
	  			this.score -= this.openedPairs * 42
	  			if (this.score < 0) {
	  				this.score = 0
	  			}
	  			this.openedCard = null
	  		}
	  	} else {
	  		this.openedCard = card
	  	}
  	}
  }
}
</script>

<style scoped>
span, a {
	font-size: 16px;
	margin: 0 15px;
	cursor: default;
}
.game {
	width: 780px;
	margin: auto;
}
.head {
	height: 20px;
}
.restart {
	float: left;
}
.score {
	float: right;
}
</style>
