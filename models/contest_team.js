const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contest_team', {
    contest_team_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contest_team_name: {
      type: DataTypes.STRING(16),
      allowNull: true
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
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_2_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_3_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_4_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_5_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_6_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_7_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_8_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_9_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_10_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_11_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_12_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_13_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_14_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_15_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_16_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_17_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_18_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_19_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    },
    player_20_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'player',
        key: 'player_id'
      }
    }
  }, {
    sequelize,
    tableName: 'contest_team',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contest_team_id" },
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
        name: "player_12_id",
        using: "BTREE",
        fields: [
          { name: "player_12_id" },
        ]
      },
      {
        name: "player_13_id",
        using: "BTREE",
        fields: [
          { name: "player_13_id" },
        ]
      },
      {
        name: "player_14_id",
        using: "BTREE",
        fields: [
          { name: "player_14_id" },
        ]
      },
      {
        name: "player_15_id",
        using: "BTREE",
        fields: [
          { name: "player_15_id" },
        ]
      },
      {
        name: "player_16_id",
        using: "BTREE",
        fields: [
          { name: "player_16_id" },
        ]
      },
      {
        name: "player_17_id",
        using: "BTREE",
        fields: [
          { name: "player_17_id" },
        ]
      },
      {
        name: "player_18_id",
        using: "BTREE",
        fields: [
          { name: "player_18_id" },
        ]
      },
      {
        name: "player_19_id",
        using: "BTREE",
        fields: [
          { name: "player_19_id" },
        ]
      },
      {
        name: "player_20_id",
        using: "BTREE",
        fields: [
          { name: "player_20_id" },
        ]
      },
      {
        name: "contest_id",
        using: "BTREE",
        fields: [
          { name: "contest_id" },
        ]
      },
    ]
  });
};
