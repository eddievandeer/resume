import {
    SET_SKILLS,
    ADD_SKILL_ITEM
} from './mutation-types'
import copy from '../utils/copy'

export default {
    [SET_SKILLS](state, skills) {
        state.skills.splice(0, state.skills.length)
        skills && state.skills.push(...skills)
    },
    [ADD_SKILL_ITEM](state, item) {
        const ownItem = {}
        copy(ownItem, item)
        state.skills.push(ownItem)
    },
}