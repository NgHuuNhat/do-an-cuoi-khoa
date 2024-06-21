export interface PhongThue {
    id: number
    tenPhong: string
    khach: number
    phongNgu: number
    giuong: number
    phongTam: number
    moTa: string
    giaTien: number
    mayGiat: boolean
    banLa: boolean
    tivi: boolean
    dieuHoa: boolean
    wifi: boolean
    bep: boolean
    doXe: boolean
    hoBoi: boolean
    banUi: boolean
    maViTri: number
    hinhAnh: string
  }
  

export interface ViTri {
    id: number
    tenViTri: string
    tinhThanh: string
    quocGia: string
    hinhAnh: string
}

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
    dataChiTietPhong?: StateUser[] | null,
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