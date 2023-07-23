import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

const users: User[] = [
  {
    id: "1",
    email: "alex@mail.com",
  },
  {
    id: "2",
    email: "paco@mail.com",
  },
];

export class InMemoryUserRespository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      return null;
    }

    return new User(user.id, user.email);
  }
}
