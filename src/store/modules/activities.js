import API from "@/api";
import Helper from "@/Helper";
import router from "../../routers";

export default {
    namespaced: true,
  
    state: {
        currentActivityUid: "",
        items: [],
        detailedItems: {},
        marks: {}
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
      },

      getMarks(state) {
          return state.marks;
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
      },

      setMarks(state, payload) {
          state.marks[payload.activity] = payload.marks;
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
        activityLike({commit}, payload) {
            return API.post("api/Marks", payload).then(res => {
                commit('setMarks', {
                    activity: payload.entityUid,
                    marks: res.data
                });
                return res;
            }).catch(err => {
                return err;
            });
        },
        create({commit}, data) {
            API.post("api/activity", data).then(res => {
              return res;
            });
            return commit;
        },
        GetActivityDetails({commit}, payload) {
            API.get(`api/activity/${payload}`).then(res => {
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


        showDetails({commit}, payload) {
            router.push({ path: `/activitydetails/${payload}` });
            commit("setActivity", payload);
        }
    }
  }
  