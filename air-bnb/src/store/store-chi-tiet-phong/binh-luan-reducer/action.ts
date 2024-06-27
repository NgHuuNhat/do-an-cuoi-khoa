import api from "../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

export const actBinhLuan = (maPhong: any) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .get(`binh-luan/lay-binh-luan-theo-phong/${maPhong}`)
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
        type: ActionType.REQUEST_BINH_LUAN,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS_BINH_LUAN,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED_BINH_LUAN,
        payload: error,
    }
}