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
    loadBag(state, products) {
      state.productsInBag = products
    },
    addToBag(state, product) {
      state.productsInBag.push(product)
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    },
    removeFromBag(state, productId) {
      state.productsInBag = state.productsInBag.filter((item) => productId != item.id);
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit('loadProducts', response.data)
      });
    },
    loadBag({ commit }) {
      var items = localStorage.getItem('productsInBag')
      if (items)
        commit('loadBag', JSON.parse(items))
    },
    addToBag({ commit }, product) {
      console.log(product)
      commit('addToBag', product)
    },
    removeFromBag({ commit }, productId) {
      if (confirm('Are you sure you want to remove  to r eove the item from bag?'))
        commit('removeFromBag', productId)
    }
  },
  modules: {
  }
})