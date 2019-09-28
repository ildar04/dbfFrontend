export default {
  namespaced: true,

  state: {
    token: null,
    checkoutStatus: 'test'
  },

  getters: {
    isAuth(state) {
      return state.token != null
    }
  },

  mutations: {
    setToken (state, tokenLocal) {
      state.token = tokenLocal
    },
  },

  actions: {
    login({commit}) {
      commit('setToken', '123123');
      return true
    },
    registration() {
      return true
    },
    LogOut({commit}) {
      commit('setToken', undefined);

      return true;
  }
  }
}
