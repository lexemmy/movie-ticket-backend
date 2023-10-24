const jwt = require("jsonwebtoken");

exports.hasAuth = (req, res, next) => {
  const authHeader = req.cookies.token;
  console.log(authHeader);
  if (authHeader == null) {
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
