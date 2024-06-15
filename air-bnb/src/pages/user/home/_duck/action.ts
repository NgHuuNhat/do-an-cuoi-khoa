import api from "../../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action, StateUser, User } from "./types";

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