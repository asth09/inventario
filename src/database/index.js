const db = require('./models');
const Logger = require('../../utils/logger');

module.exports = function connectToDatabase() {
  return new Promise(async (resolve, reject) => {
    try {
      await db.sequelize.authenticate();
      Logger.log('Conexión exitosa con la base de datos', 'success');
      await db.sequelize.sync();
      Logger.log('Modelos migrados a la base de datos', 'success');
      resolve();
    } catch (error) {
      Logger.log(`Error de conexión a la base de datos: ${error}`, 'error');
      reject(error);
    }
  });
};