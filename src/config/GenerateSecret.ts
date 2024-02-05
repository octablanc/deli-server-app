import { randomBytes } from 'crypto';

// Genera un buffer de bytes aleatorios
const randomBytesBuffer = randomBytes(32);

// Convierte el buffer a una cadena hexadecimal
const secret = randomBytesBuffer.toString('hex');

export default secret;