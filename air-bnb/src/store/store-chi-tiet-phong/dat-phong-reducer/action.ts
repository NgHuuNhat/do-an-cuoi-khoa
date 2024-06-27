import api from "../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

export const actGetDatPhong = () => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .get(`/dat-phong`)
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
        type: ActionType.REQUEST_DAT_PHONG,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS_DAT_PHONG,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED_DAT_PHONG,
        payload: error,
    }
}