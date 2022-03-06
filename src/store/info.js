import { SET_PERSONAL_INFO, ADD_EVALUATION, REMOVE_EVALUATION, CHANGE_EVALUATION } from './mutation-types'
import copy from '../utils/copy'

export default {
    [SET_PERSONAL_INFO](state, info) {
        if (info.key) {
            state.personalInfo[info.key] = info.value
        }
        else {
            copy(state.personalInfo, info)
            console.log('copy object');
        }
    },
    [ADD_EVALUATION](state, evaluation) {
        state.evaluation.push(evaluation)
    },
    [REMOVE_EVALUATION](state, index) {
        state.evaluation.splice(index, 1)
    },
    [CHANGE_EVALUATION](state, { newValue, index }) {
        state.evaluation[index] = newValue
    }
}