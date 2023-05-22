const express = require('express');
require('dotenv').config();
const { dbConnection } = require('../Database/config');

class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.connectToDB();
    this.addMiddlewares();
    this.setRoutes();
  }

  async connectToDB(){
    await dbConnection();
  }

  addMiddlewares(){
    this.app.use(express.static('public'));

    this.app.use(express.json());
  }

  setRoutes(){
    this.app.use('/api/auth', require('../Routes/auth'));
    this.app.use('/api/posts', require('../Routes/posts'));
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto: ', this.port);
    });
  }
}

module.exports = Server;