export interface BaseUser {
  username?: string;
  email: string;
  codeInvitation: string;
}

export interface User extends BaseUser {
  password: string;
}

export type LoginRequest = Pick<User, 'email' | 'password'>;

export interface LoginResponse  {
  token: string;
}
