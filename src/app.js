import express from 'express';
import {Server} from 'socket.io';
import __dirname from './utils.js';

const app = express();
const PORT = process.env.PORT||8080//Variable de entorno o puerto local 8080

app.use(express.static(__dirname+'/public'))

const server = app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
})

const io = new Server(server);//llamamos al server de socket.io


const log = [];
io.on('connection',socket=>{

})