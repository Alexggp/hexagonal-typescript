import { EmailSender } from "../domain/email-sender";

export class FakeEmailSender implements EmailSender {
  async send(email: string, text: string): Promise<void> {
    return console.log(`Simulating email to ${email}, text: ${text}`);
  }
}
