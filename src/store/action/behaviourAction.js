export function setDiskriminasi (payload) {
    return {
        type:"SET_DISKRIMINASI",
        payload: payload
    }
}

export function setKecurangan (payload) {
    return {
        type:"SET_KECURANGAN",
        payload: payload
    }
}

export function setGratifikasi (payload) {
    return {
        type:"SET_GRATIFIKASI",
        payload: payload
    }
}

export function setPungli (payload) {
    return {
        type:"SET_PUNGLI",
        payload: payload
    }
}

export function setCalo (payload) {
    return {
        type:"SET_CALO",
        payload: payload
    }
}

export function saveDiskriminasi (payload) {
    return (dispatch, getState) => {
        dispatch(setDiskriminasi(payload))
    }
}

export function saveKecurangan (payload) {
    return (dispatch, getState) => {
        dispatch(setKecurangan(payload))
    }
}

export function saveGratifikasi (payload) {
    return (dispatch, getState) => {
        dispatch(setGratifikasi(payload))
    }
}

export function savePungli (payload) {
    return (dispatch, getState) => {
        dispatch(setPungli(payload))
    }
}

export function saveCalo (payload) {
    return (dispatch, getState) => {
        dispatch(setCalo(payload))
    }
}