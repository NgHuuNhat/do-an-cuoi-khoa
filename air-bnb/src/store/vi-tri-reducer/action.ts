import api from "../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

// export const actGetListPhong = (id: any) => {
//     return (dispatch: any) => {
//         dispatch(actReques());
//         api
//             .get(`/phong-thue/${id}`)
//             .then((result) => {
//                 dispatch(actSuccess(result.data.content));
//             })
//             .catch((error) => {
//                 dispatch(actFailed(error));
//             })
//     }
// }

export const actGetViTri = () => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .get(`/vi-tri`)
            .then((result: any) => {
                dispatch(actSuccess(result.data.content))
            })
            .catch((error: any) => {
                dispatch(actFailed(error))
            })
    }
}

export const actReques = (): Action => {
    return {
        type: ActionType.REQUEST_VITRI,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS_VITRI,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED_VITRI,
        payload: error,
    }
}