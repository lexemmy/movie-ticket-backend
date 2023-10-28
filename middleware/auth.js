const jwt = require("jsonwebtoken");

exports.hasAuth = (req, res, next) => {
  let authHeader = req.get("authorization");
  authHeader = authHeader.split("=")[1];
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = user;

    next();
  });
};
