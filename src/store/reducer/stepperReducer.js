const initialState = {
       steps : [
            "I. SURVEY KUALITAS PELAYANAN",
            "II. PERILAKU PENYIMPANGAN PELAYANAN",
            "III. EVALUASI DAN PERBAIKAN",
          ],
        currentStep:1,
}

export default function stepperReducer (state= initialState, action) {
    if (action.type === "SET_STEP" ){
        return {...state, steps:action.payload}
    }

    if (action.type === "SET_CURRENTSTEP" ){
        return {...state, currentStep:action.payload}
    }

    if (action.type === "RESET_STATE") {
        return {...state}
    }

    return state;
}