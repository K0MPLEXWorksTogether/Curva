const jwt = require("jsonwebtoken");

function generateToken(payload) {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: process.env.JWT_EXPIRY,
    });
  } catch (err) {
    console.error("Could not generate JWT:", err);
    throw new Error("Token generation failed!");
  }
}

function validateToken(token) {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (err) {
    console.error("Could not validate JWT:", err);
    return null;
  }
}

module.exports = { generateToken, validateToken };
