import api from "../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

export const actPostBinhLuan = (newComment: any) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .post(`binh-luan`, newComment)
            .then((result) => {
                dispatch(actSuccess(result.data.content));
            })
            .catch((error) => {
                dispatch(actFailed(error));
            })
    }
}

export const actReques = (): Action => {
    return {
        type: ActionType.REQUEST_POST_BINH_LUAN,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS_POST_BINH_LUAN,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED_POST_BINH_LUAN,
        payload: error,
    }
}