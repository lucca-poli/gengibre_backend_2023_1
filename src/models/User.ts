import { v4 } from "uuid";

class User {
  name: string;
  email: string;
  cellphone: string;
  password: string;
  id: string;

  constructor({ name, email, cellphone, password }: Omit<User, "id">) {
    this.name = name;
    this.email = email;
    this.cellphone = cellphone;
    this.password = password;
    this.id = v4();
  }
}

export default User;
