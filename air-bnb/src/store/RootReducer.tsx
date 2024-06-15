import { combineReducers } from "redux";
import { userReducer } from "./user-reducer/reducer";
import { viTriReducer } from "./vi-tri-reducer/reducer";
import { phongThueReducer } from "./phong-thue-reducer/reducer";

const rootReducer = combineReducers({
    //reducer
    userReducer,
    viTriReducer,
    phongThueReducer,

});

export default rootReducer;