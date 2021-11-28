const dbConnection = require('../db/dbConnection')

const getMenu = (req, res) => {
    dbConnection.query('SELECT * FROM b2dywf3jqttxfzaxgbyo.Menu',
        (error, result, fields) => {
            if (error) {
                return res.status(500).json({
                    msg: 'Internal server error',
                });
            } else {
                return res.json(result);
            }
        });
}

const updateMenu = (req, res) => {

    const {name, price, isAvailable} = req.body;
    const { id } = req.params;
    try {
        dbConnection.query(`UPDATE b2dywf3jqttxfzaxgbyo.Menu SET name="${name}", price="${price}", isAvailable = ${isAvailable} WHERE idMenu = ${id} `);
        return res.status(200).json({
            ok:true
        })
    } catch (error) {
        return res.json({
            ok: flase
        })        
    }
}


module.exports = {
    getMenu,
    updateMenu,
}