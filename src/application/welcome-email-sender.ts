import { EmailSender } from "../domain/email-sender";
import { UserRepository } from "../domain/user-repository";

export class WelcomeEmailSender {
  constructor(
    private readonly userReposiotiry: UserRepository,
    private readonly emailSender: EmailSender
  ) {}

  async run(userId: string) {
    const user = await this.userReposiotiry.getById(userId);

    if (!user) {
      throw new Error(`User id not found ${userId}`);
    }

    await this.emailSender.send(user.email, "Welcome to our application!");
  }
}
