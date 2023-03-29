import app from './app.js'
import { sequelize } from './database/database.js';



async function main() {
    try {
        await sequelize.sync({force:false})
        app.listen(3000)
        console.log('El servidor esta respondiendo al puerto', 3000);
    } catch (error) {
        console.error("Unable to conect to the database:", error);
    }
 }

main();