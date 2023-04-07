import User from "../models/User";

interface createUserDTO {
  name: string;
  email: string;
  cellphone: string;
  password: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public getUser(id: string): User {
    const userIndex = this.users.findIndex((user) => user.id === id);

    return this.users[userIndex];
  }

  public createUser({ name, email, cellphone, password }: createUserDTO): User {
    const newUser = new User({ name, email, cellphone, password });

    this.users.push(newUser);
    return newUser;
  }

  public getAll(): User[] {
    return this.users;
  }
}

export default UsersRepository;
