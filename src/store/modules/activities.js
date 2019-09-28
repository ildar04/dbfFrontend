import API from "@/api";
import router from "../../routers";

export default {
    namespaced: true,
  
    state: {
        currentActivityUid: "",
        items: [],
        detailedItems: {}
    },
  
    getters: {
      hasItems(state) {
        return state.items.length;
      },

      getItems(state) {
          return state.items;
      },

      getDetailedItems(state) {
          return state.detailedItems;
      }
    },
  
    mutations: {
      setItems (state, items) {
        state.items = items
      },

      setDetailedItems (state, items) {
          state.detailedItems = items
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
        GetActivityDetails({commit}, payload) {
            API.get(`api/activity/${payload}`).then(res => {
                let data = res.data;
                if (data) {
                    commit('setDetailedItems', data);
                }
            }).catch(ex => {
                return ex;
            })
        },


        showDetails({commit}, payload) {
            router.push({ path: `/activitydetails/${payload}` });
            commit("setActivity", payload);
        }
    }
  }
  