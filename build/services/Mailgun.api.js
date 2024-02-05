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
exports.MailgunAPI = void 0;
const mailgun_js_1 = __importDefault(require("mailgun-js"));
const HtmlMailTemplate_1 = require("./utils/HtmlMailTemplate");
const { MAILGUN_DOMAIN, MAILGUN_API_KEY } = process.env;
class Mailgun_API {
    constructor() {
        this.mg = (0, mailgun_js_1.default)({
            apiKey: MAILGUN_API_KEY,
            domain: MAILGUN_DOMAIN
        });
    }
    sendEmail(receiverMail, receiverUserName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mg.messages().send({
                from: '"DELI" <ola@deli.com.br>',
                to: receiverMail,
                subject: '¡Te damos la bievenida a DELI!',
                html: (0, HtmlMailTemplate_1.HtmlMailTemplate)(receiverUserName)
            });
        });
    }
}
exports.MailgunAPI = new Mailgun_API();
