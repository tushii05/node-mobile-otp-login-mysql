const Sequelize = require('sequelize');
const sequelize = new Sequelize('mobile-otp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    mobileNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    mobileOtp: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    otpExpiration: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    smsVerify: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = { sequelize, User };
