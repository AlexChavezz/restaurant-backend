const express = require('express');
const dbConnection = require('../db/dbConnection');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }
    middlewares(){
        this.app.use(express.json());
    }
    routes(){
        this.app.use('/api/menu',require('../routes/menu.routes'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}`)
        });
    }
}

module.exports = Server;