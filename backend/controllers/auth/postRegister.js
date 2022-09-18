const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already in use
    const userExists = await User.exists({ email: email.toLowerCase() });

    if (userExists) {
      return res.status(409).send("Email already in use.");
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user document and save it in database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // Create JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      },
    );

    res.status(201).json({
      userDetails: {
        username: user.username,
        email: user.email,
        token,
      },
    });
  } catch (e) {
    return res.status(500).send("An Error Occured: ", e);
  }
};

module.exports = postRegister;
