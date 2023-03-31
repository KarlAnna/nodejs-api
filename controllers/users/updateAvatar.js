const { User } = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imgName = `${id}_${originalname}`;
  try {
    const resultUpload = path.join(avatarsDir, imgName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", imgName);
    await User.findByIdAndUpdate(id, { avatarURL });
    res.json({
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(tempUpload);
  }
};

module.exports = updateAvatar;
