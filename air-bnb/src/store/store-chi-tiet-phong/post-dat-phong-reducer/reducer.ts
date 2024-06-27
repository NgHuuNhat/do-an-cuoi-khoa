import * as ActionType from "./constants"
import { Action, State } from "./types";

const initialState: State = {
    loading: false,
    dataPostDatPhong: null,
    error: null,
}

export const postDatPhongReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.REQUEST_POST_DAT_PHONG: {
            state.loading = true;
            state.dataPostDatPhong = null;
            state.error = null;
            return { ...state };
        }

        case ActionType.SUCCESS_POST_DAT_PHONG: {
            state.loading = false;
            state.dataPostDatPhong = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED_POST_DAT_PHONG: {
            state.loading = false;
            state.dataPostDatPhong = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}
