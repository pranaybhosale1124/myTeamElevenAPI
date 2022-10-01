var DataTypes = require("sequelize").DataTypes;
var _contest = require("./contest");
var _contest_team = require("./contest_team");
var _mtel_user = require("./mtel_user");
var _my_team = require("./my_team");
var _player = require("./player");
var _teams_data = require("./teams_data");

function initModels(sequelize) {
  var contest = _contest(sequelize, DataTypes);
  var contest_team = _contest_team(sequelize, DataTypes);
  var mtel_user = _mtel_user(sequelize, DataTypes);
  var my_team = _my_team(sequelize, DataTypes);
  var player = _player(sequelize, DataTypes);
  var teams_data = _teams_data(sequelize, DataTypes);

  contest_team.belongsTo(contest, { as: "contest", foreignKey: "contest_id"});
  contest.hasMany(contest_team, { as: "contest_teams", foreignKey: "contest_id"});
  my_team.belongsTo(contest, { as: "contest", foreignKey: "contest_id"});
  contest.hasMany(my_team, { as: "my_teams", foreignKey: "contest_id"});
  my_team.belongsTo(mtel_user, { as: "user", foreignKey: "user_id"});
  mtel_user.hasMany(my_team, { as: "my_teams", foreignKey: "user_id"});
  contest_team.belongsTo(player, { as: "player_1", foreignKey: "player_1_id"});
  player.hasMany(contest_team, { as: "contest_teams", foreignKey: "player_1_id"});
  contest_team.belongsTo(player, { as: "player_10", foreignKey: "player_10_id"});
  player.hasMany(contest_team, { as: "player_10_contest_teams", foreignKey: "player_10_id"});
  contest_team.belongsTo(player, { as: "player_11", foreignKey: "player_11_id"});
  player.hasMany(contest_team, { as: "player_11_contest_teams", foreignKey: "player_11_id"});
  contest_team.belongsTo(player, { as: "player_12", foreignKey: "player_12_id"});
  player.hasMany(contest_team, { as: "player_12_contest_teams", foreignKey: "player_12_id"});
  contest_team.belongsTo(player, { as: "player_13", foreignKey: "player_13_id"});
  player.hasMany(contest_team, { as: "player_13_contest_teams", foreignKey: "player_13_id"});
  contest_team.belongsTo(player, { as: "player_14", foreignKey: "player_14_id"});
  player.hasMany(contest_team, { as: "player_14_contest_teams", foreignKey: "player_14_id"});
  contest_team.belongsTo(player, { as: "player_15", foreignKey: "player_15_id"});
  player.hasMany(contest_team, { as: "player_15_contest_teams", foreignKey: "player_15_id"});
  contest_team.belongsTo(player, { as: "player_16", foreignKey: "player_16_id"});
  player.hasMany(contest_team, { as: "player_16_contest_teams", foreignKey: "player_16_id"});
  contest_team.belongsTo(player, { as: "player_17", foreignKey: "player_17_id"});
  player.hasMany(contest_team, { as: "player_17_contest_teams", foreignKey: "player_17_id"});
  contest_team.belongsTo(player, { as: "player_18", foreignKey: "player_18_id"});
  player.hasMany(contest_team, { as: "player_18_contest_teams", foreignKey: "player_18_id"});
  contest_team.belongsTo(player, { as: "player_19", foreignKey: "player_19_id"});
  player.hasMany(contest_team, { as: "player_19_contest_teams", foreignKey: "player_19_id"});
  contest_team.belongsTo(player, { as: "player_2", foreignKey: "player_2_id"});
  player.hasMany(contest_team, { as: "player_2_contest_teams", foreignKey: "player_2_id"});
  contest_team.belongsTo(player, { as: "player_20", foreignKey: "player_20_id"});
  player.hasMany(contest_team, { as: "player_20_contest_teams", foreignKey: "player_20_id"});
  contest_team.belongsTo(player, { as: "player_3", foreignKey: "player_3_id"});
  player.hasMany(contest_team, { as: "player_3_contest_teams", foreignKey: "player_3_id"});
  contest_team.belongsTo(player, { as: "player_4", foreignKey: "player_4_id"});
  player.hasMany(contest_team, { as: "player_4_contest_teams", foreignKey: "player_4_id"});
  contest_team.belongsTo(player, { as: "player_5", foreignKey: "player_5_id"});
  player.hasMany(contest_team, { as: "player_5_contest_teams", foreignKey: "player_5_id"});
  contest_team.belongsTo(player, { as: "player_6", foreignKey: "player_6_id"});
  player.hasMany(contest_team, { as: "player_6_contest_teams", foreignKey: "player_6_id"});
  contest_team.belongsTo(player, { as: "player_7", foreignKey: "player_7_id"});
  player.hasMany(contest_team, { as: "player_7_contest_teams", foreignKey: "player_7_id"});
  contest_team.belongsTo(player, { as: "player_8", foreignKey: "player_8_id"});
  player.hasMany(contest_team, { as: "player_8_contest_teams", foreignKey: "player_8_id"});
  contest_team.belongsTo(player, { as: "player_9", foreignKey: "player_9_id"});
  player.hasMany(contest_team, { as: "player_9_contest_teams", foreignKey: "player_9_id"});
  my_team.belongsTo(player, { as: "player_1", foreignKey: "player_1_id"});
  player.hasMany(my_team, { as: "my_teams", foreignKey: "player_1_id"});
  my_team.belongsTo(player, { as: "player_10", foreignKey: "player_10_id"});
  player.hasMany(my_team, { as: "player_10_my_teams", foreignKey: "player_10_id"});
  my_team.belongsTo(player, { as: "player_11", foreignKey: "player_11_id"});
  player.hasMany(my_team, { as: "player_11_my_teams", foreignKey: "player_11_id"});
  my_team.belongsTo(player, { as: "player_2", foreignKey: "player_2_id"});
  player.hasMany(my_team, { as: "player_2_my_teams", foreignKey: "player_2_id"});
  my_team.belongsTo(player, { as: "player_3", foreignKey: "player_3_id"});
  player.hasMany(my_team, { as: "player_3_my_teams", foreignKey: "player_3_id"});
  my_team.belongsTo(player, { as: "player_4", foreignKey: "player_4_id"});
  player.hasMany(my_team, { as: "player_4_my_teams", foreignKey: "player_4_id"});
  my_team.belongsTo(player, { as: "player_5", foreignKey: "player_5_id"});
  player.hasMany(my_team, { as: "player_5_my_teams", foreignKey: "player_5_id"});
  my_team.belongsTo(player, { as: "player_6", foreignKey: "player_6_id"});
  player.hasMany(my_team, { as: "player_6_my_teams", foreignKey: "player_6_id"});
  my_team.belongsTo(player, { as: "player_7", foreignKey: "player_7_id"});
  player.hasMany(my_team, { as: "player_7_my_teams", foreignKey: "player_7_id"});
  my_team.belongsTo(player, { as: "player_8", foreignKey: "player_8_id"});
  player.hasMany(my_team, { as: "player_8_my_teams", foreignKey: "player_8_id"});
  my_team.belongsTo(player, { as: "player_9", foreignKey: "player_9_id"});
  player.hasMany(my_team, { as: "player_9_my_teams", foreignKey: "player_9_id"});
  player.belongsTo(teams_data, { as: "player_team_1", foreignKey: "player_team_1_id"});
  teams_data.hasMany(player, { as: "players", foreignKey: "player_team_1_id"});
  player.belongsTo(teams_data, { as: "player_team_2", foreignKey: "player_team_2_id"});
  teams_data.hasMany(player, { as: "player_team_2_players", foreignKey: "player_team_2_id"});
  player.belongsTo(teams_data, { as: "player_team_3", foreignKey: "player_team_3_id"});
  teams_data.hasMany(player, { as: "player_team_3_players", foreignKey: "player_team_3_id"});
  player.belongsTo(teams_data, { as: "player_team_4", foreignKey: "player_team_4_id"});
  teams_data.hasMany(player, { as: "player_team_4_players", foreignKey: "player_team_4_id"});
  player.belongsTo(teams_data, { as: "player_team_5", foreignKey: "player_team_5_id"});
  teams_data.hasMany(player, { as: "player_team_5_players", foreignKey: "player_team_5_id"});
  player.belongsTo(teams_data, { as: "player_team_6", foreignKey: "player_team_6_id"});
  teams_data.hasMany(player, { as: "player_team_6_players", foreignKey: "player_team_6_id"});
  player.belongsTo(teams_data, { as: "player_team_7", foreignKey: "player_team_7_id"});
  teams_data.hasMany(player, { as: "player_team_7_players", foreignKey: "player_team_7_id"});
  player.belongsTo(teams_data, { as: "player_team_8", foreignKey: "player_team_8_id"});
  teams_data.hasMany(player, { as: "player_team_8_players", foreignKey: "player_team_8_id"});

  return {
    contest,
    contest_team,
    mtel_user,
    my_team,
    player,
    teams_data,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
