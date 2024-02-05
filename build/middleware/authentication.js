"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { JWT_SECRET } = process.env;
const authentication = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');
    if (!authorizationHeader) {
        return res.status(400).json({ mensaje: 'Token not provided' });
    }
    if (!JWT_SECRET) {
        return res.status(500).json({ mensaje: 'Internal server error: JWT_SECRET key undefined' });
    }
    // Separar el token del esquema 'Bearer'
    const [, token] = authorizationHeader.split(' ');
    if (!token) {
        return res.status(400).json({ mensaje: 'Invalid token format' });
    }
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err) => {
        if (err) {
            return res.status(400).json({ mensaje: 'Invalid token' });
        }
        next();
    });
};
exports.authentication = authentication;
