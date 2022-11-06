export function setStep (payload) {
    return {
        type:"SET_STEP",
        payload:payload
    }
}

export function setCurrentStep (payload) {
    return {
        type:"SET_CURRENTSTEP",
        payload:payload
    }
}

export function changeStep (payload) {
    return (dispatch, getState) => {
        dispatch(setStep(payload))
    }
}

export function changeCurrentStep (payload) {
    return (dispatch, getState) => {
        dispatch(setCurrentStep(payload))
    }
}