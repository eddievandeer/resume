import { createStore } from 'vuex'
import { SET_PERSONAL_INFO, SET_SKILLS, SET_EXPERIENCES, SET_PARTS, REMOVE_PART, RESTORE_ALL, SET_COLOR } from './mutation-types'

import copy from '../utils/copy'

export default createStore({
    state: {
        personalInfo: {
            name: '姓名',
            image: '/images/avatar.png',
            gender: '输入性别',
            job: '求职岗位',
            education: {
                university: '毕业院校',
                major: '所学专业'
            },
            github: 'GitHub主页',
            blog: '博客网站',
            contact: {
                email: '联系邮箱',
                tel: '联系电话'
            }
        },
        skills: [{
            type: '类型',
            skill: [
                {
                    title: '标题',
                    descriptions: [
                        '描述'
                    ]
                }
            ]
        }],
        experiences: [
            {
                type: '类型',
                details: [{
                    source: '',
                    title: '标题',
                    descriptions: [
                        '描述'
                    ]
                }
                ]
            }
        ],
        parts: ['my-skills', 'my-experiences'],
        theme: {
            type: 'normal',
            color: 'green',
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