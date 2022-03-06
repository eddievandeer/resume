import {
    SET_INTERNSHIP,
    SET_EXPERIENCES,
    ADD_EXPERIENCE,
    ADD_INTERNSHIP_EXPERIENCE
} from './mutation-types'
import copy from '../utils/copy'

export default {
    [SET_INTERNSHIP](state, internship) {
        state.internship.splice(0, state.internship.length)
        internship && state.internship.push(...internship)
    },
    [SET_EXPERIENCES](state, experiences) {
        state.experiences.splice(0, state.experiences.length)
        experiences && state.experiences.push(...experiences)
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
}