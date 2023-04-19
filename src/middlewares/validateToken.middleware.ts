import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { appError } from "../errors";

const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  if (!token) {
    throw new appError("Invalid Token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, 'chavesupersecreta', (error, decoded: any) => {
    if (error) {
      return res.status(401).json(error);
    }
    req.body.id = decoded.sub as string
    // req.user = {
    //   id: decoded.sub as string,
    // };
    
    return next();
  });
};

export default validateTokenMiddleware;
