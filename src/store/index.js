import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import constants from './constants.js'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
  },
  state : {
    constants,
    drawer:false
  },
  getters : {
    CONST : state =>{ return state.constants }
  }
})

export default store
