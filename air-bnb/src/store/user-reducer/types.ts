export interface StateUser {
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    avatar: string,
    gender: boolean,
    role: string,
    token: string | null,
}

export interface State {
    loading: boolean,
    data?: StateUser[] | null,
    error: any[] | null,
}

export interface Action {
    type: string,
    payload?: any,
}

export interface User {
    email: string,
    password: string,
}