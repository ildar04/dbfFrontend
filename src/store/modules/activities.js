import API from "@/api";

export default {
    namespaced: true,
  
    state: {
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
      }
    },
  
    actions: {
        getItems({commit}) {
            API.get("api/activity").then(res => {
                let data = res.data;
                if (data) {
                    commit('setItems', data);
                }
            });
        }
    }
  }
  