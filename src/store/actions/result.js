import * as actionTypes from './actionTypes'

const saveResult = resData => {
    // alter data before arriving to state
    resData *= 1
    return {
        type: actionTypes.STORE_RESULT,
        result: resData
    }

}

export const storeResult = (resData) => {

    return (dispatch, getState) => {
        setTimeout(() => {

            // get state data from store
            // console.log(getState().ctr.counter)
            dispatch(saveResult(resData))
        }, 2000)
    }
}



export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id
    }
}