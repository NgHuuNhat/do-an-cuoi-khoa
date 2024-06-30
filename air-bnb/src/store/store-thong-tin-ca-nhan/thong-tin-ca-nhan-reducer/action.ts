import api from "../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

export const actPutThongTinCaNhan = (id: any, values: any) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .put(`/users/${id}`, values)
            .then((result) => {
                dispatch(actSuccess(result.data.content));
                console.log(result.data.content)
                console.log(id)
                console.log(values)
            })
            .catch((error) => {
                dispatch(actFailed(error));
            })
    }
}

export const actReques = (): Action => {
    return {
        type: ActionType.REQUEST_THONG_TIN_CA_NHAN,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS_THONG_TIN_CA_NHAN,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED_THONG_TIN_CA_NHAN,
        payload: error,
    }
}