const sgMail = require("@sendgrid/mail");
// const nodemailer = require("nodemailer");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465, // 25, 465 и 2255
//   secure: true,
//   auth: { user: "bogdan. lyamzin. d@meta. ua", pass: META_PASSWORD },
// };

// const transporter = nodemailer.createTransport(nodemailerConfig);
const email = {
  to: "test@example.com",
  from: "test@example.com",
  subject: "New Email",
  html: "<strong>New email from site</strong>",
};
sgMail
  .send(email)
  .then(() => {
    console.log("Email send success");
  })
  .catch((error) => {
    console.log(error.message);
  });
