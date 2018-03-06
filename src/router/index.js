import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Game from '@/components/Game'
import Winner from '@/components/Winner'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/game/winner',
      name: 'Winner',
      component: Winner
    }
  ]
})
