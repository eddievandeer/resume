import { createStore } from 'vuex'
import { SET_PERSONAL_INFO, SET_SKILLS, SET_EXPERIENCES, SET_PARTS, REMOVE_PART, RESTORE_ALL } from './mutation-types'

export default createStore({
    state: {
        personalInfo: {
            name: "",
            image: "",
            education: {
                university: "",
                major: ""
            },
            github: "",
            blog: "",
            contact: {
                email: "",
                tel: ""
            }
        },
        skills: [],
        experiences: [],
        parts: ['my-skills', 'my-experiences']
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
        },
        [SET_PARTS](state, parts) {
            state.parts = parts
        },
        [REMOVE_PART](state, index) {
            state.parts.splice(index, 1)
        },
        [RESTORE_ALL](state) {
            state.personalInfo = null
            state.skills = null
            state.experiences = null
            state.parts = ['my-skills', 'my-experiences']
        }
    },
    actions: {},
    modules: {}
})