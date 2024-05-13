export interface User {
  id?: string;
  email: string;
  password: string;
  invitationCode: string;
}

export type UserRequest = Omit<User, 'id'>;

export const initialUserState: User = {
  id: "",
  email: "",
  password: "",
  invitationCode: "",
};

export const initialUserRequest: UserRequest = {
  email: "",
  password: "",
  invitationCode: "",
};
