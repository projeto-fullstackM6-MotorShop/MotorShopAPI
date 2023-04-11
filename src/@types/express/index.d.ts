import { IUser } from "../../interfaces/users";

declare global {
  namespace Express {
    interface Request {
      validatedBody: object;
      announce: {
        id: string;
      };
    }
  }
}

export {};
