import * as ActionType from "./constants"
import { Action, State } from "./types";

const initialState: State = {
    loading: false,
    dataBinhLuan: null,
    error: null,
}

export const binhLuanReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.REQUEST_BINH_LUAN: {
            state.loading = true;
            state.dataBinhLuan = null;
            state.error = null;
            return { ...state };
        }

        case ActionType.SUCCESS_BINH_LUAN: {
            state.loading = false;
            state.dataBinhLuan = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED_BINH_LUAN: {
            state.loading = false;
            state.dataBinhLuan = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}
