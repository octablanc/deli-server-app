import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => {
    sequelize.define(
        "users",
        {
            mail: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            full_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            user_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        { freezeTableName: true, timestamps: false }
    );
};
