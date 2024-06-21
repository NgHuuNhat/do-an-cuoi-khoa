import { combineReducers } from "redux";
import { userReducer } from "./store-trang-chu/user-reducer/reducer";
import { viTriReducer } from "./store-trang-chu/vi-tri-reducer/reducer";
import { phongThueReducer } from "./store-danh-sach-phong/reducer";
import { phanTrangReducer } from "./store-trang-chu/phan-trang-reducer/reducer";
import { chiTietPhongReducer } from "./store-chi-tiet-phong/reducer";

const rootReducer = combineReducers({
    //reducer
    userReducer,
    viTriReducer,
    phongThueReducer,
    phanTrangReducer,
    chiTietPhongReducer,

});

export default rootReducer;