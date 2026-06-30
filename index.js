const express=require('express')
const http =require('http');
const app=express();
const server=http.createServer(app);
const { Server } = require('socket.io');
const io=new Server(server);
io.on('connection',(socket)=>{
    socket.on('message',(massage)=>{

        io.emit('message',massage);
       
    })
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/home.html');
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})