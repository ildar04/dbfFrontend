import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import activities from "./modules/activities"
import navbar from "./modules/navbar"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    activities,
    navbar
  }
})
