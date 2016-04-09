/**
 * TopicProposal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
    pro_id:{
      type: 'integer',
      primaryKey: true,
      required: true
    },

    pro_title: {
      type: 'string',
      required: true
    },

    pro_description: {
      type: 'text',
      required: false
    },

    //RELATIONS
    pro_top_id: {
      model: 'Topic',
      required: true
    },

    pro_usr_id: {
      model: 'User',
      required: true
    },

    votes: {
      collection: 'Vote',
      via: 'vot_pro_id'
    }




  }
};

