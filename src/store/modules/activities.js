import API from "@/api";
import router from "../../routers";

export default {
    namespaced: true,
  
    state: {
        currentActivityUid: "",
        items: []
    },
  
    getters: {
      hasItems(state) {
        return state.items.length;
      },

      getItems(state) {
          return state.items;
      }
    },
  
    mutations: {
      setItems (state, items) {
        state.items = items
      },

      setActivity(state, activityUid) {
          state.currentActivityUid = activityUid;
      }
    },
  
    actions: {
        getItems({commit}) {
            API.get("api/activities").then(res => {
                let data = res.data;
                if (data) {
                    commit('setItems', data);
                }
            });
        },
        create({commit}, data) {
            API.post("api/activity", data).then(res => {
              return true;
            });
        },


        showDetails({commit}, payload) {
            router.push({ path: `/activitydetails/${payload}` });
            commit("setActivity", payload);
        }
    }
  }
  