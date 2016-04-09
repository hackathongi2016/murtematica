/**
 * TopicController
 *
 * @description :: Server-side logic for managing Topics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * TopicController
   *
   * @description :: Server-side logic for managing Topics
   * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
   */

  index: function(req,res) {
    return res.view('topic/index.ejs',null);
  },


};

