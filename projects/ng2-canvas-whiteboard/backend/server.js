const express = require('express');
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200']
    }
});
const chalk = require('chalk');

io.on('connection', function (socket) {
    const id_handshake = socket.id;
    const {nameRoom} = socket.handshake.query;

    socket.join(nameRoom);

    console.log(`Nuevo dispositivo conectado: ${id_handshake} a: ${nameRoom}`);
    
    socket.on('draw',(res)=>{
        const drawData = res;
        socket.to(nameRoom).emit('draw', drawData);
    })
    socket.on('clear',(res)=>{
        socket.to(nameRoom).emit('clear');
    })
    socket.on('undo',(res)=>{
        const undoInfo = res;
        socket.to(nameRoom).emit('undo',undoInfo);
    })
    socket.on('redo',(res)=>{
        const redoInfo = res;
        socket.to(nameRoom).emit('redo',redoInfo);
    })
    socket.on('save',(res)=>{
        socket.to(nameRoom).emit('save');
    })
    socket.on('saveToStorage',(res)=>{
        socket.to(nameRoom).emit('saveToStorage');
    })
    socket.on('loadFromStorage',(res)=>{
        socket.to(nameRoom).emit('loadFromStorage');
    })
    socket.on('changeOptions',(res)=>{
        socket.to(nameRoom).emit('changeOptions');
    })
});

server.listen(8080,()=>{
    console.log('Server ready (port 8080)')
})



