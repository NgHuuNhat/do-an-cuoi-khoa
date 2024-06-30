export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: number;
  birthday: string;
  avatar: string | null;
  gender: boolean;
  role: string;
}

export interface DataUserListPagination {
  pageIndex: number;
  pageSize: number;
  totalRow: number;
  keywords: string;
  data: User[];
}


