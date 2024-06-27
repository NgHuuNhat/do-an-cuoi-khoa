import * as ActionType from "./constants"
import { Action, State } from "./types";

const initialState: State = {
    loading: false,
    dataPostBinhLuan: null,
    error: null,
}

export const postBinhLuanReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.REQUEST_POST_BINH_LUAN: {
            state.loading = true;
            state.dataPostBinhLuan = null;
            state.error = null;
            return { ...state };
        }

        case ActionType.SUCCESS_POST_BINH_LUAN: {
            state.loading = false;
            state.dataPostBinhLuan = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED_POST_BINH_LUAN: {
            state.loading = false;
            state.dataPostBinhLuan = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}
