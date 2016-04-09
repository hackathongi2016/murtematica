/**
 * Topic.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

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
    top_tra_id: {
      type: 'string',
      required: true
    }
  }
};

