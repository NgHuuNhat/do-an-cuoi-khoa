import api from "../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action } from "./types";

export const actPutThongTinCaNhan = (id: any, values: any) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .put(`/users/${id}`, values)
            .then((result) => {
                // Lấy dữ liệu cũ từ localStorage
                const currentData = JSON.parse(localStorage.getItem('data') || '{}');
                // Cập nhật thông tin mới từ API vào dữ liệu cũ
                const updatedData = {
                    ...currentData,
                    user: {
                        ...currentData.user,
                        ...values // Các trường dữ liệu mới từ API
                    }
                };
                // Lưu dữ liệu đã cập nhật vào localStorage
                localStorage.setItem('data', JSON.stringify(updatedData));
                dispatch(actSuccess(result.data.content));
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