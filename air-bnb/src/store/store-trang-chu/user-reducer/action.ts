import api from "../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action, StateUser, User } from "./types";

// export const actPutThongTinCaNhan = (id: any, values: any) => {
//     return (dispatch: any) => {
//         dispatch(actReques());
//         api
//             .put(`/users/${id}`, values)
//             .then((result) => {
//                 // Lấy dữ liệu cũ từ localStorage
//                 const currentData = JSON.parse(localStorage.getItem('data') || '{}');
//                 // Cập nhật thông tin mới từ API vào dữ liệu cũ
//                 const updatedData = {
//                     ...currentData,
//                     user: {
//                         ...currentData.user,
//                         ...result.data.content // Các trường dữ liệu mới từ API
//                     }
//                 };
//                 // Lưu dữ liệu đã cập nhật vào localStorage
//                 localStorage.setItem('data', JSON.stringify(updatedData));
//                 dispatch(actSuccess(result.data.content));
//             })
//             .catch((error) => {
//                 dispatch(actFailed(error));
//             })
//     }
// }

export const actPostUserReister = (user: StateUser) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .post(`/auth/signup`, user)
            .then((result: any) => {
                localStorage.setItem("isRegister", "true");
                dispatch(actSuccess({ ...result.data.content }))
            })
            .catch((error: any) => {
                dispatch(actFailed(error))
            })
    }
}

export const actPostUserLogin = (user: User) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .post(`/auth/signin`, user)
            .then((result: any) => {
                localStorage.setItem("isLogin", "true");
                const token = result.data.content.token;
                result.data.content.user.token = token;
                localStorage.setItem("data", JSON.stringify(result.data.content))
                dispatch(actSuccess({ ...result.data.content, token }))
            })
            .catch((error: any) => {
                dispatch(actFailed(error))
            })
    }
}

export const actGetUserLogin = () => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .get(`/users`)
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
        type: ActionType.REQUEST,
    }
}

export const actSuccess = (data: any): Action => {
    return {
        type: ActionType.SUCCESS,
        payload: data,
    }
}

export const actFailed = (error: any): Action => {
    return {
        type: ActionType.FAILED,
        payload: error,
    }
}

export const actClearError = () => {
    return {
        type: ActionType.CLEAR_ERROR,
    };
};

export const actClearSuccess = () => {
    return {
        type: ActionType.CLEAR_SUCCESS,
    };
};