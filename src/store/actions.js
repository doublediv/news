import types from './type'

const actions = {
    SHOW_HEADER: ({commit}) => {
        commit('types.SHOW_HEADER')
    },
    HIDE_HEADER: ({commit},) => {
        commit('types.HIDE_HEADER')
    }
}

export default actions