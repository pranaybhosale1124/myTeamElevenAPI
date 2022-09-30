const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('my_team', {
    my_team_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'mtel_user',
        key: 'user_id'
      }
    },
    contest_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'contest',
        key: 'contest_id'
      }
    },
    player_1_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_2_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_3_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_4_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_5_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_6_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_7_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_8_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_9_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_10_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_11_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    payment_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    points: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    reward: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    my_team_rank: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'my_team',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "my_team_id" },
        ]
      },
      {
        name: "player_1_id",
        using: "BTREE",
        fields: [
          { name: "player_1_id" },
        ]
      },
      {
        name: "player_2_id",
        using: "BTREE",
        fields: [
          { name: "player_2_id" },
        ]
      },
      {
        name: "player_3_id",
        using: "BTREE",
        fields: [
          { name: "player_3_id" },
        ]
      },
      {
        name: "player_4_id",
        using: "BTREE",
        fields: [
          { name: "player_4_id" },
        ]
      },
      {
        name: "player_5_id",
        using: "BTREE",
        fields: [
          { name: "player_5_id" },
        ]
      },
      {
        name: "player_6_id",
        using: "BTREE",
        fields: [
          { name: "player_6_id" },
        ]
      },
      {
        name: "player_7_id",
        using: "BTREE",
        fields: [
          { name: "player_7_id" },
        ]
      },
      {
        name: "player_8_id",
        using: "BTREE",
        fields: [
          { name: "player_8_id" },
        ]
      },
      {
        name: "player_9_id",
        using: "BTREE",
        fields: [
          { name: "player_9_id" },
        ]
      },
      {
        name: "player_10_id",
        using: "BTREE",
        fields: [
          { name: "player_10_id" },
        ]
      },
      {
        name: "player_11_id",
        using: "BTREE",
        fields: [
          { name: "player_11_id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_contest_id",
        using: "BTREE",
        fields: [
          { name: "contest_id" },
        ]
      },
    ]
  });
};
