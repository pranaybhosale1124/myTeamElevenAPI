const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contest', {
    contest_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    team_1_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    team_2_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contest',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contest_id" },
        ]
      },
    ]
  });
};
