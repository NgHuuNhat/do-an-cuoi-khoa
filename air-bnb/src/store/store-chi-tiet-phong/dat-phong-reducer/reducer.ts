import * as ActionType from "./constants"
import { Action, State } from "./types";

const initialState: State = {
    loading: false,
    dataDatPhong: null,
    error: null,
}

export const datPhongReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.REQUEST_DAT_PHONG: {
            state.loading = true;
            state.dataDatPhong = null;
            state.error = null;
            return { ...state };
        }

        case ActionType.SUCCESS_DAT_PHONG: {
            state.loading = false;
            state.dataDatPhong = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED_DAT_PHONG: {
            state.loading = false;
            state.dataDatPhong = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}
