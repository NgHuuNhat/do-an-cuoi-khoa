import * as ActionType from "./constants"
import { Action, State } from "./types";

const initialState: State = {
    loading: false,
    dataChiTietPhong: null,
    error: null,
}

export const chiTietPhongReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.REQUEST_CHI_TIET_PHONG: {
            state.loading = true;
            state.dataChiTietPhong = null;
            state.error = null;
            return { ...state };
        }

        case ActionType.SUCCESS_CHI_TIET_PHONG: {
            state.loading = false;
            state.dataChiTietPhong = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED_CHI_TIET_PHONG: {
            state.loading = false;
            state.dataChiTietPhong = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}
