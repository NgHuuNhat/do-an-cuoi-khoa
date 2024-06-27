import api from "../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

export const actPostDatPhong = (values: any) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .post(`/dat-phong`, values)
            .then((result) => {
                localStorage.setItem("isPostDatPhong", "true");
                dispatch(actSuccess(result.data.content));
            })
            .catch((error) => {
                dispatch(actFailed(error));
            })
    }
}

export const actReques = (): Action => {
    return {
        type: ActionType.REQUEST_POST_DAT_PHONG,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS_POST_DAT_PHONG,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED_POST_DAT_PHONG,
        payload: error,
    }
}