export interface User {
  email: string;
  password: string;
codeInvitation: string;

}

export type UserRequest = Omit<User, 'id'>;

export const initialUserState: User = {
  email: "",
  password: "",
  codeInvitation: "",

};

export const initialUserRequest: UserRequest = {
  email: "",
  password: "",
  codeInvitation: "",
};
