export function setEvaluasi (payload) {
    return {
        type:"SET_EVALUASI",
        payload:payload
    }
}
export function setPerbaikan (payload) {
    return {
        type:"SET_PERBAIKAN",
        payload:payload
    }
}

export function saveEvaluasi (payload) {
    return (dispatch, getState) => {
        dispatch(setEvaluasi(payload))
    }
}

export function savePerbaikan (payload) {
    return (dispatch, getState) => {
        dispatch(setPerbaikan(payload))
    }
}