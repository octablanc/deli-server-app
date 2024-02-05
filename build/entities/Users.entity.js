"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define("users", {
        mail: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        full_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        user_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        }
    }, { freezeTableName: true, timestamps: false });
};
