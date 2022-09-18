const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) return res.status(403).send("No token found, a token is required for authentication.");

  try {
    token = token.replace(/^Bearer\s+/, ""); // Replace Bearer and the empty space with ""
    const decode = jwt.verify(token, config.TOKEN_KEY);
    req.user = decode;
  } catch (e) {
    return res.status(401).send("Invalid Token: ", e);
  }

  return next();
};

module.exports = verifyToken;
