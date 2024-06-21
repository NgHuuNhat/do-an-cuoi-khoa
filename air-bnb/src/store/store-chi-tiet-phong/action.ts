import api from "../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

export const actGetChiTietPhong = (id: any) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .get(`/phong-thue/${id}`)
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
        type: ActionType.REQUEST_CHI_TIET_PHONG,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS_CHI_TIET_PHONG,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED_CHI_TIET_PHONG,
        payload: error,
    }
}