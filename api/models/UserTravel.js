/**
 * UserTravel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  tableName: 'UserTravel',
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
      ust_id: {
        type: 'integer',
        primaryKey: true,
        required: true
      },

      ust_usr_id: {
        model: 'User',
        require: true
      },

      ust_tra_id: {
        model: 'Travel',
        require: true
      }
  }
};

