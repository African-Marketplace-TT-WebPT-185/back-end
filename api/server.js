const express = require('express');
const helmet = require('helmet')

const UserRouter = require('./users/users-router.js')
const ItemsRouter = require('./users/users-router.js')

const server = express();


server.use(express.json());

server.use('/api/users', UsersRouter);
server.use('/api/items', ItemsRouter);


server.get('/', (req,res) => {
    res.status(200).json({message:'Welcome to the African Marketplace'})
})


module.exports = server;