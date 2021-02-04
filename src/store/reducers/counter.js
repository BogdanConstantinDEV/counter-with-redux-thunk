import * as actionType from '../actions/actionTypes'
import utilFunc from '../utilFunc'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionType.INCREMENT: return utilFunc(state, { counter: state.counter + 1 })

        case actionType.DECREMENT: return utilFunc(state, { counter: state.counter - 1 })

        case actionType.ADD: return utilFunc(state, { counter: state.counter + action.value })

        case actionType.SUBTRACT: return utilFunc(state, { counter: state.counter - action.value })

        default: return state
    }


}
export default reducer