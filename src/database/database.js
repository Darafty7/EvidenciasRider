import Sequelize from 'sequelize';

export const sequelize = new Sequelize('Datab2','postgres','0000',{
    host: 'localhost',
    dialect: 'postgres'
});
