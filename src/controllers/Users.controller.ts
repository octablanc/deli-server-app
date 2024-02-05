import express, { Request, Response } from "express";
import DBcontext from "../context/DBConext";
import { MailgunAPI } from "../services/Mailgun.api";
const { users: Users } = DBcontext.models;
const usersRouter = express.Router();

async function getUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const user = await Users.findByPk(id)

        if (!user)
            throw Error('User not found.');

        return res.send(user);
    } catch (error) {
        if (error instanceof Error)
            return res.status(400).send({ message: error.message });
        else
            return res.status(400).send({ error });
    }
}

async function getUsers(_req: Request, res: Response) {
    try {
        return res.send(await Users.findAll());
    } catch (error) {
        if (error instanceof Error)
            return res.status(400).send({ message: error.message });
        else
            return res.status(400).send({ error });
    }
}

async function updateUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const user = await Users.findByPk(id);

        if (!user)
            throw Error('User not found.');


        await user?.update(req.body);
        await user?.save();
        return res.send(user);
    } catch (error) {
        if (error instanceof Error)
            return res.status(400).send({ message: error.message });
        else
            return res.status(400).send({ error });
    }
}

async function createUser(req: Request, res: Response) {
    const { mail, full_name, age, user_name, country } = req.body;
    try {
        if (!mail || !full_name || !age || !user_name || !country)
            throw Error('Missing fields');

        const user = await Users.findOne({
            where: {
                mail: mail.toUpperCase(),
            }
        });

        if (user)
            throw Error('User already exists!')

        await Users.create({...req.body, mail: mail.toUpperCase()});

        MailgunAPI.sendEmail(mail, user_name);

        return res.send({message: 'User created successfully.'});
    } catch (error) {
        if (error instanceof Error)
            return res.status(400).send({ message: error.message });
        else
            return res.status(400).send({ error });
    }
}

async function deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const user = await Users.findByPk(id);
        await user?.destroy();
        return res.send(user);
    } catch (error) {
        if (error instanceof Error)
            return res.status(400).send({ message: error.message });
        else
            return res.status(400).send({ error });
    }
}

usersRouter.get('/get-user/:id', getUser);
usersRouter.get('/get-users', getUsers);
usersRouter.put('/update-user/:id', updateUser);
usersRouter.delete('/delete-user/:id', deleteUser);
usersRouter.post('/create-user', createUser);

export default usersRouter;