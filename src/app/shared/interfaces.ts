export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  image: string;
  lastVisit: string;
  chatingHistory: IMassage[];
}

export interface IMassage {
  userId: number;
  time: string;
  text: string;
}

export interface IAppState {
  users: IUser;
}
