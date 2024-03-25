// store.js
import Vue from "vue";
import Vuex from "vuex";

import parrResponseEntry from "./parr-response-entry-module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    parrResponseEntry,
  },
});
