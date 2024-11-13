// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";

// dotenv.config();

// export const MailtrapClient = new MailtrapClient({
//   token: process.env.MAILTRAP_TOKEN,
// });

// export const sender = {
//   email: "hello@demomailtrap.com",
//   name: "Mailtrap Test",
// };

import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const client = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN });

export const mailtrapClient = client;

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
