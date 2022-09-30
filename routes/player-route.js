var express=require('express')
var router=express.Router();
const cors=require('cors');

router.use(cors());

const query=require('../models/queries')
const sequelize=require('../models/db-config')
var initModels = require("../models/init-models");
const teams_data = require('../models/teams_data');
var models = initModels(sequelize);

//Association player : team_data 
models.player.belongsTo(models.teams_data,{
    as: 'team1Data',
    foreignKey: 'player_team_1_id'
})

models.player.belongsTo(models.teams_data,{
    as: 'team2Data',
    foreignKey: 'player_team_2_id'
})

models.player.belongsTo(models.teams_data,{
    as: 'team3Data',
    foreignKey: 'player_team_3_id'
})

models.player.belongsTo(models.teams_data,{
    as: 'team4Data',
    foreignKey: 'player_team_4_id'
})

//test route
router.get('/player-home',(req,res)=>{
    res.send(true)
})

//Get All Players:::
router.get('/get-all-players',(req,res)=>{
    const playerTeams = {
        raw:true,
        hasJoin: true,
        nest:true,
        include: [
            {
                model:models.teams_data,
                as:'team1Data'
            },
            {
                model:models.teams_data,
                as:'team2Data'
            },
            {
                model:models.teams_data,
                as:'team3Data'
            },
            {
                model:models.teams_data,
                as:'team4Data'
            },
        ]
    }
    models.player.findAll(playerTeams).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.error("ERROR[get-all-players]:::",err);
        res.status(400).json({
            status_code:400,
            status:'ERROR_FETCHING_ALL_PLAYERS'
        })
    })
})

//Get Players By Id:::
router.get('/get-player-info/:player_id',(req,res)=>{
    let id=req.params.player_id;
    let getPlayerInfoById={
        where: { 
            player_id:  id 
        },
        include: [
        {
            model:models.teams_data,
            as:'team1Data'
        },
        {
            model:models.teams_data,
            as:'team2Data'
        },
        {
            model:models.teams_data,
            as:'team3Data'
        },
        {
            model:models.teams_data,
            as:'team4Data'
        },
    ]}
    models.player.findOne(getPlayerInfoById).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.error("ERROR[get-player-info]:::",err);
        res.status(400).json({
            status_code:400,
            status:'ERROR_FETCHING_PLAYER'
        })
    })
})

//Add New Player:::
router.post('/add-new-player',(req,res)=>{
    let player_to_add=req.body;
    models.player.create(player_to_add).then(()=>{
        res.status(200).json({
            status_code:200,
            status:'SUCCESSFULL'
        })
    }).catch((err)=>{
        console.log('ERROR[add-new-player]:::',err);
        res.status(200).json({
            status_code:400,
            status:'ERROR_ADDING_PLAYER'
        })
    })
})


module.exports = router;