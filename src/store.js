import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    idInView: "intro"
  },
  getters: {
    changeIdInView: state => (newId) => {
      console.log('HIIIIIY', newId);
      state.idInView = newId;
    }
  },
  mutations: {},
  actions: {}
});

export default store;