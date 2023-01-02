const initialState = {
    evaluasi: "",
    perbaikan:[],
}

export default function evaluationReducer (state = initialState, action) {
    if (action.type === "SET_EVALUASI") {
        return {...state, evaluasi: action.payload}
    }

    if (action.type === "SET_PERBAIKAN") {
        return {...state, perbaikan: action.payload}
    }

    if (action.type === "RESET_STATE") {
        return {...initialState}
    }

    return state;
}