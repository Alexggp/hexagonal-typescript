import { WelcomeEmailSender } from "../application/welcome-email-sender";
import { FakeEmailSender } from "./fake-email-sender";
import { InMemoryUserRespository } from "./in-memory-user-repository";
import { UserController } from "./user-controller";

const fakeEmailSender = new FakeEmailSender();
const inMemoryUserRepository = new InMemoryUserRespository();
export const welcomeEmailSender = new WelcomeEmailSender(
  inMemoryUserRepository,
  fakeEmailSender
);
export const userController = new UserController(welcomeEmailSender);
