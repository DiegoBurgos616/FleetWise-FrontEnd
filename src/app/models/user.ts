export interface BaseUser {
  id?: string;
  username: string;
  email: string;
}

export interface User extends BaseUser {
  password: string;
}

export type LoginRequest = Pick<User, 'email' | 'password'>;

export interface LoginResponse  {
  token: string;
}
