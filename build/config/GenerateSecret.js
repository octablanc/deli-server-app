"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
// Genera un buffer de bytes aleatorios
const randomBytesBuffer = (0, crypto_1.randomBytes)(32);
// Convierte el buffer a una cadena hexadecimal
const secret = randomBytesBuffer.toString('hex');
exports.default = secret;
