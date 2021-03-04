import { createStore } from 'vuex'
import { SET_PERSONAL_INFO, SET_SKILLS, SET_EXPERIENCES, SET_PARTS, ADD_SKILL_ITEM, ADD_EXPERIENCE, REMOVE_PART, RESTORE_ALL, SET_COLOR } from './mutation-types'

import copy from '../utils/copy'

export default createStore({
    state: {
        personalInfo: {
            name: '',
            image: './images/avatar.png',
            gender: '',
            job: '',
            university: '',
            major: '',
            github: '',
            blog: '',
            email: '',
            tel: ''
        },
        skills: [{
            type: '',
            skill: [
                {
                    title: '',
                    descriptions: []
                }
            ]
        }],
        experiences: [
            {
                type: '',
                details: [
                    {
                        source: '',
                        title: '',
                        descriptions: []
                    }
                ]
            }
        ],
        parts: ['my-skills', 'my-experiences'],
        theme: {
            type: 'normal',
            color: 'cyan',
            // style: 'vertical'
            style: 'horizontal'
        }
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
            state.skills.splice(0, state.skills.length)
            state.skills.push(...skills)
        },
        [SET_EXPERIENCES](state, experiences) {
            state.experiences.splice(0, state.experiences.length)
            state.experiences.push(...experiences)
        },
        [SET_PARTS](state, parts) {
            state.parts.splice(0, state.parts.length)
            state.parts.push(parts)
        },
        [ADD_SKILL_ITEM](state, item) {
            const ownItem = {}
            copy(ownItem, item)
            state.skills.push(ownItem)
        },
        [ADD_EXPERIENCE](state, item) {
            const ownItem = {}
            copy(ownItem, item)
            state.experiences.push(ownItem)
        },
        [REMOVE_PART](state, index) {
            state.parts.splice(index, 1)
        },
        [RESTORE_ALL](state) {
            copy(state.personalInfo, {
                name: '',
                image: '',
                education: {
                    university: '',
                    major: ''
                },
                github: '',
                blog: '',
                contact: {
                    email: '',
                    tel: ''
                }
            })
            state.skills.splice(0, state.skills.length)
            state.experiences.splice(0, state.experiences.length)
            state.parts.splice(0, state.parts.length)
            state.parts.push('my-skills', 'my-experiences')
        },
        [SET_COLOR](state, color) {
            console.log(color);
            state.theme.color = color
        }
    },
    actions: {},
    modules: {}
})