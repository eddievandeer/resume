import { createStore } from 'vuex'
import { SET_PERSONAL_INFO, SET_SKILLS, SET_EXPERIENCES, SET_PARTS, REMOVE_PART, RESTORE_ALL } from './mutation-types'

import copy from '../utils/copy'

export default createStore({
    state: {
        personalInfo: {
            name: "",
            image: "",
            gender: "",
            job: "",
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
            if (info.key) {
                state.personalInfo[info.key] = info.value
            }
            else {
                copy(state.personalInfo, info)
                console.log('copy object');
            }
        },
        [SET_SKILLS](state, skills) {
            state.skills.push(...skills)
        },
        [SET_EXPERIENCES](state, experiences) {
            state.experiences.push(...experiences)
        },
        [SET_PARTS](state, parts) {
            state.parts.splice(0, state.parts.length)
            state.parts.push(parts)
        },
        [REMOVE_PART](state, index) {
            state.parts.splice(index, 1)
        },
        [RESTORE_ALL](state) {
            copy(state.personalInfo, {
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
            })
            state.skills.splice(0, state.skills.length)
            state.experiences.splice(0, state.experiences.length)
            state.parts.splice(0, state.parts.length)
            state.parts.push('my-skills', 'my-experiences')
        }
    },
    actions: {},
    modules: {}
})