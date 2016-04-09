/**
 * Vote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {

    vot_id:{
      type: 'integer',
      primaryKey: true,
      required: true
    },

    vot_usr_id: {
      model: 'User',
      unique: true
    },

    vot_pro_id: {
      model: 'TopicProposal',
      unique: true
    },
  }
};

