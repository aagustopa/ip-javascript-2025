import { Request } from 'express';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface AuthorizedUser {
  id: number;
  username: string;
}

export interface AuthorizedRequest extends Request {
  user: AuthorizedUser;
  // user: Pick<User, 'id' | 'username'>;
  // user: Omit<User, "password" | "email">;
}
