const argon2 = require("argon2");

async function hashPassword(password) {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    console.error("Could not hash password:", err);
    throw new Error("Password hashing failed.");
  }
}

async function validatePassword(passwordHash, possiblePassword) {
  try {
    const isCorrect = argon2.verify(passwordHash, possiblePassword);
    return isCorrect;
  } catch (err) {
    console.error("Could not validate password:", err);
    return null;
  }
}

module.exports = { hashPassword, validatePassword };
