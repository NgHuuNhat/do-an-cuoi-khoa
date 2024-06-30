import { combineReducers } from "redux";
import { userReducer } from "./store-trang-chu/user-reducer/reducer";
import { viTriReducer } from "./store-trang-chu/vi-tri-reducer/reducer";
import { phongThueReducer } from "./store-danh-sach-phong/danh-sach-phong-reducer/reducer";
import { phanTrangReducer } from "./store-trang-chu/phan-trang-reducer/reducer";
import { chiTietPhongReducer } from "./store-chi-tiet-phong/chi-tiet-phong-reducer/reducer";
import { datPhongReducer } from "./store-chi-tiet-phong/dat-phong-reducer/reducer";
import { postDatPhongReducer } from "./store-chi-tiet-phong/post-dat-phong-reducer/reducer";
import { binhLuanReducer } from "./store-chi-tiet-phong/binh-luan-reducer/reducer";
import { postBinhLuanReducer } from "./store-chi-tiet-phong/post-binh-luan-reducer/reducer";
import { phongDaThueReducer } from "./store-thong-tin-ca-nhan/phong-da-thue-reducer/reducer";
import { thongTinCaNhanReducer } from "./store-thong-tin-ca-nhan/thong-tin-ca-nhan-reducer/reducer";

const rootReducer = combineReducers({
    //reducer
    userReducer,
    viTriReducer,
    phongThueReducer,
    phanTrangReducer,
    chiTietPhongReducer,
    datPhongReducer,
    postDatPhongReducer,
    binhLuanReducer,
    postBinhLuanReducer,
    phongDaThueReducer,
    thongTinCaNhanReducer,

});

export default rootReducer;