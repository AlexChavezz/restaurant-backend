const dbConnection = require('../db/dbConnection')

const getUsers = (req, res) => {

    const { userName, password } = req.body;
    const query = `SELECT * FROM b2dywf3jqttxfzaxgbyo.Users WHERE userName = '${userName}'  AND password = '${password}'`;
    dbConnection.query(query, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(500).json({
                message:'Internal server error',
            });
        }else{
            if(result[0]){
                return res.json({
                    userName:result[0].userName,
                    role:result[0].role
                });
            }else{
                return res.json({
                    message:'User does not exist'
                });
            }
        }
    });
}

const addEmployed = (req, res) => {
    const query = "INSERT INTO b2dywf3jqttxfzaxgbyo.Users (email, password, name, role) VALUES ('alexischavez1234.ac@gmail.com', 'password', 'alexis', 'admin')";
    dbConnection.query(query, (error, result) => {
        if (error) {
            return res.status(500).json({
                message: 'Internal error server',
            });
        } else {
            return res.json({
                message: 'User has be added Succesfull',
            });
        }
    });
}

module.exports = {
    getUsers,
    addEmployed
}