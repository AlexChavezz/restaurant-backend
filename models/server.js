const express = require('express');
const cors = require('cors');
const path = require('path');

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
        this.app.use(cors());
    }
    routes(){
        this.app.use('/api/menu',require('../routes/menu.routes'));
        this.app.use('/api/users', require('../routes/user.routes'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}`)
        });
    }
}

module.exports = Server;