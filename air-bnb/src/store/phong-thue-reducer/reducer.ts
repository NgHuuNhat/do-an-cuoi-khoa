import * as ActionType from "./constants"
import { Action, State } from "./types";

const initialState: State = {
    loading: false,
    data: null,
    error: null,
}

export const phongThueReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.REQUEST_PHONG_THUE: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case ActionType.SUCCESS_PHONG_THUE: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED_PHONG_THUE: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}
