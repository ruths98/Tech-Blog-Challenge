const { User } = require('../models');

const userData = [
    {
        username: "internetQueen",
        email: "codequeen@email.com",
        password: "pass1234"
    },
    {
        username: "TrollGawd",
        email: "coolguy@email.com",
        password: "password"
    },
    {
        username: "anonymous1",
        email: "youdontknowme@email.com",
        password: "querty123"
    }
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;