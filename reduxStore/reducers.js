function reducer(state={}, action) {
    switch(action.type){
        case "GET_CAKES": {
            state = {...state}
            state["cakes"] = action.payload
            return state
        }
        case "POST_CAKES": {
            state = {...state}
            state["cakes"] = action.payload
            return state
        }
        default: return state
    }
}
export default reducer;