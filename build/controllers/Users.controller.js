"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DBConext_1 = __importDefault(require("../context/DBConext"));
const Mailgun_api_1 = require("../services/Mailgun.api");
const { users: Users } = DBConext_1.default.models;
const usersRouter = express_1.default.Router();
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield Users.findByPk(id);
            if (!user)
                throw Error('User not found.');
            return res.send(user);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).send({ message: error.message });
            else
                return res.status(400).send({ error });
        }
    });
}
function getUsers(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return res.send(yield Users.findAll());
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).send({ message: error.message });
            else
                return res.status(400).send({ error });
        }
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield Users.findByPk(id);
            if (!user)
                throw Error('User not found.');
            yield (user === null || user === void 0 ? void 0 : user.update(req.body));
            yield (user === null || user === void 0 ? void 0 : user.save());
            return res.send(user);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).send({ message: error.message });
            else
                return res.status(400).send({ error });
        }
    });
}
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { mail, full_name, age, user_name, country } = req.body;
        try {
            if (!mail || !full_name || !age || !user_name || !country)
                throw Error('Missing fields');
            const user = yield Users.findOne({
                where: {
                    mail: mail.toUpperCase(),
                }
            });
            if (user)
                throw Error('User already exists!');
            yield Users.create(Object.assign(Object.assign({}, req.body), { mail: mail.toUpperCase() }));
            Mailgun_api_1.MailgunAPI.sendEmail(mail, user_name);
            return res.send({ message: 'User created successfully.' });
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).send({ message: error.message });
            else
                return res.status(400).send({ error });
        }
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield Users.findByPk(id);
            yield (user === null || user === void 0 ? void 0 : user.destroy());
            return res.send(user);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).send({ message: error.message });
            else
                return res.status(400).send({ error });
        }
    });
}
usersRouter.get('/get-user/:id', getUser);
usersRouter.get('/get-users', getUsers);
usersRouter.put('/update-user/:id', updateUser);
usersRouter.delete('/delete-user/:id', deleteUser);
usersRouter.post('/create-user', createUser);
exports.default = usersRouter;
