import * as ActionTypes from "./action";

const initialState = {
    message: "",
    token: localStorage.getItem('token') || "",
}
const reducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.POST_DATA: 
            return {
                ...state,
                message: payload
            }
        case ActionTypes.POST_TOKEN:
            return {
                ...state,
                token: payload
            }
        case ActionTypes.LOG_OUT:
            return {
                ...state,
                token : payload
            }
        
        default:
            return state;
   }
}
export default reducer;