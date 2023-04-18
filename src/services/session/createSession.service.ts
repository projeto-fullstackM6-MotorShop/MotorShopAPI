import "dotenv/config";
import User from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { ILoginRequest, ILoginResponse } from "../../interfaces/session";
import { appError } from "../../errors";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const createSessionService = async (
  body: ILoginRequest
): Promise<ILoginResponse> => {
  const { email, password } = body;

  const userRepository = AppDataSource.getRepository(User);

  const isUserExists = await userRepository.findOneBy({ email: email });

  if (!isUserExists) {
    throw new appError("Invalid email or password", 403);
  }

  const isPasswordMatches = await compare(password, isUserExists.password);

  if (!isPasswordMatches) {
    throw new appError("Invalid email or password", 403);
  }

  const secretKey: string = process.env.SECRET_KEY!;

  const token = sign({ email }, secretKey, {
    expiresIn: "24h",
    subject: isUserExists.id,
  });

  return { token };
};

export default createSessionService;
