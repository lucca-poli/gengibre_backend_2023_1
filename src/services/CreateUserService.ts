import User from "../models/User";
import UsersRepository from "../repositories/UsersRepository";

interface Request {
  name: string;
  email: string;
  cellphone: string;
  password: string;
  confirmedPassword: string;
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute({
    name,
    email,
    cellphone,
    password,
    confirmedPassword,
  }: Request): User {
    const newUser = this.usersRepository.createUser({
      name,
      email,
      cellphone,
      password,
    });

    Object.values(arguments[0]).forEach((newUserParams) => {
      if (newUserParams === undefined) {
        throw Error("Todos os campos devem estar completos.");
      }
    });

    if (password !== confirmedPassword) {
      throw Error("As senhas não coincidem.");
    }

    return newUser;
  }
}
export default CreateUserService;
