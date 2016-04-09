/**
 * WallComment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

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
    com_top_id: {
      type: 'integer',
      required: true
    },
    com_user_id: {
      type: 'integer',
      required: true
    }
  }
};

