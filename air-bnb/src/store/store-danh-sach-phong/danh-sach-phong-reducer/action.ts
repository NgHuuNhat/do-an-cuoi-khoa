import api from "../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

export const actGetListPhongThue = (id: any) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
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
        type: ActionType.REQUEST_PHONG_THUE,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS_PHONG_THUE,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED_PHONG_THUE,
        payload: error,
    }
}