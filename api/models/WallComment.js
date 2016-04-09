/**
 * WallComment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  tableName: 'WallComment',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    com_id: {
      type: 'integer',
      primaryKey: true,
      required: true,
    },
    com_description: {
      type: 'string',
      required: true
    },

    //RELATIONS
    com_top_id: {
      model: 'Topic',
      required: true
    },
    com_usr_id: {
      model: 'User',
      required: true
    }
  }
};

