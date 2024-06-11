import { combineReducers } from "redux";
import { userReducer } from "../pages/user/auth/_duck/reducer";

const rootReducer = combineReducers({
    //reducer
    userReducer,

});

export default rootReducer;