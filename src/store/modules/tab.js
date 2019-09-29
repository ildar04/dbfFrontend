// import API from "@/api";

export default {
    namespaced: true,
  
    state: {
        currTab: []
    },
  
    getters: {
        getCurrTab(state) {
            return state.currTabs;
        }
    },
  
    mutations: {
        setTab (state, items) {
            state.currTab = items
        }
    }
  }
  