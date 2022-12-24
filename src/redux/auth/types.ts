export type AuthData = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  token: string;
};

export type Auth = {
  _id: string;
  fullName?: string;
  email: string;
  password: string;
  password_repeat?: string;
};

export enum Status {
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
}

export interface AuthState {
  data: AuthData | null;
  status: Status;
}
