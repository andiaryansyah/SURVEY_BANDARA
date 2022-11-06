export function setPekerjaan (payload) {
    return {
        type:"SET_PEKERJAAN",
        payload:payload
    }
}
export function setUsia (payload) {
    return {
        type:"SET_USIA",
        payload:payload
    }
}
export function setGender (payload) {
    return {
        type:"SET_GENDER",
        payload:payload
    }
}
export function setPendidikan (payload) {
    return {
        type:"SET_PENDIDIKAN",
        payload:payload
    }
}

export function savePekerjaan (payload) {
    return (dispatch, getState) => {
        dispatch(setPekerjaan(payload))
    }
}

export function saveUsia (payload) {
    return (dispatch, getState) => {
        dispatch(setUsia(payload))
    }
}

export function saveGender (payload) {
    return (dispatch, getState) => {
        dispatch(setGender(payload))
    }
}

export function savePendidikan (payload) {
    return (dispatch, getState) => {
        dispatch(setPendidikan(payload))
    }
}