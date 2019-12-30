import Vue from "vue";
import Vuex from "vuex";
import * as editor from "../store/editor";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    editor
  },
  state: {
    jobs: [
      {
        jobid: 1,
        name: "job",
        category: "hr"
      },
      {
        jobid: 12,
        name: "job",
        category: "hr"
      },
      {
        jobid: 11,
        name: "job",
        category: "hr"
      },
      {
        jobid: 122,
        name: "job",
        category: "hr"
      },
      {
        jobid: 111,
        name: "job",
        category: "hr"
      },
      {
        jobid: 13,
        name: "job",
        category: "hr"
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getJobs(state) {
      return state.jobs;
    }
  }
});
