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
  setProjectsData(projectsData) {
    context.commit('setProjectData', projectsData)
  },
}

// // MUTATIONS

export const mutations = {
  setProjectData(state, projectsData) {
    state.projectsData = projectsData
  },
}

// const store = new Vuex.Store({
//   state: {
//     projectsData: undefined,
//   },
//   mutations: {
//     setProjectData(state, projectsData) {
//       state.projectsData = projectsData
//     },
//   },
//   actions: {
//     setProjectsData(projectData) {
//       context.commit('setProjectData', projectData)
//     },
//   },
//   getters: {
//     projectsData(state) {
//       return state.projectsData
//     },
//   },
// })
