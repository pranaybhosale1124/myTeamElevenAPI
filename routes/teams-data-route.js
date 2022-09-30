var express=require('express')
var router=express.Router();
const cors=require('cors');
const query=require('../models/queries')
router.use(cors());

const sequelize=require('../models/db-config')
var initModels = require("../models/init-models");
const { where } = require('sequelize');
var models = initModels(sequelize);


router.get('/teams-data-home',(req,res)=>{
    res.send(true)
})

// Association
models.teams_data.hasMany(models.player)

models.teams_data.belongsTo(models.player)
// -------------------------- {as: 'playersList'}

// GET PLAYERS BY TEAM ID
router.get('/get-players-by-team-id/:team_id',(req,res)=>{
    const teamsData = {
        replacements: [req.params.team_id],
        raw:true,
        hasJoin: true,
        nest:true,
        include: [
            {
                model:models.player,
                as:'player'
            }
        ]
    }
    models.teams_data._validateIncludedElements(teamsData)
    sequelize.query(query.GET_TEAM_PLAYERS,teamsData)  
    .then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.error("ERROR[get-players-by-team-id]:::",err);
        res.status(200).json({
            status_code:400,
            status:'ERROR_FETCHING_PLAYERS'
        })
    })
})

// ADD NEW TEAM
router.get('/add-new-team',(req,res)=>{
    let team_data=req.body;
    models.teams_data.create(team_data).then(()=>{
        res.status(200).json({
            status_code:200,
            status:'SUCCESSFULL'
        })
    }).catch((err)=>{
        console.error("ERROR[add-new-team]:::",err)
        res.status(200).json({
            status_code:400,
            status:'ERROR_ADDING_TEAM'
        })
    })
})

module.exports = router;