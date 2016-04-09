/**
 * Coordinate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //connection: 'mysql',
  attributes: {
    cor_id: {
      type: 'integer',
      primaryKey: true,
      required: true
    },

    cor_lat: {
      type: 'float',
      required: true
    },

    cor_long: {
      type: 'float',
      required: true
    },

    cor_order: {
      type: 'integer',
      required: true
    },

    //RELATIONS
    cor_rut_id: {
      model: 'Route',
      required: true
    },

  }
};

