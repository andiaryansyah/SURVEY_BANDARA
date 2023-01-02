const initialState ={
    diskriminasi: {
        rating:0,
        comment:"",
    },
    kecurangan: {
        rating:0,
        comment:"",
    },
    gratifikasi: {
        rating:0,
        comment:"",
    },
    pungli: {
        rating:0,
        comment:"",
    },
    calo: {
        rating:0,
        comment:"",
    },
}

export default function behaviourReducer (state = initialState, action) {
    if (action.type === "SET_DISKRIMINASI") {
        return {...state, diskriminasi:action.payload }
    }

    if (action.type === "SET_KECURANGAN") {
        return {...state, kecurangan:action.payload}
    }

    if (action.type === "SET_GRATIFIKASI") {
        return {...state, gratifikasi:action.payload}
    }

    if (action.type === "SET_PUNGLI") {
        return {...state, pungli:action.payload}
    }

    if (action.type === "SET_CALO") {
        return {...state, calo:action.payload}
    }

    if (action.type === "RESET_STATE") {
        return {...initialState}
    }

    return state;
}