import * as ActionType from "./constants"
import { Action, State } from "./types";
// import { useDispatch } from 'react-redux';

const initialState: State = {
    loading: false,
    dataThongTinCaNhan: null,
    error: null,
}

export const thongTinCaNhanReducer = (state = initialState, action: Action) => {
    // const dispatch: any = useDispatch()

    switch (action.type) {
        case ActionType.REQUEST_THONG_TIN_CA_NHAN: {
            state.loading = true;
            state.dataThongTinCaNhan = null;
            state.error = null;
            return { ...state };
        }

        case ActionType.SUCCESS_THONG_TIN_CA_NHAN: {
            // dispatch({ type: ActionType.UPDATE_USER_DATA, payload: action.payload });

            state.loading = false;
            state.dataThongTinCaNhan = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.FAILED_THONG_TIN_CA_NHAN: {
            state.loading = false;
            state.dataThongTinCaNhan = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}
