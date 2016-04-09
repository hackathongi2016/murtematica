/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    usr_id: {
      type: 'integer',
      primaryKey: true,
      required: true
    },
    usr_name: {
      type: 'string',
      required: true
    },
    usr_surname: {
      type: 'string',
      required: true
    },
    usr_nickname: {
      type: 'string',
      required: true
    },
    usr_mail: {
      type: 'string',
      required: true
    },
    usr_password: {
      type: 'string',
      required: true
    },
    usr_birthday: {
      type: 'date',
      required: true
    },
    usr_gender: {
      type: 'binary',
      required: true
    },
    usr_register_date: {
      type: 'date',
      required: true
    },
    usr_avatar_url: {
      type: 'string',
      required: false
    }
  }
};

