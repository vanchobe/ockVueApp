import Vue from "vue";
import Vuex from "vuex";
import bags from "../store/modules/bags.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bags,
  },
});
