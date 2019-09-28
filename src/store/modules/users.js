import API from "@/api";
import router from "../../routers";

export default {
    namespaced: true,
  
    state: {
        user: "",
        list: []
    },
  
    getters: {
      list(state) {
        return state.list;
      },

      user(state) {
          return state.user;
      }
    },
  
    mutations: {
      setList (state, elements) {
        state.list = elements
      },

      setUser(state, userObject) {
          state.user = userObject;
      }
    },
  
    actions: {
        getUsers({commit}) {
            API.get("api/users").then(res => {
                let data = res.data;
                if (data) {
                    commit('setList', data);
                }
            });
        },
        getUserById({commit}, id) {
            API.get("api/user/" + id).then(res => {
                let data = res.data;
                if (data) {
                    commit('setUser', data);
                }

              return true;
            });
        },


        showDetails({commit}, payload) {
            router.push({ path: `/activitydetails/${payload}` });
            commit("setActivity", payload);
        }
    }
  }
  