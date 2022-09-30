var express=require('express')
var router=express.Router();
const cors=require('cors');

router.use(cors());

const sequelize=require('../models/db-config')
var initModels = require("../models/init-models");
var models = initModels(sequelize);


router.get('/mtel-user-home',(req,res)=>{
    res.send(true)
})