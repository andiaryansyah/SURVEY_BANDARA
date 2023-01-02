const initialState = {
    info:{
        rating:0,
        comment:"",
    },
    persyaratan: {
        rating:0,
        comment:"",
    },
    prosedur: {
        rating:0,
        comment:"",
    },
    waktu: {
        rating:0,
        comment:"",
    },
    biaya: {
        rating:0,
        comment:"",
    },
    sarana: {
        rating:0,
        comment:"",
    },
    respon: {
        rating:0,
        comment:"",
    },
    konsultasi: {
        rating:0,
        comment:"",
    },
}

export default function qualityReducer (state= initialState, action) {
    if (action.type === "SET_INFO" ){
        return {...state, info:action.payload}
    }
   
    if (action.type === "SET_PERSYARATAN" ){
        return {...state, persyaratan:action.payload}
    }
   
    if (action.type === "SET_PROSEDUR" ){
       return {...state, prosedur:action.payload}
   }
   
   if (action.type === "SET_WAKTU" ){
       return {...state, waktu:action.payload}
   }
   if (action.type === "SET_BIAYA" ){
    return {...state, biaya:action.payload}
    }
    if (action.type === "SET_SARANA" ){
        return {...state, sarana:action.payload}
    }
    if (action.type === "SET_RESPON" ){
        return {...state, respon:action.payload}
    }
    if (action.type === "SET_KONSULTASI" ){
        return {...state, konsultasi:action.payload}
    }

    if (action.type === "RESET_STATE") {
        return {...initialState}
    }
   
    return state;
   }