export const state = {
  jumbotron: {
    jumbotronImage: "",
    title: ""
  },
  jobSection: {
    columns: 3,
    searchBox: false,
    color: "white"
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
  },
  SET_BACKGROUD_COLOR(state, payload) {
    state.jobSection.color = payload;
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
  },
  setColor({ commit }, color) {
    commit("SET_BACKGROUD_COLOR", color);
  }
};
