import router from "../../routers";

export default {
    namespaced: true,
  
    state: {
        currTabs: '/activitys'
    },
  
    getters: {
        getCurrTab(state) {
            return state.currTabs;
        }
    },

    mutations: {
        setTab (state, tab) {
            state.currTabs = tab
        },
    },
  
    actions: {
        ToHome() {
            router.push({ path: "/activity" });
        },

        ToLogin() {
            router.push({ path: "/login"})
        },
        setTab ({commit}, tab) {
            commit('setTab', tab);
        }
    }
  }
