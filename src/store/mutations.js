import types from "./type"
import state from "./states"

const mutation = {
    [types.SHOW_HEADER](state) {
        state.isHeader = true
    },
    [types.HIDE_HEADER](state) {
        state.isHeader = false
    }
}