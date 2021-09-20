import { createStore } from 'vuex'
import {
    SET_PERSONAL_INFO,
    SET_INTERNSHIP,
    SET_SKILLS,
    SET_EXPERIENCES,
    SET_PARTS,
    ADD_SKILL_ITEM,
    ADD_EXPERIENCE,
    ADD_INTERNSHIP_EXPERIENCE,
    REMOVE_PART,
    RESTORE_ALL,
    SET_COLOR,
    SET_THEME_TYPE,
    CHANGE_THE_ORDER,
} from './mutation-types'

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
        internship: [{
            title: '实习公司',
            startTime: '2021.7',
            endTime: '至今',
            descriptions: [
                '实习经历描述'
            ]
        }],
        skills: [{
            type: '前端/后端/嵌入式等',
            skill: [
                {
                    title: 'Java/C++/JavaScript等',
                    descriptions: ['技能描述']
                }
            ]
        }],
        experiences: [
            {
                type: '个人项目/商业项目等',
                details: [
                    {
                        source: '',
                        title: '项目名称',
                        descriptions: ['项目描述']
                    }
                ]
            }
        ],
        parts: ['my-internship', 'my-skills', 'my-experiences'],
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
        [SET_INTERNSHIP](state, internship) {
            state.internship.splice(0, state.internship.length)
            state.internship.push(...internship)
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
        [ADD_INTERNSHIP_EXPERIENCE](state, item) {
            const ownItem = {}
            copy(ownItem, item)
            state.internship.push(ownItem)
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
            state.parts.push('MyInternship', 'my-skills', 'my-experiences')
        },
        [SET_COLOR](state, color) {
            state.theme.color = color
        },
        [SET_THEME_TYPE](state, type) {
            state.theme.type = type
        },
        [CHANGE_THE_ORDER](state, payload) {
            const target = state[payload.type]
            const temp = target[payload.from]

            target[payload.from] = target[payload.to]
            target[payload.to] = temp
        }
    },
    actions: {},
    modules: {}
})