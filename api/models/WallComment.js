/**
 * WallComment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    com_id: {
      type: 'integer',
      primaryKey: true,
      required: true
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
    com_user_id: {
      model: 'User',
      required: true
    }
  }
};

