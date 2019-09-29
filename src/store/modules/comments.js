import API from "@/api";
import Helper from "@/Helper";

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
    addComment({commit}, payload) {
      return API.post("api/activity/comment", payload).then(res => {
        const helper = new Helper();
        for (var i = 0; i < res.data.length; i++) {
          let item = res.data[i];
          item.addDateTime = helper.string2date(item.addDateTime, true);
        }
        return res.data;
      });
    }
  }
}
