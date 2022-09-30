const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teams_data', {
    team_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    team_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "team_name"
    },
    team_initials: {
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: "team_initials"
    },
    team_owner: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    temporary_team: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    team_logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'teams_data',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "team_id" },
        ]
      },
      {
        name: "team_initials",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "team_initials" },
        ]
      },
      {
        name: "team_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "team_name" },
        ]
      },
    ]
  });
};
