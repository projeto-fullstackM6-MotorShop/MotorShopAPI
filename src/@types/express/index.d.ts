import { IUser } from "../../interfaces/users";

declare global {
  namespace Express {
    interface Request {
      validatedBody: object;
      announcement: {
        id: string;
      };
    }
  }
}

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
    }
  }
}

declare global {
  namespace Express {
    interface Request {
        email: string;
    }
  }
}

export {};
