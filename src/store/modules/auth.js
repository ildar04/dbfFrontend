export default {
  namespaced: true,

  state: {
    // {id, quantity}
    token: null,
    checkoutStatus: 'test'
  },

  getters: {
    isAuth(state) {
      return state.token != null
    }
    // cartProducts (state, getters, rootState, rootGetters) {
    //   return state.items.map(cartItem => {
    //     const product = rootState.products.items.find(product => product.id === cartItem.id)
    //     return {
    //       title: product.title,
    //       price: product.price,
    //       quantity: cartItem.quantity
    //     }
    //   })
    // },
    //
    // cartTotal (state, getters) {
    //   return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    // },
  },

  mutations: {
    setToken (state, tokenLocal) {
      state.token = tokenLocal
    },

    // incrementItemQuantity (state, cartItem) {
    //   cartItem.quantity++
    // },
    //
    // setCheckoutStatus (state, status) {
    //   state.checkoutStatus = status
    // },
    //
    // emptyCart (state) {
    //   state.items = []
    // }
  },

  actions: {
    login({state, commit}, data) {
      commit('setToken', '123123');
      return true
    }

    // addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
    //   if (rootGetters['products/productIsInStock'](product)) {
    //     const cartItem = state.items.find(item => item.id === product.id)
    //     if (!cartItem) {
    //       commit('pushProductToCart', product.id)
    //     } else {
    //       commit('incrementItemQuantity', cartItem)
    //     }
    //     commit('products/decrementProductInventory', product, {root: true})
    //   }
    // },

    // checkout({state, commit}) {
    //   shop.buyProducts(
    //     state.items,
    //     () => {
    //       commit('emptyCart')
    //       commit('setCheckoutStatus', 'success')
    //     },
    //     () => {
    //       commit('setCheckoutStatus', 'fail')
    //     }
    //   )
    // }
  }
}
