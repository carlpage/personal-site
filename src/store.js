import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    idInView: "intro",
    intersectionOptions: {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.3
    }
  },
  getters: {
    visibilityChanged: (state) => (isVisible, entry) => {
      if (isVisible === true) {
        state.idInView = entry.target.id;
      }
    }
  },
  mutations: {},
  actions: {}
});

export default store;