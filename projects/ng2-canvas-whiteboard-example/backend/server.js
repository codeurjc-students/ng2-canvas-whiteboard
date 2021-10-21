const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200']
    }
});
const chalk = require('chalk');


io.on('connect', function (socket) {
    const id_handshake = socket.id;
    const {nameRoom} = socket.handshake.query;
    socket.join(nameRoom);
    console.log(`${chalk.blue(`Nuevo dispositivo conectado: ${id_handshake} a la sala: ${nameRoom}`)}`);
});
server.listen(8080,()=>{
    console.log('Socket listening (port 8080)')
})

