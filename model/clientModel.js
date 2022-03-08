const TABLE_NAME ='rt_clients'

module.exports = {
  addClient: (con, data) => {
    return new Promise((resolve, reject) => {
      con.query(`
      INSERT INTO ${TABLE_NAME}(
        name_client,
        surnames_client,
        data_of_birth_client
      )
      VALUES ?`, [data], (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  },
  listCLients: (con) => {
    return new Promise((resolve, reject) => {
      con.query(`
      SELECT 
          name_client,
          surnames_client,
          DATE_FORMAT(data_of_birth_client, '%d/%m/%Y') AS data_of_birth_client,
          YEAR(CURRENT_TIMESTAMP) - YEAR(data_of_birth_client) - (RIGHT(CURRENT_TIMESTAMP, 5) < RIGHT(data_of_birth_client, 5)) as age
      FROM
        ${TABLE_NAME}`, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  }
}
