const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class ListNames extends Model {}

ListNames.init(
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    listName: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER,
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'ListNames'
  }
);

module.exports = ListNames;