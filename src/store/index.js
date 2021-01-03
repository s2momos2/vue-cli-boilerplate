import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from './auth.js'
import constants from './constants.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    
  },
  plugins: [
    createPersistedState({paths: ["auth"]})
  ],
  state : {
    constants,
    drawer:false,
    title:"app.."
  },
  getters : {
    CONST : state =>{ return state.constants }
  }
})
