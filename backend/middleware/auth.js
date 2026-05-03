const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "Auth Error" });
  }
const token = authHeader.startsWith("Bearer ")? authHeader.slice(7):null;

if(!token){
  return res.status(401).json({ message: "Invalid Token Format"});
}
  try {
    const decoded = jwt.verify(token, "randomString");
    req.user = decoded.user;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};