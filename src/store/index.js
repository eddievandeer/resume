import { createStore } from 'vuex'
import { SET_PERSONAL_INFO, SET_SKILLS } from './mutation-types'

export default createStore({
    state: {
        personalInfo: null,
        skills: null,
        experiences: null
    },
    mutations: {
        [SET_PERSONAL_INFO](state, info) {
            state.personalInfo = info
        },
        [SET_SKILLS](state, skills) {
            state.skills = skills
        },
        [SET_EXPERIENCES](state, experiences) {
            state.experiences = experiences
        }
    },
    actions: {},
    modules: {}
})