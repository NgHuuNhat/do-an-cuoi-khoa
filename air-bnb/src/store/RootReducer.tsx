import { combineReducers } from "redux";
import { userReducer } from "../pages/user/auth/_duck/reducer";
import { viTriReducer } from "../pages/user/home/_duck/reducer";

const rootReducer = combineReducers({
    //reducer
    userReducer,
    viTriReducer,

});

export default rootReducer;