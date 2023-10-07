const { Model, DataTypes } = require('sequelize');

class User extends Model { }

const sequelize = require('../database');

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.INTEGER,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    gender: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    profile_photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ktp_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ktp_photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    selfie_with_ktp_photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address_country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address_province: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address_city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address_district: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address_detail: {
        type: DataTypes.STRING,
        allowNull: true
    },
    zip_code: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;
