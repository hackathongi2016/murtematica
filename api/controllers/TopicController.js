/**
 * TopicController
 *
 * @description :: Server-side logic for managing Topics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req,res){
    //DataBinding de la vista
    return res.view('topic/index.ejs',{
      'data': {test: 'HOLAAAAAA'}
    });
  }

};

