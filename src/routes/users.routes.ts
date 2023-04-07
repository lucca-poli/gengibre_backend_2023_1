import { Router, Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";
import CreateUserService from "../services/CreateUserService";

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.post("/", (request: Request, response: Response) => {
  try {
    const { name, email, cellphone, password, confirmedPassword } =
      request.body;
    const createUserService = new CreateUserService(usersRepository);
    const createdUser = createUserService.execute({name, email, cellphone, password, confirmedPassword})

    return response.json(createdUser);
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

usersRouter.get("/", (request: Request, response: Response) => {
  try {
    return response.json(usersRepository.getAll());
  } catch (err) {
    return response.status(400).json({ error: (err as Error).message });
  }
});

export default usersRouter;
