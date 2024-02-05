import { Sequelize } from "sequelize";
import UsersEntity from "../entities/Users.entity";

const { DB_URL } = process.env;

const DBcontext = new Sequelize(`${DB_URL}`, {
  logging: false,
  native: false,
});

UsersEntity(DBcontext);

export default DBcontext;