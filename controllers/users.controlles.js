const dbConnection = require('../db/dbConnection')

const getUsers = (req, res) => {
    const query = 'SELECT * FROM b2dywf3jqttxfzaxgbyo.Users';
    dbConnection.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({
                message: 'Internal server error'
            });
        } else {
            return res.json({
                users: results,
            });
        }
    });
}



const getUser = (req, res) => {

    const { userName, password } = req.body;
    const query = `SELECT * FROM b2dywf3jqttxfzaxgbyo.Users WHERE userName = '${userName}'  AND password = '${password}'`;
    dbConnection.query(query, (error, result) => {
        if (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Internal server error',
            });
        } else {
            if (result[ 0 ]) {
                return res.json({
                    userName: result[ 0 ].userName,
                    role: result[ 0 ].role
                });
            } else {
                return res.json({
                    message: 'User does not exist'
                });
            }
        }
    });
}

const addEmployed = (req, res) => {

    const { name, password, role } = req.body;

    const query = `INSERT INTO b2dywf3jqttxfzaxgbyo.Users ( userName, password, role ) VALUES ('${name}', '${password}', '${role}')`;
    dbConnection.query(query, (error) => {
        if (error) {
            console.log(error)
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

const deleteUser = (req, res) => {
    const { uid } = req.params
    const query = `DELETE FROM b2dywf3jqttxfzaxgbyo.Users WHERE uid = ${uid}`;
    dbConnection.query(query, (error, results) => {
        if (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }else{
            return res.json({
                message:'User has been deleted successfully',
            });
        }
    });
}

module.exports = {
    getUsers,
    getUser,
    addEmployed,
    deleteUser
}