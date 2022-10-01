const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('player', {
    player_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    player_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "player_name"
    },
    player_position: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    player_team_1_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'teams_data',
        key: 'team_id'
      }
    },
    player_team_2_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'teams_data',
        key: 'team_id'
      }
    },
    player_team_3_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'teams_data',
        key: 'team_id'
      }
    },
    player_team_4_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'teams_data',
        key: 'team_id'
      }
    },
    player_team_5_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'teams_data',
        key: 'team_id'
      }
    },
    player_team_6_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'teams_data',
        key: 'team_id'
      }
    },
    games_played: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    selection_count: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    attack_points: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    defence_points: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    total_points: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    player_rating: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    current_attack_points: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    current_defence_points: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    current_total: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'player',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "player_id" },
        ]
      },
      {
        name: "player_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "player_name" },
        ]
      },
      {
        name: "player_team_1_id",
        using: "BTREE",
        fields: [
          { name: "player_team_1_id" },
        ]
      },
      {
        name: "player_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "player_team_2_id" },
        ]
      },
      {
        name: "player_ibfk_3",
        using: "BTREE",
        fields: [
          { name: "player_team_3_id" },
        ]
      },
      {
        name: "player_ibfk_4",
        using: "BTREE",
        fields: [
          { name: "player_team_4_id" },
        ]
      },
      {
        name: "player_ibfk_5",
        using: "BTREE",
        fields: [
          { name: "player_team_5_id" },
        ]
      },
      {
        name: "player_ibfk_6",
        using: "BTREE",
        fields: [
          { name: "player_team_6_id" },
        ]
      },
    ]
  });
};
