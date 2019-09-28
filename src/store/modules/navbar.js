import router from "../../routers";

export default {
    namespaced: true,
  
    state: {
    },
  
    getters: {
    },
  
    mutations: {
    },
  
    actions: {
        ToHome() {
            router.push({ path: "/" });
        },

        ToLogin() {
            router.push({ path: "login"})
        }
    }
  }
