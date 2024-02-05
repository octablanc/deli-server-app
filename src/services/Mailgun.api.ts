import * as dotenv from "dotenv";
import Mailgun from 'mailgun-js';
import { HtmlMailTemplate } from "./utils/HtmlMailTemplate";

dotenv.config();
const { MAILGUN_DOMAIN, MAILGUN_API_KEY } = process.env;

class Mailgun_API {
    private mg;

    constructor (){
        this.mg = Mailgun({
            apiKey: MAILGUN_API_KEY!,
            domain: MAILGUN_DOMAIN!
        });
    }


    public async sendEmail(receiverMail:string, receiverUserName: string){
        this.mg.messages().send({ 
            from: '"DELI" <ola@deli.com.br>',
            to: receiverMail,
            subject: '¡Te damos la bievenida a DELI!',
            html: HtmlMailTemplate(receiverUserName)
         });
    }
}

export const MailgunAPI = new Mailgun_API();