// STATE

export const state = () => ({
  projectsDataPar: undefined,
  projectsDataPro: undefined,
  slider: undefined,
})

// // GETTERS

export const getters = {
  projectsDataPar(state) {
    return state.projectsDataPar
  },
  projectsDataPro(state) {
    return state.projectsDataPro
  },
  projectsData(state) {
    return state.slider
  },
}

// ACTIONS

export const actions = {
  setProjectsDataPar(store, projectsDataPar) {
    store.commit('setProjectDataPar', projectsDataPar)
  },
  setProjectsDataPro(store, projectsDataPro) {
    store.commit('setProjectDataPro', projectsDataPro)
  },
  setSlider(store, slider) {
    store.commit('setSlider', slider)
  },
}

// // MUTATIONS

export const mutations = {
  setProjectDataPar(state, projectsDataPar) {
    state.projectsDataPar = projectsDataPar
  },
  setProjectDataPro(state, projectsDataPro) {
    state.projectsDataPro = projectsDataPro
  },
  setSlider(state, slider) {
    state.slider = slider
  },
}
