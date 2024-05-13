export interface User {
  email: string;
  password: string;
}

export type UserRequest = Omit<User, 'id'>;

export const initialUserState: User = {
  email: "",
  password: "",
};

export const initialUserRequest: UserRequest = {
  email: "",
  password: "",
};
