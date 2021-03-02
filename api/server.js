const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const UsersRouter = require('../users/user-router.js')
const ItemsRouter = require('../items/items-router.js')

const server = express();

server.use(cors());
server.use(express.json());


server.use(function (req, res, next) {
    console.log('woohoo')
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-Withm Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

server.use('/api/users', UsersRouter);
server.use('/api/items', ItemsRouter);


server.get('/', (req,res) => {
    res.status(200).json({message:'Welcome to the African Marketplace'})
})


module.exports = server;