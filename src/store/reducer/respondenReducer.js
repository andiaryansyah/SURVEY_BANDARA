const initialState = {
        pekerjaan:"",
        usia:"",
        gender:"",
        pendidikan:"",
    
}

export default function respondenReducer (state= initialState, action) {
 if (action.type === "SET_PEKERJAAN" ){
     return {...state, pekerjaan:action.payload}
 }

 if (action.type === "SET_USIA" ){
     return {...state, usia:action.payload}
 }

 if (action.type === "SET_GENDER" ){
    return {...state, gender:action.payload}
}

if (action.type === "SET_PENDIDIKAN" ){
    return {...state, pendidikan:action.payload}
}

 return state;
}