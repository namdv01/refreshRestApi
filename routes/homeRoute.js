const express = require('express');
const route = express.Router();
const model = require('../models/homeModel');

route.get('/',async (req,res,next) => {
    try {
        const data = await model.find();
        res.json(data);
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
});

route.get('/:id',async (req,res,next) => {
    try {
        const user = await model.findOne({"_id": req.params.id});
        res.json(user);
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
});

route.post('/',async (req,res,next) => {
    try {
        const user = new model(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
    console.log(req.body);
});

route.delete('/:id',async (req,res,next) => {
    try {
        const removeUser = await model.remove({"_id":req.params.id});
        res.json(removeUser); 
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
});

route.patch('/:id',async (req,res,next) => {
    try {
        const udpateUser = await model.updateOne({"_id":req.params.id},req.body);
        res.json(udpateUser);
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
});

module.exports = route;