import { Sequelize } from 'sequelize';
module.exports = new Sequelize(
    process.env.DB_NAME, //
    process.env.DB_USER, //
    process.env.DB_PW, //
    { 
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
)