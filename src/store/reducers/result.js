import * as actionType from '../actions/actionTypes'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const newResults = state.results.filter(el => el.id !== action.id)
    return {
        ...state,
        results: newResults
    }
}
const updatedObject = (state, action) => {
    return {
        ...state,
        results: state.results.concat({ id: Math.random(), value: action.result })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionType.STORE_RESULT: return updatedObject(state, action)
        case actionType.DELETE_RESULT: return deleteResult(state, action)

        default: return state
    }


}
export default reducer





    // case actionType.DELETE_RESULT: {
    //     // const newResults = [...state.results]
    //     // newResults.splice(action.id, 1)
    //     const newResults = state.results.filter(el => el.id !== action.id)
    //     return {
    //         ...state,
    //         results: newResults
    //     }
    // }