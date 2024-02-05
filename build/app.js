"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const DBConext_1 = __importDefault(require("./context/DBConext"));
const cors_1 = __importDefault(require("cors"));
const Router_1 = __importDefault(require("./router/Router"));
const authentication_1 = require("./middleware/authentication");
const GenerateToken_controller_1 = require("./controllers/GenerateToken.controller");
const { PORT } = process.env;
const app = (0, express_1.default)();
app.use((0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/generate-token', GenerateToken_controller_1.generateToken);
app.use(authentication_1.authentication);
app.use('/', Router_1.default);
DBConext_1.default.sync({ force: false }).then(() => app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
}));
