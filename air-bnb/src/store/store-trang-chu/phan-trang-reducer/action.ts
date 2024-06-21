import api from "../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

// export const actGetViTriPhanTrangTimKiem = (id: any) => {
//     return (dispatch: any) => {
//         dispatch(actReques());
//         api
//             .get(`/vi-tri/phan-trang-tim-kiem?pageIndex=${id}&pageSize=${id}`)
//             .then((result: any) => {
//                 dispatch(actSuccess(result.data.content))
//             })
//             .catch((error: any) => {
//                 dispatch(actFailed(error))
//             })
//     }
// }

export const actReques = (): Action => {
    return {
        type: ActionType.REQUEST_VITRI_PHANTRANG,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS_VITRI_PHANTRANG,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED_VITRI_PHANTRANG,
        payload: error,
    }
}