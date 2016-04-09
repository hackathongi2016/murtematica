/**
 * Route.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //connection: 'mysql',
  attributes: {
    rut_id: {
      type: 'integer',
      primaryKey: true,
      required: true
    },
    rut_name: {
      type: 'string',
      required: true
    },

    //RELATIONS
    rut_tra_id: {
      model: 'Travel',
      unique: true
    },

    coordinates: {
      collection: 'Coordinate',
      via: 'cor_rut_id'
    }
  }
};

