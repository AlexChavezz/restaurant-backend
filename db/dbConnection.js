const mysql  = require('mysql2');

const dbConnection = mysql.createConnection({
    host:"b2dywf3jqttxfzaxgbyo-mysql.services.clever-cloud.com",
    user:"uuihjscvlum2yqow",
    database:"b2dywf3jqttxfzaxgbyo",
    password:"Jmw7uPbeFZ24jvrHkojv"
});
// password Jmw7uPbeFZ24jvrHkojv

module.exports = dbConnection;