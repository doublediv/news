import types from './types'

const mutations = {
    [types.SHOW_HEADER](state) {
        state.isHeader = true
    },
    [types.HIDE_HEADER](state) {
        state.isHeader = false
    },
    [types.SHOW_LOADING](state) {
        state.isLoading = true
    },
    [types.HIDE_LOADING](state) {
        state.isLoading = false
    }
}

export default mutations