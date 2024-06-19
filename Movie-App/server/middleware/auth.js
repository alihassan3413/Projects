const jwt = require("jsonwebtoken");
const SECRET =
  "8e4a47c3f71816fea6e3403683724ce4f37a483c3df3e9cab9aeecdb5e638b57";

const authenticateJWT = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (authHeaders) {
    const token = authHeaders.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  SECRET,
  authenticateJWT,
};
