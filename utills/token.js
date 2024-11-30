const jwt = require("jsonwebtoken");

const generateToken = (userInfo) => {
  const payload = {
    _id: userInfo._id,
    name: userInfo.name,
    email: userInfo.email,
    role: userInfo.role,
    status: userInfo.status,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7days",
  });
  return token;
};

module.exports = generateToken;
