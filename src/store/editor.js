export const state = {
  jumbotron: {
    jumbotronImage: "",
    title: ""
  },
  jobSection: {
    columns: 4
  }
};

export const mutations = {
  SET_BACKGROUD_IMAGE(state, payload) {
    state.jumbotron.jumbotronImage = payload;
  },
  SET_TITLE_IMAGE(state, payload) {
    state.jumbotron.title = payload;
  },
  SET_JOBSECTION_COLUMNS(state, payload) {
    state.jobSection.columns = payload;
  }
};

export const actions = {
  setBackground({ commit }, image) {
    commit("SET_BACKGROUD_IMAGE", image);
  },
  setTitle({ commit }, title) {
    commit("SET_TITLE_IMAGE", title);
  },
  setColumns({ commit }, colAmount) {
    commit("SET_JOBSECTION_COLUMNS", colAmount);
  }
};
