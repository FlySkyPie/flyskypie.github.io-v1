import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
  }, {
    path: '/profile',
    name: 'profile',
  }, {
    path: '/ITUGV',
    name: 'ITUGV',
  }, {
    path: '/MMFEDP',
    name: 'MMFEDP',
  }, {
    path: '/final-project',
    name: 'final-project',
  }, {
    path: '/ouroboros-program',
    name: 'ouroboros-program',
  }, {
    path: '/general-construct-component',
    name: 'general-construct-component',
  }, {
    path: '/braver-of-flames-respawn',
    name: 'braver-of-flames-respawn',
  }, {
    path: '/25d-engine',
    name: '25d-engine',
  }, {
    path: '/braver-of-flames',
    name: 'braver-of-flames',
  }, {
    path: '/simple-typing-game',
    name: 'simple-typing-game',
  }, {
    path: '/simple-bullet-hell',
    name: 'simple-bullet-hell',
  }, {
    path: '/simple-forum',
    name: 'simple-forum',
  }, {
    path: '/a4-homework',
    name: 'a4-homework',
  }, {
    path: '/simple-satellite-launch-game',
    name: 'simple-satellite-launch-game',
  }, {
    path: '/ascii-empire',
    name: 'ascii-empire',
  }, {
    path: '/shiang-ba-do-online',
    name: 'shiang-ba-do-online',
  }, {
    path: '/simple-3d-shooting-game',
    name: 'simple-3d-shooting-game',
  }, {
    path: '/shiang-ba-do-online-website',
    name: 'shiang-ba-do-online-website',
  }, {
    path: '/simple-shooting-game',
    name: 'simple-shooting-game',
  }, {
    path: '/simple-shooting-game-network',
    name: 'simple-shooting-game-network',
  }, {
    path: '/the-key-of-huanche',
    name: 'the-key-of-huanche',
  }, {
    path: '/ASMCBINFH',
    name: 'ASMCBINFH',
  },{
    path: '/gear-redolence',
    name: 'gear-redolence',
  },{
    path: '/dental-defender',
    name: 'dental-defender',
  },
]

const router = new VueRouter({
  routes
})

export default router
