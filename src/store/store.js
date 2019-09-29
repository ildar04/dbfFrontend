import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import comments from './modules/comments'
import activities from "./modules/activities"
import navbar from "./modules/navbar"
import users from "./modules/users"
import fund from "./modules/fund"
import tab from "./modules/tab"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    activities,
    comments,
    navbar,
    users,
    fund,
    tab
  }
})
