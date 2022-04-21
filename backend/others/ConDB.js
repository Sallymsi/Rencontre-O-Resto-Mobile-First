const mysql = require('mysql');

// Information de connexion mySql :
module.exports = function dbCon() {
    return mysql.createConnection({
        database: "appli_resto",
        host: "localhost",
        user: "root",
        password: "peluche",
    })
};