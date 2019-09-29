import API from "@/api";
import router from "../../routers";
import Helper from "@/Helper";

export default {
    namespaced: true,
  
    state: {
        items: [],
        currentFundUid: null,
        detailedItems: {}
    },
  
    getters: {
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
        setFund(state, foundUid) {
            state.currentFundUid = foundUid;
        },
        setDetailedItems (state, items) {
            state.detailedItems = items
        },
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
        },
        showDetails({commit}, payload) {
            router.push({ path: `/funddetails/${payload}` });
            commit("setFund", payload);
        },
        GetFundDetails({commit}, payload) {
            API.get(`api/fund/${payload}`).then(res => {
                let data = res.data;
                if (data) {
                    const helper = new Helper();
                    data.addDateTime = helper.string2date(data.addDateTime, true);
                    if (data.comments) {
                        for (var i = 0; i < data.comments.length; i++) {
                            let item = data.comments[i];
                            item.addDateTime = helper.string2date(item.addDateTime, true);
                        }
                    }
                    commit('setDetailedItems', data);
                }
            }).catch(ex => {
                return ex;
            })
        },

    }
  }
  