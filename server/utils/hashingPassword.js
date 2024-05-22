const { genSaltSync, hashSync } = require("bcrypt");

const encryptPassword = (password) => {
    const salt = genSaltSync(Number(process.env.SALT_ROUND));
    return hashSync(password, salt);
}

module.exports = encryptPassword