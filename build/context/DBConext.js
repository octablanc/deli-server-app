"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const Users_entity_1 = __importDefault(require("../entities/Users.entity"));
const { DB_URL } = process.env;
const DBcontext = new sequelize_1.Sequelize(`${DB_URL}`, {
    logging: false,
    native: false,
});
(0, Users_entity_1.default)(DBcontext);
exports.default = DBcontext;
