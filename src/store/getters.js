import state from "./states"
const getters = {
    getIsHeader(state){
        console.log(state)
        return state.isHeader
    }
}

export default getters