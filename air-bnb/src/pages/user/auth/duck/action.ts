import api from "../../../../utils/api-user/ApiUser";
import * as ActionType from "./constants";
import { Action, User } from "./types";

export const actPostUserLogin = (user: User) => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .post(`/auth/signin`, user)
            .then((result) => {
                const token = result.data.content.token;
                result.data.content.user.token = token;
                localStorage.setItem("data", JSON.stringify(result.data.content))
                dispatch(actSuccess({...result.data.content, token}))
                console.log("result.data.content",result.data.content)
                
            })
            .catch((error) => {
                dispatch(actFailed(error))
            })
    }
}

export const actGetUserLogin = () => {
    return (dispatch: any) => {
        dispatch(actReques());
        api
            .get(`/users`)
            .then((result) => {
                dispatch(actSuccess(result.data.content))
                console.log("result.data.content", result.data.content)
            })
            .catch((error) => {
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