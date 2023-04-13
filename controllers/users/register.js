const { User } = require("../../models/user");
const { sendEmail } = require("../../helpers/index");
const gravatar = require("gravatar");
const nanoid = require("nanoid");
const { Conflict } = require("http-errors");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const newUser = new User({ email, avatarURL, verificationToken });
  newUser.setPassword(password);
  await newUser.save();
  const mail = {
    to: email,
    subject: "Email verification",
    html: `<a target="_blank href="http://localhost:3000/api/users/verify/${verificationToken}">Click to verify</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription: "starter",
      },
    },
  });
};

module.exports = register;
