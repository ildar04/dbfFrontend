import API from "@/api";

export default {
    namespaced: true,
  
    state: {
        items: []
    },
  
    getters: {
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
        getFunds({commit}) {
            API.get("api/fund").then(res => {
                            let data = res.data;
                            if (data) {
                                commit('setItems', data);
                            }
                        });
        },
        createFund({commit}, dataFund) {
            return API.post("api/fund", dataFund).then( (test) => {
              return true;
            });
        }
    }
  }
  