export type UserID = string | number;

export type UserType = {
  id: UserID;
  name: string;
  image: string;
  email?: string;
  phone_number?: string;
  age?: number;
  dob?: Date;
};

export type StatusType = 'active' | 'closed';
export const StatusList: StatusType[] = ['active', 'closed'];

export type ProductType = {
  id: string;
  image: string;
  name: string;
};

export type DateType = string;

export type TableDetailType = {
  detail: string;
};

export type ActiveTableData = {
  client: UserType;
  seller: UserType;
  product: ProductType;
  date: DateType;
  status: StatusType;
  details: TableDetailType;
};
