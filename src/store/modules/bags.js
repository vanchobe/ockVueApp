import axios from "axios";

export default {
  namespaced: true,
  state: {
    bags: [],
  },
  mutations: {
    setBags(state, bags) {
      state.bags = bags;
    },
  },
  getters: {
    availableBags(state) {
      return state.bags;
    },
    bagsIsInRange() {
      return (bag) => {
        return bag.price > 0.32;
      };
    },
  },
  actions: {
    fetchBags({ commit }) {
      return axios
        .get("http://localhost:3002/bags")
        .then((bags) => commit("setBags", bags.data));
    },
  },
};
