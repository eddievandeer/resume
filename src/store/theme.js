import {
    SET_PARTS,
    REMOVE_PART,
    RESTORE_ALL,
    SET_COLOR,
    SET_THEME_TYPE,
    SET_THEME_STYLE,
    CHANGE_THE_ORDER
} from './mutation-types'
import { isObj } from '../utils'
import copy from '../utils/copy'

export default {
    [SET_PARTS](state, part) {
        if(isObj(part)) {
            const { name, index } = part
            state.parts.splice(index, 0, name)
            return
        }
        const index = state.parts.indexOf(part)

        if(index !== -1) {
            state.parts.splice(index, 1)
        } else {
            throw TypeError('The part to be removed is not exist!')
        }
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
    [SET_THEME_STYLE](state, style) {
        state.theme.style = style
    },
    [CHANGE_THE_ORDER](state, payload) {
        const target = state[payload.type]
        const temp = target[payload.from]

        target[payload.from] = target[payload.to]
        target[payload.to] = temp
    }
}