export function setInfo (payload) {
    return {
        type:"SET_INFO",
        payload:payload
    }
}

export function setPersyaratan (payload) {
    return {
        type:"SET_PERSYARATAN",
        payload:payload
    }
}

export function setProsedur (payload) {
    return {
        type:"SET_PROSEDUR",
        payload:payload
    }
}

export function setWaktu (payload) {
    return {
        type:"SET_WAKTU",
        payload:payload
    }
}

export function setBiaya (payload) {
    return {
        type:"SET_BIAYA",
        payload:payload
    }
}

export function setSarana (payload) {
    return {
        type:"SET_SARANA",
        payload:payload
    }
}

export function setRespon (payload) {
    return {
        type:"SET_RESPON",
        payload:payload
    }
}

export function setKonsultasi (payload) {
    return {
        type:"SET_KONSULTASI",
        payload:payload
    }
}

export function saveInfo (payload) {
    return (dispatch, getState) => {
        dispatch(setInfo(payload))
    }
}

export function savePersyaratan (payload) {
    return (dispatch, getState) => {
        dispatch(setPersyaratan(payload))
    }
}

export function saveProsedur (payload) {
    return (dispatch, getState) => {
        dispatch(setProsedur(payload))
    }
}

export function saveWaktu (payload) {
    return (dispatch, getState) => {
        dispatch(setWaktu(payload))
    }
}

export function saveBiaya (payload) {
    return (dispatch, getState) => {
        dispatch(setBiaya(payload))
    }
}

export function saveSarana (payload) {
    return (dispatch, getState) => {
        dispatch(setSarana(payload))
    }
}

export function saveRespon (payload) {
    return (dispatch, getState) => {
        dispatch(setRespon(payload))
    }
}

export function saveKonsultasi (payload) {
    return (dispatch, getState) => {
        dispatch(setKonsultasi(payload))
    }
}