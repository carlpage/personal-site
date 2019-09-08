import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    idInView: "intro",
    intersectionOptions: {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: [0.4, 0.6]
    }
  },
  getters: {
    onWaypoint: (state) => (observerData) => {
      console.log('observerData', observerData)
      state.idInView = observerData.el.id;
    }
  },
  mutations: {},
  actions: {}
});

export default store;