import { combineReducers } from "redux";
import { userReducer } from "../pages/user/auth/duck/reducer";

const rootReducer = combineReducers({
    //reducer
    userReducer,

});

export default rootReducer;