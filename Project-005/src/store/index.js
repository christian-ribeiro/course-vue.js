import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  getters: {
    loadProducts(state) {
      return state.products;
    },
    loadProductsInBag(state) {
      return state.productsInBag
    }
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products
    },
    addToBag(state, product) {
      console.log(product)
      state.productsInBag.push(product)
    },
    removeFromBag(state, productId) {
      var updatedBag = state.productsInBag.filter((item) => productId != item.id);
      state.productsInBag = updatedBag;
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        console.log(response.data);
        commit('loadProducts', response.data)
      });
    },
    addToBag({ commit }, product) {
      console.log(product)
      commit('addToBag', product)
    },
    removeFromBag({ commit }, productId) {
      commit('removeFromBag', productId)
    }
  },
  modules: {
  }
})