import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    idInView: 'intro'
  },
  getters: {
    changeIdInView(currentId) {
      store.state.idInView = currentId;
    }
  },
  mutations: {},
  actions: {}
});