import { IUserResponse } from "../user";

export interface IComment {
  id: string;
  comment: string;
  createdAt: string;
}

export interface IGetComment {
  id: string;
  comment: string;
  createdAt: string;
  user: IUserResponse;
}

export interface ICommentRequest {
  comment: string;
}
