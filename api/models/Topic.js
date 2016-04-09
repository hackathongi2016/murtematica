/**
 * Topic.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    top_id: {
      type: 'integer',
      primaryKey: true,
      required: true
    },
    top_name: {
      type: 'string',
      required: true
    },


    //RELATIONS
    top_tra_id: {
      model: 'Travel',
      required: true
    },


    topicProposals: {
      collection: 'TopicProposal',
      via: 'pro_top_id'
    },

    wallComments: {
      collection: 'WallComment',
      via: 'com_top_id'
    }
  }
};

