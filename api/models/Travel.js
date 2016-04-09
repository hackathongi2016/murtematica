/**
 * Travel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  tableName: 'Travel',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    tra_id: {
      type: 'integer',
      primaryKey: true,
      required: true
    },

    tra_origin: {
      type: 'string',
      required: true
    },

    tra_destination: {
      type: 'string',
      required: true
    },

    tra_num_days: {
      type: 'integer',
      required: true
    },

    tra_budget_min: {
      type: 'float',
      required: false
    },

    tra_budget_max: {
      type: 'float',
      required: false
    },

    tra_date: {
      type: 'date',
      required: true
    },

    tra_planning_limit: {
      type: 'date',
      required: true
    },

    tra_persons_min: {
      type: 'integer',
      required: false
    },

    tra_persons_max: {
      type: 'integer',
      required: false
    },

    tra_persons_min: {
      type: 'integer',
      required: false
    },

    tra_description: {
      type: 'integer',
      required: false
    },

    tra_lat: {
      type: 'float',
      required: true
    },

    tra_long: {
      type: 'float',
      required: true
    },

    //RELATIONS
    tra_usr_id: {
      model: 'User',
      required: true
    },

    topics: {
      collection: 'Topic',
      via: 'top_tra_id'
    },

    userTravels: {
      collection: 'UserTravel',
      via: 'ust_usr_id'
    },

    routes: {
      collection: 'Route',
      via: 'rut_tra_id'
    }

  }
};

