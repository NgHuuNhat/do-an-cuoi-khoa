import * as ActionType from "./constants"
import { Action, State } from "./types";

const initialState: State = {
    loading: false,
    dataPhongDaThue: null,
    error: null,
}

export const phongDaThueReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.REQUEST_PHONG_DA_THUE: {
            state.loading = true;
            state.dataPhongDaThue = null;
            state.error = null;
            return { ...state };
        }

        case ActionType.SUCCESS_PHONG_DA_THUE: {
            state.loading = false;
            state.dataPhongDaThue = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED_PHONG_DA_THUE: {
            state.loading = false;
            state.dataPhongDaThue = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}
