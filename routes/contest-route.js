var express=require('express')
var router=express.Router();
const cors=require('cors');

router.use(cors());

const { Op } = require("sequelize");

const sequelize=require('../models/db-config')
var initModels = require("../models/init-models");
var models = initModels(sequelize);

//ASSOCIATION::::
models.contest.belongsTo(models.teams_data,{
    as: 'team1Data',
    foreignKey: 'team_1_id'
})

models.contest.belongsTo(models.teams_data,{
    as: 'team2Data',
    foreignKey: 'team_2_id'
})

//ASSOCIATION::: teams has a players
//Association player : team_data 
models.player.belongsTo(models.teams_data,{
    // as: 'team1Data',
    foreignKey: 'player_team_1_id'
})

models.player.belongsTo(models.teams_data,{
    // as: 'team2Data',
    foreignKey: 'player_team_2_id'
})

models.player.belongsTo(models.teams_data,{
    // as: 'team3Data',
    foreignKey: 'player_team_3_id'
})

models.player.belongsTo(models.teams_data,{
    // as: 'team4Data',
    foreignKey: 'player_team_4_id'
})


router.get('/contest-home',(req,res)=>{
    res.send(true)
})

router.get('/',(req,res)=>{

    const contestTeams = {
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
            }
        ]
    }
    models.contest.findAll(contestTeams).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.error("ERROR[get-all-players]:::",err);
        res.status(400).json({
            status_code:400,
            status:'ERROR_FETCHING_ALL_PLAYERS'
        })
    })
})

router.get('/contest-details/:contest_id',(req,res)=>{
    let  contestId=req.params.contest_id;
    const contestTeams = {
        raw:true,
        hasJoin: true,
        nest:true,
        where:{
            contest_id:contestId
        },
        include: [
            {
                model:models.teams_data,
                as:'team1Data'
            },
            {
                model:models.teams_data,
                as:'team2Data'
            }
        ]
    }
    models.contest.findAll(contestTeams).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.error("ERROR[get-all-players]:::",err);
        res.status(400).json({
            status_code:400,
            status:'ERROR_FETCHING_ALL_PLAYERS'
        })
    })
})

router.get('/get-team-players/:team_id',(req,res)=>{
    let team_id=req.params.team_id;
    const teamPlayers = {
        raw:true,
        nest:true,
        where:{
            [Op.or]:[
                {player_team_1_id:team_id},
                {player_team_2_id:team_id},
                {player_team_3_id:team_id},
                {player_team_4_id:team_id}
            ]
        }
    }
    models.player.findAll(teamPlayers).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.error("ERROR[get-all-players]:::",err);
        res.status(400).json({
            status_code:400,
            status:'ERROR_FETCHING_ALL_PLAYERS'
        })
    })
})

module.exports = router;