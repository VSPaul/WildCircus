'use strict';
module.exports = (sequelize, DataTypes) => {
  const TicketsTable = sequelize.define('TicketsTable', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    event: DataTypes.STRING,
    number_of_tickets: DataTypes.INTEGER
  }, {});
  TicketsTable.associate = function(models) {
    // associations can be defined here
  };
  return TicketsTable;
};