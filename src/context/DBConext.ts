import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
import UsersEntity from "../entities/Users.entity";

dotenv.config();
const { DB_URL } = process.env;

const DBcontext = new Sequelize(`${DB_URL}`, {
  logging: false,
  native: false,
});

UsersEntity(DBcontext);

export default DBcontext;