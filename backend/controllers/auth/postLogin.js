const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    
    if (user && (await bcrypt.compare(password, user.password))) {
      // Send token
      const token = jwt.sign(
        {
          userId: user._id,
          email,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );
      return res.status(200).json({
        userDetails: {
          username: user.username,
          email: user.email,
          token,
        },
      });
    }

    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.status(400).send("Invalid Credentials. Please try again.");
  } catch (e) {
    return res.status(500).send("Something went wrong: ", e);
  }
};

module.exports = postLogin;
