import types from './types'

const actions = {
    SHOW_HEADER: ({commit}) => {
        commit(types.SHOW_HEADER)
    },
    HIDE_HEADER: ({commit}) => {
        commit(types.HIDE_HEADER)
    },
    SHOW_LOADING: ({commit}) => {
        commit(types.SHOW_LOADING)
    },
    HIDE_LOADING: ({commit}) => {
        commit(types.HIDE_LOADING)
    }
}

export default actions