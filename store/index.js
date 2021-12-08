// STATE

export const state = () => ({
  projectsData: undefined,
})

// // GETTERS

export const getters = {
  projectsData(state) {
    return state.projectsData
  },
}

// ACTIONS

export const actions = {
  setProjectsData(store, projectsData) {
    store.commit('setProjectData', projectsData)
  },
}

// // MUTATIONS

export const mutations = {
  setProjectData(state, projectsData) {
    state.projectsData = projectsData
  },
}
