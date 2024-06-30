import * as ActionType from "./constants"
import { Action, State, StateUser } from "./types";

const user = localStorage.getItem("data");

const initialState: State = {
    loading: false,
    data: user ? JSON.parse(user) : null,
    error: null,
}

export const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }


        case ActionType.SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        case ActionType.CLEAR_ERROR: {
            state.error = null;
            return { ...state };
        }

        case ActionType.CLEAR_SUCCESS: {
            state.data = null;
            return { ...state };
        }

        default:
            return { ...state };
    }
}
