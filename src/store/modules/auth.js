import API from "@/api";
export default {
  namespaced: true,

  state: {
    token: null,
    uid: null,
    checkoutStatus: 'test'
  },

  getters: {
    isAuth(state) {
      return state.token != null
    },
    getUid(state) {
      return state.uid
    }
  },

  mutations: {
    setToken (state, tokenLocal) {
      state.token = tokenLocal
    },
    setUid (state, uid) {
      state.uid = uid;
    }
  },

  actions: {
    login({commit}, data) {
      return API.post("login", data).then(res => {
        let data = res.data;
        if (data) {
          commit('setToken', data.access_token);
          commit('setUid', data.uid);
          return true
        }
      });

    },
    registration() {
      return true
    },
    LogOut({commit}) {
      commit('setToken', null);
      commit('setUid', null);
      return true;
  }
  }
}
