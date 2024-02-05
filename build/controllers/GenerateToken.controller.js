"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { JWT_SECRET, ACCESS_USER } = process.env;
const generateToken = (req, res) => {
    const { access_user } = req.body;
    if (!access_user)
        return res.status(400).json({ mensaje: 'Missing access_user field' });
    if (!ACCESS_USER)
        return res.status(500).json({ mensaje: 'Intersal server error: ACCSESS_USER undefined' });
    if (!JWT_SECRET)
        return res.status(500).json({ mensaje: 'Intersal server error: JWT_SECRET undefined' });
    if (access_user !== ACCESS_USER)
        return res.status(400).json({ mensaje: 'Invalid access_user' });
    const token = jsonwebtoken_1.default.sign({ ACCESS_USER }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};
exports.generateToken = generateToken;
