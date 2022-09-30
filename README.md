# myTeamElevenAPI

Sequelize Association
The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).

The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).

The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).

#CREATEING RELATION: PLAYER HAS MULTIPLE TEAMS_DATA
<!-- models.player.belongsTo(models.teams_data,{
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
}) -->

#DEFINING include 
<!-- const playerTeams = {
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
} -->

#This method uses 
<!-- router.get('/get-all-players',(req,res)=>{
    models.player._validateIncludedElements(playerTeams) // important for raw querry association
    sequelize.query(query.GET_ALL_PLAYERS,playerTeams)   // options=playerTeams
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.error("Error---",err);
        res.send(false)
    })
}) -->


#QUERRY SHOULD BE WRITTEN LIKE THIS
<!-- select player.*, team1Data.team_id as 'team1Data.team_id',team1Data.team_name as 'team1Data.team_name', team1Data.team_owner as 'team1Data.team_owner', team1Data.temporary_team as 'team1Data.temporary_team', team2Data.team_id as 'team2Data.team_id',team2Data.team_name as 'team2Data.team_name', team2Data.team_owner as 'team2Data.team_owner', team2Data.temporary_team as 'team2Data.temporary_team', team3Data.team_id as 'team3Data.team_id',team3Data.team_name as 'team3Data.team_name', team3Data.team_owner as 'team3Data.team_owner', team3Data.temporary_team as 'team3Data.temporary_team', team4Data.team_id as 'team4Data.team_id',team4Data.team_name as 'team4Data.team_name', team4Data.team_owner as 'team4Data.team_owner', team4Data.temporary_team as 'team4Data.temporary_team' from player left join teams_data team1Data on player.player_team_1_id=team1Data.team_id left join teams_data team2Data on player.player_team_2_id=team2Data.team_id left join teams_data team3Data on player.player_team_3_id=team2Data.team_id left join teams_data team4Data on player.player_team_4_id=team2Data.team_id; -->



